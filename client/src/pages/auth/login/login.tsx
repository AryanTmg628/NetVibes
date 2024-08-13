import { Helmet } from "react-helmet-async";
import { LoginView } from "../../../modules/auth/login/login-view";
import company from "/src/data/company.json";
export const Login = () => {
  return (
    <>
      <Helmet>
        <title> Login | {company.name} </title>
      </Helmet>
      <LoginView />
    </>
  );
};
