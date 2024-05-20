import { useDispatch, useSelector } from "react-redux";
import { ctrlClosePopup } from "../store/account";

import { FormAccount, FormProfile } from "../account/components";

import { IconButton } from "@mui/material";
import {
  CloseOutlined,
  AccountBalanceWallet,
  Person2Outlined,
} from "@mui/icons-material";

export const PopContent = ({ isForm }) => {
  const { isWorking, inEdit } = useSelector((state) => state.account);

  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch(ctrlClosePopup());
  };

  return (
    <div className="popup-wrapper">
      <div className="popup-background" onClick={closePopup}></div>
      <div className="popup">
        <span className="close" onClick={closePopup}>
          <IconButton
            disabled={isWorking}
            size="large"
            sx={{
              color: "white",
              backgroundColor: "#ff8b00",
              ":hover": { backgroundColor: "error.main", opacity: 0.9 },
            }}
          >
            <CloseOutlined sx={{ fontSize: 10 }} />
          </IconButton>
        </span>
        <h2>{isForm === "account" ? "Cuentas" : "Mi perfil"}</h2>
        {isForm == "account" ? <FormAccount /> : <FormProfile />}
      </div>
    </div>
  );
};
