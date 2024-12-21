import { Login } from "../../pages/auth/login/login";
import { Logout } from "../../pages/auth/logout/logout";
import { Register } from "../../pages/auth/register/register";
const authJwt = {
  path: "",
  children: [
    {
      path: "login",
      element: <Login />,
    },

    {
      path: "register",
      element: <Register />,
    },
    {
      path: "logout",
      element: <Logout />,
    },
  ],
};

export const authRoutes = [
  {
    path: "auth",
    children: [authJwt],
  },
];
