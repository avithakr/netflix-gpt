import lang from '../utils/LanguageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const { global } = useSelector((state) => state.config);

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

  return (
    <div className="pt-20">
      <form className="w-1/2 mx-auto flex justify-between bg-black p-4 rounded-full">
        <input
          type="text"
          placeholder={
            data.gptSearchPlaceholder || lang.english.gptSearchPlaceholder
          }
          className="w-full border-2 border-gray-800 px-5 py-2 rounded-full"
        />
        <button className="px-5 py-2 border-2 border-red-500 bg-red-500 text-white font-bold rounded-full ml-5">
          {data.search || lang.english.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
