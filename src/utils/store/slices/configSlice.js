import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
  name: 'config',
  initialState: {
    global: 'en',
  },
  reducers: {
    setLanguage: (state, action) => {
      state.global = action.payload;
    },
  },
});

export const { setLanguage } = configSlice.actions;
export const configReducer = configSlice.reducer;
