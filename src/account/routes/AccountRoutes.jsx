import React from "react";
import { useSelector } from "react-redux";
import { AccountPage } from "../pages";

const { profile } = useSelector((state) => state.profile);

export const AccountRoutes = () => {
  return (
    <Routes>
      <Route path="/account/null" element={<AccountPage />} />
      <Route path="/account/pending" element={<AccountPage />} />
      <Route path="/accoint/pay" element={<AccountPage />} />
      {profile?.admin === true ? (
        <Route path="/account/cancel" element={<AccountPage />} />
      ) : (
        ""
      )}

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
