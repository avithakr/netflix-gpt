import lang from '../utils/LanguageConstants';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import openai from './../utils/openai';
import { addGptMovieResult } from '../utils/store';
import { API_OPTIONS, getMovieSearchUrl } from './../utils/constants';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const { global } = useSelector((state) => state.config);
  const gptMovies = useSelector((state) => state.gpt.gptMovies);

  console.log(gptMovies);

  const searchMovieTMDB = async (movie) => {
    const res = await fetch(getMovieSearchUrl(movie), API_OPTIONS);
    const data = await res.json();
    return data.results;
  };

  function getSearchAndPlaceholder(language) {
    if (!lang[language]) {
      return { search: '', gptSearchPlaceholder: '' };
    }

    return {
      search: lang[language].search,
      gptSearchPlaceholder: lang[language].gptSearchPlaceholder,
    };
  }

  const data = getSearchAndPlaceholder(global);

  const handleGptSearchClick = async () => {
    // make api call to get the movie result

    const gptQuery =
      'Act as a movie recomendation system and suggest some movies for the query' +
      searchRef.current.value +
      '.only give me names of 5 movies, comma seperated like the example result given ahed. Example Result: gadar, don, hera pheri';

    searchRef.current.value = '';
    const gptMovieResult = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    const moviesList = gptMovieResult?.choices[0]?.message.content
      .split(',')
      .map((el) => el.trim());

    const promiseArray = moviesList.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovieResult({ movieName: moviesList, movies: tmdbResults }));
  };

  return (
    <div className="pt-20 bg-black bg-opacity-30">
      <form
        className="md:w-1/2 mx-auto flex flex-col items-center gap-4 mt-14 md:flex-row justify-between bg-black p-4 md:rounded-full "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          required
          placeholder={
            data.gptSearchPlaceholder || lang.english.gptSearchPlaceholder
          }
          className="w-full border-2 border-gray-800 px-5 py-2 rounded-full"
          ref={searchRef}
        />
        <button
          className="px-5 py-2 border-2 border-red-500 bg-red-500 text-white font-bold rounded-full ml-5"
          onClick={handleGptSearchClick}
        >
          {data.search || lang.english.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
