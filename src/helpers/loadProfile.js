import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadProfile = async (uid = "") => {
  if (!uid) throw new Error("EL ID de usuario no existe");

  const docRef = collection(FirebaseDB, `${uid}/traksupplier/profile`);
  const docs = await getDocs(docRef);

  const profiles = [];

  docs.forEach((doc) => {
    profiles.push({ id: doc.id, ...doc.data() });
  });

  return profiles[0];
};
