import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperation';
// import {
//   handleLogOutFulfilled,
//   handleRefreshUserFulfilled,
//   handleRefreshUserPending,
//   handleRefreshUserRejected,
//   handleRegisterFulfilled,
// } from './initial';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: {
    [register.pending]() {},
    [register.fulfilled](state, { payload }) {
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected]() {},

    [logIn.pending]() {},
    [logIn.fulfilled](state, { payload }) {
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected]() {},

    [logOut.pending]() {},
    [logOut.fulfilled]() {
      return authInitialState;
    },
    [logOut.rejected]() {},

    [refreshUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [refreshUser.fulfilled](state, { payload }) {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [refreshUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export const authReducer = authSlice.reducer;
