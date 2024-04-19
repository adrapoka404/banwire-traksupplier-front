import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { userSlice } from "./user";
import { accountSlice } from "./account";
import { banwireSlice } from "./banwire";
import { profileSlice } from "./profile";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    account: accountSlice.reducer,
    banwire: banwireSlice.reducer,
    profile: profileSlice.reducer,
  },
});
