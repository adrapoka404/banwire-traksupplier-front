import { useLocation, Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CheckingAuth } from "../ui/components/CheckingAuth";
import { useCheckAuth } from "../hooks";
import { AccountPage } from "../account/pages";
import {
  ErrorPage,
  NotifyOxxoPage,
  PendingPage,
  SuccessPage,
} from "../banwire/pages";
import { HomePage } from "../auth/pages";

export const AppRouter = () => {
  const location = useLocation();
  const inPath = location.pathname;
  let toAccount = "pending";

  if (inPath === "/account/null") toAccount = "null";

  if (inPath === "/account/pay") toAccount = "pay";

  if (inPath === "/account/cancel") toAccount = "cancel";

  const { status } = useCheckAuth();

  if (status === "checking") return <CheckingAuth />;

  return (
    <>
      <Routes>
        {status === "authenticated" ? (
          <>
            <Route path="/*" element={<AccountPage account={toAccount} />} />
          </>
        ) : (
          <>
            <Route path="/*" element={<HomePage />} />
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
        <Route path="/payment/notifyOxxo" element={<NotifyOxxoPage />} />
      </Routes>
    </>
  );
};
