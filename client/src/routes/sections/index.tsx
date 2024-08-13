import { useRoutes } from "react-router-dom";
import { authRoutes } from "./auth";
import { LandingPage } from "../../pages/landing-page/landing-page";

export const Router = () => {
  return useRoutes([
    {
      path: "",
      element: <LandingPage />,
    },

    ...authRoutes,
  ]);
};
