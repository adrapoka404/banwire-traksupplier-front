import { doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const startChangeStatusPendigAccount = async (account, uid) => {
  const accountToFirebase = { ...account };

  delete accountToFirebase.id;
  accountToFirebase.statusAccount = "pending";
  const docRef = doc(FirebaseDB, `${uid}/traksupplier/accounts/${account.id}`);

  await setDoc(docRef, accountToFirebase, { merge: true });
};
