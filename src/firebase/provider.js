import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth, FirebaseDB } from "./config";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";

const googleProvider = new GoogleAuthProvider();

export const singInWhithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.errorCode;
    const errorMessage = error.errorMessage;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
  admin = false,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { uid, photoURL } = resp.user;

    await updateProfile(FirebaseAuth.currentUser, {
      displayName,
    });

    await setDoc(doc(FirebaseDB, `${uid}/traksupplier/profile`, uid), {
      displayName,
      email,
      admin,
    });

    await setDoc(doc(FirebaseDB, "users", uid), {
      displayName,
      email,
      admin,
    });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
      admin,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const loginWhitEmailPassword = async ({ email, password }) => {
  try {
    const result = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { uid, photoURL, displayName, admin } = result.user;

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
      admin,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};

export const fetchUsers = async () => {
  const usersCollection = collection(FirebaseDB, "users");
  const usersQuery = query(usersCollection, where("admin", "!=", true));
  const usersSnapshot = await getDocs(usersQuery);
  const usersList = usersSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return usersList;
};
