export const configBanwire = {
  user: import.meta.env.VITE_BW_USER,
  sandbox: import.meta.env.VITE_BW_SANDBOX === "true",
  notifyUrl: import.meta.env.VITE_BW_NOTIFY_URL,
};
