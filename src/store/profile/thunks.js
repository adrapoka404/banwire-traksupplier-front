import { collection, doc, setDoc } from "firebase/firestore/lite";
import {
  checkIsComplete,
  saveProfile,
  setProfile,
  setProfileOnload,
} from "./profileSlices";
import { FirebaseDB } from "../../firebase/config";
import { setProfileInAuth } from "../auth";
import { loadProfile } from "../../helpers/loadProfile";
import { ctrlClosePopup } from "../account";

export const startSaveProfile = (profile) => {
  return async (dispatch, getState) => {
    dispatch(saveProfile());

    const { uid } = getState().auth;
    const { profile: existingProfile } = getState().profile;

    let url = `profile`;
    const newProfile = {
      user: uid,
      ...profile,
      date: new Date().getTime(),
    };

    // Crear la referencia al documento una vez
    const refDoc = existingProfile?.id
      ? doc(FirebaseDB, `${url}/${existingProfile.id}`)
      : doc(collection(FirebaseDB, url));

    // Guardar el perfil
    await setDoc(refDoc, newProfile, { merge: true });
    newProfile.id = refDoc.id;

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
