import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    page: 0,
    total: 0,
    prev: null,
    next: null,
    accounts: [],
    active: false,
    inAccount: "pending",
    inAccountLabel: "Por pagar",
    isLoading: false,
    isWorking: false,
    messageAccount: "",
    msgEmpty: "",
    popup: false,
  },
  reducers: {
    createAccount: (state) => {
      state.isWorking = true;
    },
    addNEwAccount: (state, action) => {
      state.accounts.push(action.payload);
      state.isWorking = false;
      state.popup = false;
      state.messageAccount =
        action.payload.conceptAccount + " creada correctamente";
    },
    activeAccount: (state, action) => {
      state.active = action.payload;
    },
    activeAccountForEdit: (state, action) => {
      state.active = action.payload;
      state.inEdit = true;
    },
    setAccounts: (state, action) => {
      state.accounts = action.payload.accounts;
      state.msgEmpty = action.payload.msgEmpty;
    },
    inAccount: (state, action) => {
      state.inAccount = action.payload.account;
      state.inAccountLabel = action.payload.label;
    },
    clearAccount: (state, action) => {
      state.active = false;
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
    },
    editAccount: (state, action) => {
      state.active = false;
      state.popup = false;
      state.accounts = action.payload.accounts;
      state.messageAccount =
        action.payload.account.conceptAccount +
        " se ha editado de forma correcta";
    },
    cancelAccount: (state, action) => {
      state.active = false;
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload.id
      );
      state.messageAccount =
        action.payload.conceptAccount + " se ha cancelado de forma correcta";
    },
    deleteAccount: (state, action) => {
      state.active = false;
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload.id
      );
      state.messageAccount =
        action.payload.conceptAccount + " se ha eliminado de forma correcta";
    },
    restoreAccount: (state, action) => {
      state.active = false;
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload.id
      );
      state.messageAccount =
        action.payload.conceptAccount + " se ha restaurado de forma correcta";
    },
    ctrlOpenPopup: (state) => {
      state.popup = true;
    },
    ctrlClosePopup: (state) => {
      state.popup = false;
      state.active = false;
    },
    clearAlertAccount: (state) => {
      state.messageAccount = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  createAccount,
  addNEwAccount,
  activeAccount,
  setAccounts,
  clearAccount,
  editAccount,
  cancelAccount,
  deleteAccount,
  restoreAccount,
  ctrlOpenPopup,
  ctrlClosePopup,
  clearAlertAccount,
} = accountSlice.actions;
