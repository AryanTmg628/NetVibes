import api from "../../api/api";
const registerUser = async (payload: any) => {
  const res = await api.post("auth/", payload);
  return res?.data;
};

const verifyAccount = async (payload: any) => {
  const res = await api.post("auth-verify/", payload);
  return res?.data;
};

export const AuthApiServices = {
  registerUser,
  verifyAccount,
};
