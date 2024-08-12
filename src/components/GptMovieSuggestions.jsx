import { useSelector } from 'react-redux';
import MovieList from './MovieList';
const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { gptMovies, gptMovieName } = gpt;

  if (!gptMovieName) null;

  return (
    <div className="bg-black bg-opacity-70 px-4 m-10">
      <div>
        <p>Search Results</p>
        <ul className="text-white">
          {gptMovieName?.map((movieName, index) => (
            <MovieList
              Key={movieName + Math.random()}
              title={movieName}
              movies={gptMovies[index]}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
