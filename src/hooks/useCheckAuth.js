import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth";
import { FirebaseAuth } from "../firebase/config";
import { startGetAccountAwait } from "../store/account";
import { cantPay, startGetProfile } from "../store/profile";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
      dispatch(startGetAccountAwait());
      dispatch(startGetProfile());
      dispatch(cantPay());
    });
  }, []);

  return { status };
};