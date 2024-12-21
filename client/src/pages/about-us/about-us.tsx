import { Helmet } from "react-helmet-async";
import { AboutUsView } from "../../modules/about-us/about-us-view";
import company from "/src/data/company.json";

export const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About us | {company.name} </title>
      </Helmet>
      <AboutUsView />
    </>
  );
};
