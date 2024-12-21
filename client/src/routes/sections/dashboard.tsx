import { ChangePassword } from "../../modules/dashboard/account-details/change-password";
import { EditAccountDetails } from "../../modules/dashboard/account-details/edit-account-details";
import { DomainBuy } from "../../modules/dashboard/domains/domain-buy";
import { RegisterDomain } from "../../modules/dashboard/domains/register-domain";
import { Home } from "../../modules/dashboard/home/home";
import { DashBoard } from "../../pages/dashboard/dashboard";
import { ProtectedRoutes } from "../protected-routes";

const dashBoard = {
  path: "",
  element: <DashBoard />,
  children: [
    {
      path: "home",
      element: <Home />,
    },

    {
      path: "edit-account-details",
      element: <EditAccountDetails />,
    },
    {
      path: "change-password",
      element: <ChangePassword />,
    },
    {
      path: "register-domain",
      children: [
        {
          path: "",
          element: <RegisterDomain />,
        },
        {
          path: "buy",
          element: <DomainBuy />,
        },
      ],
    },
  ],
};

export const dashboardRoutes = [
  {
    path: "dashboard",
    children: [dashBoard],
  },
];
