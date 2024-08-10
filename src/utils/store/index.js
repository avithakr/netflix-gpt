import { configureStore } from '@reduxjs/toolkit';
import { userReducer, addUser, removeUser } from './slices/userSlice';
import {
  movieReducer,
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
} from './slices/movieSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});

export {
  store,
  addUser,
  removeUser,
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
};
