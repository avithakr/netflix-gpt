import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      <div className="py-28 px-8">
        <h1>Browser Page</h1>
        {/**
        * Main container
        *   - video background
        *   - video title
        * secondary container
        *   cards * n
        
         */}
      </div>
    </div>
  );
};

export default Browse;
