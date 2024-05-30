import { registerUserWithEmailPassword } from "../../firebase/provider";
import { checkingUser, notifyError } from "./userSlice";
// import {checkingUser} from '.'

export const startCreateingUserWithEmailPassword = ({
  email,
  password,
  displayName,
  admin = false,
}) => {
  return async (dispatch) => {
    dispatch(checkingUser());

    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName,
        admin,
      });

    if (!ok) {
      dispatch(notifyError(errorMessage));
      return { errorMessage };
    }

    return success;
  };
};
