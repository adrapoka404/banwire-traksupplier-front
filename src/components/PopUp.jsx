import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IconButton } from "@mui/material";
import { AccountBalanceWallet, Person2Outlined } from "@mui/icons-material";

import { FormAccount, FormProfile } from "../account/components";
import { PopContent } from "./PopContent";
import { ctrlOpenPopup } from "../store/account";

export const PopUp = (open = true) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [isForm, setIsForm] = useState("account");

  const { isWorking, inEdit, popup } = useSelector((state) => state.account);
  const { profile } = useSelector((state) => state.profile);

  const startFormAccount = () => {
    setIsForm("account");
    dispatch(ctrlOpenPopup());
  };

  const startFormProfile = () => {
    setIsForm("profile");
    dispatch(ctrlOpenPopup());
  };
  if (inEdit) {
    setIsForm("account");
    dispatch(ctrlOpenPopup());
  }

  return (
    <div>
      <IconButton
        onClick={startFormProfile}
        disabled={isWorking}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 110,
          bottom: 50,
        }}
      >
        <Person2Outlined sx={{ fontSize: 30 }} />
      </IconButton>

      <IconButton
        onClick={startFormAccount}
        disabled={isWorking}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AccountBalanceWallet sx={{ fontSize: 30 }} />
      </IconButton>

      {popup && (
        <PopContent
          isForm={isForm}
          component={isForm == "account" ? <FormAccount /> : <FormProfile />}
        />
      )}
    </div>
  );
};
