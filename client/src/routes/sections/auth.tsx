import { Login } from "../../pages/auth/login/login";
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
  ],
};

export const authRoutes = [
  {
    path: "auth",
    children: [authJwt],
  },
];
