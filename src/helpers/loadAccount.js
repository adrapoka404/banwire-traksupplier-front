import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadAccount = async (uid = "") => {
  if (!uid) throw new Error("EL ID de usuario no existe");

  const collectionRef = query(
    collection(FirebaseDB, `${uid}/traksupplier/accounts`),
    where("statusAccount", "==", null)
  );
  const docs = await getDocs(collectionRef);

  const accounts = [];

  docs.forEach((doc) => {
    accounts.push({ id: doc.id, ...doc.data() });
  });

  return accounts;
};

export const loadAccountPending = async (uid = "") => {
  if (!uid) throw new Error("EL ID de usuario no existe");

  const collectionRef = query(
    collection(FirebaseDB, `${uid}/traksupplier/accounts`),
    where("statusAccount", "==", "pending")
  );
  const docs = await getDocs(collectionRef);

  const accounts = [];

  docs.forEach((doc) => {
    accounts.push({ id: doc.id, ...doc.data() });
  });

  return accounts;
};

export const loadAccountPay = async (uid = "") => {
  if (!uid) throw new Error("EL ID de usuario no existe");

  const collectionRef = query(
    collection(FirebaseDB, `${uid}/traksupplier/accounts`),
    where("statusAccount", "==", "paid")
  );
  const docs = await getDocs(collectionRef);

  const accounts = [];

  docs.forEach((doc) => {
    accounts.push({ id: doc.id, ...doc.data() });
  });

  return accounts;
};

export const loadAccountCancel = async (uid = "") => {
  if (!uid) throw new Error("EL ID de usuario no existe");

  const collectionRef = query(
    collection(FirebaseDB, `${uid}/traksupplier/accounts`),
    where("statusAccount", "==", "cancel")
  );
  const docs = await getDocs(collectionRef);

  const accounts = [];

  docs.forEach((doc) => {
    accounts.push({ id: doc.id, ...doc.data() });
  });

  return accounts;
};
