import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, POPULAR_MOVIE_URL } from '../utils/constants';
import { addPopularMovies } from '../utils/store';

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = useCallback(async () => {
    try {
      const res = await fetch(POPULAR_MOVIE_URL, API_OPTIONS);
      const data = await res.json();
      dispatch(addPopularMovies(data.results));
    } catch (error) {
      console.error('Failed to fetch popular movies:', error);
    }
  }, [dispatch]);

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, [getPopularMovies, popularMovies]);

  return null; // This custom hook doesn't return anything
};

export default usePopularMovies;
