import { useDispatch, useSelector } from "react-redux";

import { IconButton, List, ListItem, ListItemText } from "@mui/material";

import {
  Delete,
  Edit,
  NotInterested,
  Payment,
  PaymentOutlined,
  Restore,
} from "@mui/icons-material";

import {
  activeAccount,
  clearAccount,
  ctrlOpenPopup,
  startAccountCancel,
  startAccountDelete,
  startAccountRestore,
  startActiveAccountForEdit,
} from "../../store/account";

import { startChangeStatusPendigAccount } from "../../store/banwire";
import { useEffect, useState } from "react";
import { configBanwire } from "../../banwire/config";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export const ListAccount = ({ accounts, inPage }) => {
  const dispatch = useDispatch();

  const { isWorking } = useSelector((state) => state.banwire);
  const { cantPay, profile } = useSelector((state) => state.profile);
  const { messageAccount } = useSelector((state) => state.account);
  const user = useSelector((state) => state.auth);

  const [changeAccount, setChangeAccount] = useState(null);

  useEffect(() => {
    if (changeAccount === null) return;

    const { addr, city, state, country, zip } = profile;

    dispatch(activeAccount(changeAccount));

    const SW = new BwGateway({
      user: configBanwire.user,
      sandbox: configBanwire.sandbox,
      title: changeAccount.conceptAccount,
      language: "es",
      secure3d: false,
      reference: user.uid,
      concept: changeAccount.conceptAccount,
      currency: "MXN",
      cust: { ...profile },
      ship: { addr, city, state, country, zip },
      showShipping: false,
      url_notify: configBanwire.notifyUrl,
      notifyUrl: configBanwire.notifyUrl,
      paymentOptions: "all",
      reviewOrder: true,
      total: changeAccount.amountAccount,
      onSuccess: function (data) {
        console.log("Si jala");
        console.log("¡Gracias por tu pago!");
      },
      onPending: (data) => {
        startChangeStatusPendigAccount(changeAccount, user.uid);
        dispatch(clearAccount(changeAccount.id));
      },
      onChallenge: function (data) {
        alert("Pago enviado a validaciones de seguridad");
      },
      onError: function (data) {
        console.log(data);
        console.log("Error en el pago");
      },
      onCancel: function (data) {
        console.log(data);
        console.log("Se cancelo el proceso ADX");
      },
    });

    SW.pay();
  }, [changeAccount]);

  const onClickPay = (account) => {
    setChangeAccount(account);
  };

  const startEdit = (account) => {
    dispatch(startActiveAccountForEdit(account));
    dispatch(ctrlOpenPopup());
  };

  const onClickCancel = (account) => {
    dispatch(startAccountCancel(account));
  };

  const startDelete = (account) => {
    if (
      confirm(
        "Confirma que deseas eliminar la cuenta: " + account.conceptAccount
      ) == true
    ) {
      dispatch(startAccountDelete(account));
    } else {
      console.log("No vamos a deletear la cuenta con id: " + account);
    }
  };

  const startRestore = (account) => {
    if (
      confirm(
        "Confirma que deseas restaurar la cuenta: " + account.conceptAccount
      ) == true
    ) {
      dispatch(startAccountRestore(account));
    } else {
      console.log("No vamos a restaurar la cuenta: " + account);
    }
  };

  useEffect(() => {
    if (messageAccount.length > 0) {
      Swal.fire("Cuentas: ", messageAccount, "success");
    }
  }, [messageAccount]);

  let showPay = false;
  if (cantPay && inPage == "null") showPay = true;

  let cantEdit = false;
  if (inPage == "null") cantEdit = true;

  let cantCancel = false;
  if (inPage == "null") cantCancel = true;

  let cantDelete = false;
  if (inPage == "null" || inPage == "cancel") cantDelete = true;

  let cantRestore = false;
  if (inPage == "cancel") cantRestore = true;

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {accounts.map((account) => (
        <ListItem
          key={account.date}
          disableGutters
          secondaryAction={
            showPay ? (
              <IconButton
                aria-label="Pagar"
                color="green"
                onClick={() => {
                  onClickPay(account);
                }}
                sx={{
                  color: "green",
                  ":hover": {
                    backgroundColor: "green",
                    opacity: 0.9,
                    color: "white",
                  },
                }}
                disabled={!cantPay}
              >
                {isWorking ? <Payment /> : <PaymentOutlined />}
              </IconButton>
            ) : (
              ""
            )
          }
        >
          <ListItemText primary={account.conceptAccount} />
          {cantEdit ? (
            <IconButton
              aria-label="Editar"
              onClick={() => {
                startEdit(account);
              }}
              display={showPay == false ? "" : "none"}
            >
              <Edit />
            </IconButton>
          ) : (
            ""
          )}
          {cantCancel ? (
            <IconButton
              aria-label="Cancelar"
              onClick={() => {
                onClickCancel(account);
              }}
            >
              <NotInterested />
            </IconButton>
          ) : (
            ""
          )}
          {cantDelete ? (
            <IconButton
              aria-label="Eliminar"
              onClick={() => {
                startDelete(account);
              }}
            >
              <Delete />
            </IconButton>
          ) : (
            ""
          )}
          {cantRestore ? (
            <IconButton
              aria-label="Restaurar"
              onClick={() => {
                startRestore(account);
              }}
            >
              <Restore />
            </IconButton>
          ) : (
            ""
          )}
        </ListItem>
      ))}
    </List>
  );
};
