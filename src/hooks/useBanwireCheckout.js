import { configBanwire } from "../banwire/config";
import { clearAccount } from "../store/account";
import { startChangeStatusAccount } from "../store/banwire";

export const useBanwireCheckout = (account, profile, uid) => {
  const { conceptAccount, amountAccount, id } = account;
  const { addr, city, country, zip } = profile;

  const initialValues = {
    user: configBanwire.user,
    sandbox: true,
    title: "tracksupplier: " + conceptAccount,
    language: "es",
    secure3d: false,
    reference: id,
    concept: "tracksupplier: " + conceptAccount,
    currency: "MXN",
    cust: { ...profile },
    ship: {
      addr: addr,
      city: city,
      state: "MX",
      country: country,
      zip: zip,
    },
    showShipping: false,
    url_notify: configBanwire.notifyUrl,
    notifyUrl: configBanwire.notifyUrl,
    paymentOptions: "all",
    reviewOrder: true,
    total: amountAccount,
  };
  const SW = new BwGateway({
    ...initialValues,
    onSuccess: function (data) {
      console.log("Si jala");
      console.log("¡Gracias por tu pago!");
    },
    onPending: (data) => {
      startChangeStatusAccount(account, uid);
      console.log("cambio el estatus de la cuenta");
      clearAccount(account.id);
      console.log("limpio la cuenta activa");
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
};
