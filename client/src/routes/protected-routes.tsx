import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const authenticate = () => {
    const token = Cookies.get("accessToken");
    if (token) {
      setIsAuthenticate(true);
      return true;
    }

    redirectToLogin();
  };

  const redirectToLogin = () => {
    navigate("/auth/login");
  };

  useEffect(() => {
    authenticate();
  }, []);

  return <>{isAuthenticate && children}</>;
};
