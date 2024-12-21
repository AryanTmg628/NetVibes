import { Helmet } from "react-helmet-async";
import { LogoutView } from "../../../modules/auth/logout/logout-view";

export const Logout = () => {
  return (
    <>
      <Helmet>
        <title>Logout</title>
      </Helmet>
      <LogoutView />
    </>
  );
};
