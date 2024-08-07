import { configureStore } from '@reduxjs/toolkit';
import { userReducer, addUser, removeUser } from './slices/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export { store, addUser, removeUser };
