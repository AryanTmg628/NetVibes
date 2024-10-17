import { useRoutes } from "react-router-dom";
import { authRoutes } from "./auth";
import { domainRoutes } from "./domain";
import { LandingPage } from "../../pages/landing-page/landing-page";
import { dashboardRoutes } from "./dashboard";

export const Router = () => {
  return useRoutes([
    {
      path: "",
      element: <LandingPage />,
    },

    ...authRoutes,
    ...domainRoutes,
    ...dashboardRoutes,
  ]);
};
