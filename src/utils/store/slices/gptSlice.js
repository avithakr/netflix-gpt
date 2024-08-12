import { createSlice } from '@reduxjs/toolkit';

const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    gptMovieName: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieName, movies } = action.payload;
      state.gptMovies = movies;
      state.gptMovieName = movieName;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export const gptReducer = gptSlice.reducer;
