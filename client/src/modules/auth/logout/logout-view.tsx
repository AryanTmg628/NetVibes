import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const LogoutView = () => {
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove("accessToken");
    navigate("/");
  };
  useEffect(() => {
    logout();
  }, []);
  return <></>;
};
