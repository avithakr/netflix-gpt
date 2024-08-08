import { useState } from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);
  const [loading, setLoading] = useState(true);

  useMovieTrailer(movieId, setLoading);

  return (
    <div className="absolute">
      {loading ? (
        <p>Loading trailer...</p>
      ) : trailerVideo && trailerVideo.key ? (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?&autoplay=1&mute=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="Movie Trailer"
          allowFullScreen
        ></iframe>
      ) : (
        <p>No trailer available.</p>
      )}
    </div>
  );
};

VideoBackground.propTypes = {
  movieId: propTypes.number.isRequired,
};

export default VideoBackground;
