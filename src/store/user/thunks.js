import { registerUserWithEmailPassword } from "../../firebase/provider";
import { checkingUser, notifyError } from "./userSlice";
// import {checkingUser} from '.'

export const startCreateingUserWithEmailPassword = ({
  email,
  password,
  displayname,
}) => {
  return async (dispatch) => {
    dispatch(checkingUser());
    console.log({
      email,
      password,
      displayname,
    });

    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayname,
      });

    if (!ok) {
      dispatch(notifyError(errorMessage));
      return { errorMessage };
    }

    return success;
  };
};
