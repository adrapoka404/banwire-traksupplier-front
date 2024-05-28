import {
  activeAccount,
  addNEwAccount,
  cancelAccount,
  createAccount,
  deleteAccount,
  editAccount,
  restoreAccount,
  setAccounts,
} from "./accountSlice";
import { FirebaseDB } from "../../firebase/config";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import {
  loadAccount,
  loadAccountCancel,
  loadAccountPay,
  loadAccountPending,
} from "../../helpers/loadAccount";

export const startSaveAccount = ({
  conceptAccount,
  amountAccount,
  userAccount,
}) => {
  return async (dispatch, getState) => {
    dispatch(createAccount());

    const { uid } = getState().auth;

    const newAccount = {
      user: uid,
      statusAccount: null,
      conceptAccount,
      amountAccount,
      userAccount,
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `accounts`));

    await setDoc(newDoc, newAccount);
    newAccount.id = newDoc.id;

    dispatch(addNEwAccount(newAccount));
    dispatch(activeAccount(newAccount));
  };
};

export const startGetAccountAwait = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const accounts = await loadAccount(uid);
    const msgEmpty = "No hay registro de cuentas por pagar";
    dispatch(setAccounts({ accounts, msgEmpty }));
  };
};

export const startGetAccountPending = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const accounts = await loadAccountPending(uid);
    const msgEmpty = "No hay registro de cuentas pendientes de pago";
    dispatch(setAccounts({ accounts, msgEmpty }));
  };
};
export const startGetAccountPay = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const accounts = await loadAccountPay(uid);
    const msgEmpty = "No hay registro de cuentas pagadas";
    dispatch(setAccounts({ accounts, msgEmpty }));
  };
};

export const startGetAccountCancel = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const accounts = await loadAccountCancel(uid);
    const msgEmpty = "No hay registro de cuentas canceladas";
    dispatch(setAccounts({ accounts, msgEmpty }));
  };
};

export const startActiveAccountForEdit = (account) => {
  return async (dispatch, getState) => {
    dispatch(activeAccount(account));
  };
};

export const startAccountCancel = (account) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    dispatch(activeAccount(account));

    const accountToFirebase = { ...account };

    delete accountToFirebase.id;
    accountToFirebase.statusAccount = "cancel";

    const docRef = doc(
      FirebaseDB,
      `${uid}/traksupplier/accounts/${account.id}`
    );

    const resp = await setDoc(docRef, accountToFirebase, { merge: true });

    dispatch(cancelAccount(account));
  };
};

export const startAccountDelete = (account) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    dispatch(activeAccount(account));

    const docRef = doc(
      FirebaseDB,
      `${uid}/traksupplier/accounts/${account.id}`
    );
    const resp = await deleteDoc(docRef);

    dispatch(deleteAccount(account));
  };
};

export const startAccountRestore = (account) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    dispatch(activeAccount(account));

    const accountToFirebase = { ...account };

    delete accountToFirebase.id;
    accountToFirebase.statusAccount = null;

    const docRef = doc(
      FirebaseDB,
      `${uid}/traksupplier/accounts/${account.id}`
    );

    const resp = await setDoc(docRef, accountToFirebase, { merge: true });

    dispatch(restoreAccount(account));
  };
};

export const startAccountEdit = (account) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active } = getState().account;

    const accountToFirebase = { ...account };

    const docRef = doc(FirebaseDB, `${uid}/traksupplier/accounts/${active.id}`);

    const resp = await setDoc(docRef, accountToFirebase, { merge: true });

    const accounts = await loadAccount(uid);

    dispatch(editAccount({ accounts, account }));
  };
};
