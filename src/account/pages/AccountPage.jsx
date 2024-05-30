import React, { useEffect, useState } from "react";
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
  clearAlertAccount,
} from "../../store/account";

import { NotAccount } from "../views/NotAccounts";
import { ListAccount } from "../views/ListAccount";
import { clearAlertProfile } from "../../store/profile";

export const AccountPage = ({ account }) => {
  const dispatch = useDispatch();

  const { messageAccount, accounts, msgEmpty } = useSelector(
    (state) => state.account
  );
  const { messageProfile, isComplete } = useSelector((state) => state.profile);

  // Estados para controlar si se han mostrado las alertas
  const [accountAlertShown, setAccountAlertShown] = useState(false);
  const [profileAlertShown, setProfileAlertShown] = useState(false);

  // Cargar cuentas al montar el componente y cuando la categoría de cuentas cambie
  useEffect(() => {
    switch (account) {
      case "cancel":
        dispatch(startGetAccountCancel());
        break;
      case "pay":
        dispatch(startGetAccountPay());
        break;
      case "pending":
        dispatch(startGetAccountPending());
        break;
      default:
        dispatch(startGetAccountAwait());
        break;
    }
  }, [account, dispatch, msgEmpty]);

  useEffect(() => {
    if (messageAccount.length > 0 && !accountAlertShown) {
      Swal.fire("Cuentas: ", messageAccount, "success").then(() => {
        // Marcar la alerta como mostrada después de que se cierre
        setAccountAlertShown(true);
        dispatch(clearAlertAccount());
      });
    }
  }, [messageAccount, accountAlertShown]);

  useEffect(() => {
    if (messageProfile.length > 0 && !profileAlertShown) {
      Swal.fire("Direcciónes: ", messageProfile, "success").then(() => {
        // Marcar la alerta como mostrada después de que se cierre
        setProfileAlertShown(true);
        dispatch(clearAlertProfile());
      });
    }
  }, [messageProfile, profileAlertShown]);

  return (
    <AccountLayout>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        key={isComplete} // Añade la clave para forzar la re-renderización
      >
        {accounts?.length === 0 ? (
          <NotAccount msgEmpty={msgEmpty} />
        ) : (
          <ListAccount
            accounts={accounts}
            inPage={account}
            isComplete={isComplete}
          />
        )}
      </Grid>
      <PopUp />
    </AccountLayout>
  );
};
