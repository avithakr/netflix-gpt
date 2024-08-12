import { configureStore } from '@reduxjs/toolkit';
import { userReducer, addUser, removeUser } from './slices/userSlice';
import {
  movieReducer,
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
} from './slices/movieSlice';
import {
  gptReducer,
  toggleGptSearchView,
  addGptMovieResult,
} from './slices/gptSlice';
import { configReducer, setLanguage } from './slices/configSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export {
  store,
  addUser,
  removeUser,
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  toggleGptSearchView,
  setLanguage,
  addGptMovieResult,
};
