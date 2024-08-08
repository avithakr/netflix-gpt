import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { URL, API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/store';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getMoviePlaying = useCallback(async () => {
    const res = await fetch(URL, API_OPTIONS);
    const data = await res.json();
    dispatch(addNowPlayingMovies(data.results));
  }, [dispatch]);

  useEffect(() => {
    getMoviePlaying();
  }, [getMoviePlaying]);
};

export default useNowPlayingMovies;
