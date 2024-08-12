import propsType from 'prop-types';
import { IMAGE_CDN_URL } from '../utils/constants';

const MovieCard = ({ movie }) => {
  const { title, poster_path } = movie;

  return (
    <>
      {poster_path && (
        <div className="w-44 pr-4">
          <img src={IMAGE_CDN_URL + poster_path} alt={title} />
        </div>
      )}
    </>
  );
};

MovieCard.propTypes = {
  movie: propsType.shape({
    title: propsType.string,
    poster_path: propsType.string,
  }),
};

export default MovieCard;
