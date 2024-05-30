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
    isComplete: false,
  },
  reducers: {
    saveProfile: (state) => {
      state.isWorking = true;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;

      state.isWorking = false;
      state.messageProfile = "Se han realizados los cambios en el perfil";
      state.isComplete = checkIsProfileComplete(action.payload);
      if (state.isComplete) state.cantPay = true;
      setProfileInAuth(state);
    },
    setProfileOnload: (state, action) => {
      state.profile = action.payload;
      setProfileInAuth(action.payload);
      state.isComplete = checkIsProfileComplete(action.payload);
      if (state.isComplete) state.cantPay = true;
      setProfileInAuth(state);
    },
    active: (state, action) => {
      state.active = action.payload;
    },
    cantPay: (state) => {
      state.cantPay = true;
    },
    clearAlertProfile: (state) => {
      state.messageProfile = "";
    },
  },
});

const checkIsProfileComplete = (profile) => {
  // Verificar si los campos requeridos en el perfil tienen valor
  const { fname, lname, mname, phone, city, email, zip, country, state, addr } =
    profile;
  return (
    !!fname &&
    !!lname &&
    !!mname &&
    !!phone &&
    !!city &&
    !!email &&
    !!zip &&
    !!country &&
    !!state &&
    !!addr
  );
};

// Action creators are generated for each case reducer function
export const {
  saveProfile,
  setProfile,
  setProfileOnload,
  active,
  cantPay,
  checkIsComplete,
  clearAlertProfile,
} = profileSlice.actions;
