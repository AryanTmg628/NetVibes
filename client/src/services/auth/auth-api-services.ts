import api from "../../api/api";
import Cookies from "js-cookie";
const registerUser = async (payload: any) => {
  const res = await api.post("auth/", payload);
  return res?.data;
};

const verifyAccount = async (payload: any) => {
  const res = await api.post("auth-verify/", payload);
  return res?.data;
};

const loginUser = async (payload: any) => {
  const res = await api.post("auth/login/", payload);

  if (res?.data?.success) {
    // storing the user details in cookies

    const token = res?.data?.data[0];

    Cookies.set("accessToken", token, {
      expires: 30,
      secure: false, /// only in development mode
      sameSite: "Strict",
    });
  }
  return res?.data;
};

export const AuthApiServices = {
  registerUser,
  verifyAccount,
  loginUser,
};
