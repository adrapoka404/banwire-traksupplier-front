import { doc, getDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadProfile = async (uid = "") => {
  if (!uid) throw new Error("El ID de usuario no existe");

  const docRef = doc(FirebaseDB, `profile`, uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("Perfil no encontrado");
  }
};
