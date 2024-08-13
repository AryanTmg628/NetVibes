import { Login } from "../../pages/auth/login/login";
const authJwt = {
  path: "",
  children: [
    {
      path: "login",
      element: <Login />,
    },
  ],
};

export const authRoutes = [
  {
    path: "auth",
    children: [authJwt],
  },
];
