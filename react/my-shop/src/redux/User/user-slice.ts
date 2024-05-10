import { createSlice } from '@reduxjs/toolkit';

interface User {
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: {
    name: 'Victor Matheus',
    email: 'victormatheus507@gmail.com',
  },
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const {login, logout} = userSlice.actions