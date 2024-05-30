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

import "../../assets/css/components/table.css";
import moment from "moment";

export const ListAccount = ({ accounts, inPage, isComplete }) => {
  const dispatch = useDispatch();

  const { isWorking } = useSelector((state) => state.banwire);
  const { profile } = useSelector((state) => state.profile);

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
      reference: changeAccount.id,
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
        console.log("Error en el pago");
      },
      onCancel: function (data) {
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

  let cantEdit = false;
  if (inPage == "null" && profile.admin == true) cantEdit = true;

  let cantCancel = false;
  if (inPage == "null" && profile.admin == true) cantCancel = true;

  let cantDelete = false;
  if ((inPage == "null" || inPage == "cancel") && profile.admin == true)
    cantDelete = true;

  let cantRestore = false;
  if (inPage == "cancel") cantRestore = true;

  return (
    <>
      <table className="container">
        <thead>
          <tr>
            <th>
              <h1>ID</h1>
            </th>
            <th>
              <h1>Descripción</h1>
            </th>
            <th>
              <h1>Total</h1>
            </th>
            {profile.admin ? (
              <th>
                <h1>Usuario</h1>
              </th>
            ) : (
              ""
            )}

            <th>
              <h1>Fecha</h1>
            </th>
            <th>
              <h1>Opciones</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={account.date}>
              <td>{`${index + 1}`}</td>
              <td style={{ textTransform: "capitalize" }}>
                {account.conceptAccount}
              </td>
              <td style={{ textTransform: "capitalize" }}>
                $ {account.amountAccount}
              </td>
              {account?.userData ? (
                <td style={{ textTransform: "capitalize" }}>
                  {account.userData.displayName}
                </td>
              ) : (
                ""
              )}

              <td>{moment(account.date).subtract(10, "days").calendar()}</td>
              <td>
                {account?.payment
                  ? account.payment.event + " | " + account.payment.status
                  : ""}
                {isComplete === true && inPage == "null" ? (
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
                    disabled={!isComplete}
                  >
                    <PaymentOutlined />
                    {!isComplete && <small>Completa perfil</small>}
                  </IconButton>
                ) : (
                  ""
                )}
                {cantEdit && (
                  <IconButton
                    aria-label="Editar"
                    onClick={() => {
                      startEdit(account);
                    }}
                  >
                    <Edit />
                  </IconButton>
                )}
                {cantCancel && (
                  <IconButton
                    aria-label="Cancelar"
                    onClick={() => {
                      onClickCancel(account);
                    }}
                  >
                    <NotInterested />
                  </IconButton>
                )}
                {cantDelete && (
                  <IconButton
                    aria-label="Eliminar"
                    onClick={() => {
                      startDelete(account);
                    }}
                  >
                    <Delete />
                  </IconButton>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
