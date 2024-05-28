import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", // 'checking' 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    admin: false,
    photoURL: null,
    errorMessage: null,
    profile: {},
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.admin = payload.admin;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.admin = false;
      state.photoURL = null;
      state.errorMessage = payload?.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
    setProfileInAuth: (state, action) => {
      state.profile = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials, setProfileInAuth } =
  authSlice.actions;
