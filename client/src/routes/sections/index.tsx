import { useRoutes } from "react-router-dom";
import { authRoutes } from "./auth";
import { domainRoutes } from "./domain";
import { LandingPage } from "../../pages/landing-page/landing-page";
import { dashboardRoutes } from "./dashboard";
import { AboutUs } from "../../pages/about-us/about-us";
import { PaymentResult } from "../../pages/payment/payment-result";

export const Router = () => {
  return useRoutes([
    {
      path: "",
      element: <LandingPage />,
    },
    {
      path: "about-us",
      element: <AboutUs />,
    },
    {
      path: "payment-result",
      element: <PaymentResult />,
    },

    ...authRoutes,
    ...domainRoutes,
    ...dashboardRoutes,
  ]);
};
