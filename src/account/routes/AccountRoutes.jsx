import React from "react";
import { AccountPage } from "../pages";

export const AccountRoutes = () => {
  return (
    <Routes>
      <Route path="/account/null" element={<AccountPage />} />
      <Route path="/account/pending" element={<AccountPage />} />
      <Route path="/accoint/pay" element={<AccountPage />} />
      <Route path="/account/cancel" element={<AccountPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
