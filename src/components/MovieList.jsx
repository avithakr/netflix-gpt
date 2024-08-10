import propTypes from 'prop-types';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <p className="font-bold text-2xl py-4">{title}</p>
      <div className="pt-4 flex overflow-x-scroll">
        <div className="flex ">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

MovieList.propTypes = {
  title: propTypes.string,
  movies: propTypes.array,
};

export default MovieList;
