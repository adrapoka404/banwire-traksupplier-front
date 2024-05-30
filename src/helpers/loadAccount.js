import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

const getUserData = async (uid) => {
  const userDoc = await getDoc(doc(FirebaseDB, `users/${uid}`));
  return userDoc.exists() ? userDoc.data() : null;
};

const loadAccountsHelper = async (collectionRef, includeUserData = false) => {
  const docs = await getDocs(collectionRef);
  const accounts = [];

  for (const doc of docs.docs) {
    const accountData = doc.data();
    if (includeUserData && accountData.userAccount) {
      const userData = await getUserData(accountData.userAccount);
      accounts.push({ id: doc.id, ...accountData, userData: userData });
    } else {
      accounts.push({ id: doc.id, ...accountData });
    }
  }

  return accounts;
};

export const loadAccount = async (uid = "", admin = false) => {
  if (!uid) throw new Error("El ID de usuario no existe");

  let collectionRef;
  if (admin) {
    collectionRef = query(
      collection(FirebaseDB, `accounts`),
      where("statusAccount", "==", null)
    );
  } else {
    collectionRef = query(
      collection(FirebaseDB, `accounts`),
      where("statusAccount", "==", null),
      where("userAccount", "==", uid)
    );
  }

  return loadAccountsHelper(collectionRef, admin);
};

export const loadAccountPending = async (uid = "", admin = false) => {
  if (!uid) throw new Error("El ID de usuario no existe");

  let collectionRef;
  if (admin) {
    collectionRef = query(
      collection(FirebaseDB, `/accounts`),
      where("statusAccount", "==", "pending")
    );
  } else {
    collectionRef = query(
      collection(FirebaseDB, `accounts`),
      where("statusAccount", "==", "pending"),
      where("userAccount", "==", uid)
    );
  }

  return loadAccountsHelper(collectionRef, admin);
};

export const loadAccountPay = async (uid = "", admin = false) => {
  if (!uid) throw new Error("El ID de usuario no existe");

  let collectionRef;
  if (admin) {
    collectionRef = query(
      collection(FirebaseDB, `accounts`),
      where("statusAccount", "==", "paid")
    );
  } else {
    collectionRef = query(
      collection(FirebaseDB, `accounts`),
      where("statusAccount", "==", "paid"),
      where("userAccount", "==", uid)
    );
  }

  return loadAccountsHelper(collectionRef, admin);
};

export const loadAccountCancel = async (uid = "", admin = false) => {
  if (!uid) throw new Error("El ID de usuario no existe");

  let collectionRef;
  if (admin) {
    collectionRef = query(
      collection(FirebaseDB, `accounts`),
      where("statusAccount", "==", "cancel")
    );
  } else {
    collectionRef = query(
      collection(FirebaseDB, `accounts`),
      where("statusAccount", "==", "cancel"),
      where("userAccount", "==", uid)
    );
  }

  return loadAccountsHelper(collectionRef, admin);
};
