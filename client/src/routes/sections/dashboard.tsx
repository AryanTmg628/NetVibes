import { ChangePassword } from "../../modules/dashboard/account-details/change-password";
import { EditAccountDetails } from "../../modules/dashboard/account-details/edit-account-details";
import { DomainBuy } from "../../modules/dashboard/domains/domain-buy";
import { RegisterDomain } from "../../modules/dashboard/domains/register-domain";
import { DashBoard } from "../../pages/dashboard/dashboard";

const dashBoard = {
  path: "",
  element: <DashBoard />,
  children: [
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
