import { createSlice } from "@reduxjs/toolkit";
import { configBanwire } from "../../banwire/config";

const initialState = {
  value: 0,
};

export const banwireSlice = createSlice({
  name: "banwire",
  initialState: {
    bw: {
      user: configBanwire.user,
      sandbox: true,
      title: "tracksupplier",
      language: "es",
      secure3d: false,
      reference: "#",
      concept: "tracksupplier",
      currency: "MXN",
      cust: {},
      ship: {},
      showShipping: false,
      url_notify: configBanwire.notifyUrl,
      notifyUrl: configBanwire.notifyUrl,
      paymentOptions: "all",
      reviewOrder: true,
      total: 0,
    },
    isWorking: false,
  },
  reducers: {
    banwireWorking: (state) => {
      state.isWorking = true;
    },
    populateBanwire: (state, action) => {
      console.log("vengo a popular", action);
      const { conceptAccount, amountAccount } = action.payload.account;
      const { addr, city, country, zip } = action.payload.profile;

      state.bw.sandbox = true;
      state.bw.title = "tracksupplier: " + conceptAccount;
      state.bw.language = "es";
      state.bw.secure3d = false;
      state.bw.reference = action.payload.uid;
      state.bw.concept = "tracksupplier: " + conceptAccount;
      state.bw.currency = "MXN";
      state.bw.cust = { ...action.payload.profile };
      state.bw.ship = {
        addr: addr,
        city: city,
        state: "MX",
        country: country,
        zip: zip,
      };
      state.bw.showShipping = false;
      state.bw.url_notify = configBanwire.notifyUrl;
      state.bw.notifyUrl = configBanwire.notifyUrl;
      state.bw.paymentOptions = "all";
      state.bw.reviewOrder = true;
      state.bw.total = amountAccount;
    },
  },
});

// Action creators are generated for each case reducer function
export const { banwireWorking, populateBanwire } = banwireSlice.actions;
