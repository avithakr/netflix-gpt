import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div className="pt-52 bg-black text-white">
      <div className="-mt-48 relative z-40 px-12">
        <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
        <MovieList title="Trending" movies={movies?.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies?.popularMovies} />
        <MovieList title="Upcoming Movies" movies={movies?.nowPlayingMovies} />
        <MovieList title="Horror Movies" movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
