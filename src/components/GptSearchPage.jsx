import GptMovieSuggestions from './GptMovieSuggestions';
import GptSearchBar from './GptSearchBar';

const GptSearchPage = () => {
  return (
    <div className="">
      <div className="absolute -z-10">
        <img src="./neflixloginbg.jpg" alt="background banner" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
