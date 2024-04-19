import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    password: "",
    email: "",
    active: false,
    status: true,
    role: false,
    message: null,
  },
  reducers: {
    checkingUser: (state) => {
      state.active = true;
    },
    notifyError: (state, action) => {
      state.message = action.payload;
      state.active = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { checkingUser, notifyError } = userSlice.actions;
