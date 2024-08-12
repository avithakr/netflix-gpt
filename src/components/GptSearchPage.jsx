import GptMovieSuggestions from './GptMovieSuggestions';
import GptSearchBar from './GptSearchBar';

const GptSearchPage = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img
          src="./neflixloginbg.jpg"
          alt="background banner"
          className="fixed object-cover h-screen md:w-screen"
        />
      </div>

      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
