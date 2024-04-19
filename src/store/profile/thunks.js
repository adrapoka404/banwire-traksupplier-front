import { collection, doc, setDoc } from "firebase/firestore/lite";
import { saveProfile, setProfile, setProfileOnload } from "./profileSlices";
import { FirebaseDB } from "../../firebase/config";
import { setProfileInAuth } from "../auth";
import { loadProfile } from "../../helpers/loadProfile";
import { ctrlClosePopup } from "../account";

export const startSaveProfile = (profile) => {
  return async (dispatch, getState) => {
    dispatch(saveProfile());

    const { uid } = getState().auth;
    const { profile: pExiste } = getState().profile;
    let url = `${uid}/traksupplier/profile`;

    const newProfile = {
      user: uid,
      ...profile,
      date: new Date().getTime(),
    };

    if (pExiste?.id) {
      url += `/${pExiste.id}`;
      delete newProfile.date;
      delete newProfile.user;
      delete newProfile.id;
      const refDoc = doc(FirebaseDB, url);

      await setDoc(refDoc, newProfile, { merge: true });
      newProfile.id = refDoc.id;
      console.log("si edite: " + url);
    } else {
      const refDoc = doc(collection(FirebaseDB, url));
      await setDoc(refDoc, newProfile);
      newProfile.id = refDoc.id;
    }

    dispatch(setProfileInAuth(newProfile));
    dispatch(setProfile(newProfile));
    dispatch(ctrlClosePopup());
  };
};

export const startGetProfile = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const profile = await loadProfile(uid);

    dispatch(setProfileOnload(profile));
  };
};
