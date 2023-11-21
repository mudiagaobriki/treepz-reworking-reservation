import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  currentUser: {},
  token: null,
  resetEmail: "",
  resetCode: "",
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload?.user;
      state.isLogin = true;
      state.token = action?.payload?.loginToken
    },
    // setSignIn: (state, action="") => {
    //   state.isLoggedIn = true;
    //   state.token = action.payload.loginToken;
    // },
    setSignOut: (state) => {
      state.isLoggedIn = false;
      state.token = null;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setResetEmail: (state, action) => {
      state.resetEmail = action.payload
    },
    setResetCode: (state, action) => {
      state.resetCode = action.payload
    },
  },
});

export const { setCurrentUser, setSignOut, setStatus,
  setResetEmail, setResetCode, } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectAuthStatus = (state) => state.auth.status;
export const selectCurrentUser = (state) => state.auth.currentUser;

const authReducer = authSlice.reducer;

export default authReducer;
