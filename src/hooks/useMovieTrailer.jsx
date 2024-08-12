import { useCallback, useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/store';
import { useDispatch, useSelector } from 'react-redux';

const useMovieTrailer = (movieId, setLoading) => {
  const dispatch = useDispatch();
  const { trailerVideo } = useSelector((store) => store.movies);

  const getMovieVideos = useCallback(async () => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
      const res = await fetch(url, API_OPTIONS);
      if (!res.ok) throw new Error('Failed to fetch video data');
      const data = await res.json();

      const filterData = data.results.filter(
        (video) => video.type === 'Trailer'
      );
      const trailer = filterData.length !== 0 ? filterData[0] : data.results[0];

      if (trailer) {
        dispatch(addTrailerVideo(trailer));
      } else {
        throw new Error('No trailer found');
      }
    } catch (error) {
      console.error('Error fetching movie trailer:', error);
    } finally {
      setLoading(false);
    }
  }, [movieId, dispatch, setLoading]);

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, [movieId, dispatch, getMovieVideos, trailerVideo]);
};

export default useMovieTrailer;
