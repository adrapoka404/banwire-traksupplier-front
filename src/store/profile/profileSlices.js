import { createSlice } from "@reduxjs/toolkit";
import { setProfileInAuth } from "../auth";

const initialState = {
  value: 0,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {},
    isWorking: false,
    messageProfile: "",
    cantPay: false,
  },
  reducers: {
    saveProfile: (state) => {
      state.isWorking = true;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
      setProfileInAuth(action.payload);
      state.isWorking = false;
      state.messageProfile = "Se han realizados los cambios en el perfil";
    },
    setProfileOnload: (state, action) => {
      state.profile = action.payload;
      setProfileInAuth(action.payload);
    },
    active: (state, action) => {
      state.active = action.payload;
    },
    cantPay: (state) => {
      state.cantPay = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveProfile, setProfile, setProfileOnload, active, cantPay } =
  profileSlice.actions;
