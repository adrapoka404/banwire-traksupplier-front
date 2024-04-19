import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AccountLayout } from "../layout/AccountLayout";
import { Grid } from "@mui/material";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { PopUp } from "../../components";
import {
  startGetAccountCancel,
  startGetAccountPay,
  startGetAccountAwait,
  startGetAccountPending,
} from "../../store/account";

import { NotAccount } from "../views/NotAccounts";
import { ListAccount } from "../views/ListAccount";

export const AccountPage = ({ account }) => {
  const dispatch = useDispatch();

  const { messageAccount, accounts, msgEmpty } = useSelector(
    (state) => state.account
  );

  const { messageProfile } = useSelector((state) => state.profile);

  useEffect(() => {
    if (account === "cancel") {
      dispatch(startGetAccountCancel());
    } else if (account === "pay") {
      dispatch(startGetAccountPay());
    } else if (account === "pending") {
      dispatch(startGetAccountPending());
    } else {
      dispatch(startGetAccountAwait());
    }
  }, [account]);

  useEffect(() => {
    if (messageAccount.length > 0) {
      Swal.fire("Cuentas: ", messageAccount, "success");
    }
  }, [messageAccount]);

  useEffect(() => {
    if (messageProfile.length > 0) {
      Swal.fire("Direcciónes: ", messageProfile, "success");
    }
  }, [messageProfile]);

  return (
    <AccountLayout>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {accounts?.length === 0 ? (
          <NotAccount msgEmpty={msgEmpty} />
        ) : (
          <ListAccount accounts={accounts} inPage={account} />
        )}
      </Grid>
      <PopUp />
    </AccountLayout>
  );
};
