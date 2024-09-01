import { Helmet } from "react-helmet-async";
import company from "/src/data/company.json";
import { RegisterView } from "../../../modules/auth/register/register-view";
export const Register = () => {
  return (
    <>
      <Helmet>
        <title> Register | {company.name} </title>
      </Helmet>
      <RegisterView />
    </>
  );
};
