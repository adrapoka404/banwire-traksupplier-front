import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth, FirebaseDB } from "./config";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";

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

    await setDoc(doc(FirebaseDB, `profile`, uid), {
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
    console.error("Error al registrar usuario:", error.message);
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

    const { uid, photoURL, displayName } = result.user;

    const userDoc = await getDoc(doc(FirebaseDB, "users", uid));
    let admin = false;
    if (userDoc.exists()) {
      admin = userDoc.data().admin;
    } else {
      console.log("No se encontró el documento del usuario en Firestore.");
    }

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
      admin,
    };
  } catch (error) {
    console.error("Error en loginWhitEmailPassword:", error.message);
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const logoutFirebase = async () => {
  try {
    await FirebaseAuth.signOut();
    console.log("Sesión cerrada correctamente.");
  } catch (error) {
    console.error("Error al cerrar sesión:", error.message);
  }
};

export const fetchUsers = async () => {
  try {
    const usersCollection = collection(FirebaseDB, "users");
    const usersQuery = query(usersCollection, where("admin", "!=", true));
    const usersSnapshot = await getDocs(usersQuery);
    const usersList = usersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return usersList;
  } catch (error) {
    console.error("Error al obtener usuarios:", error.message);
    return [];
  }
};
