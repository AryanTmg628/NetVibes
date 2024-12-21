import api from "../../api/api";

const sendPaymentDetails = async (payload) => {
  const res = await api.post("payment/", payload);
  return res.data;
};

export default {
  sendPaymentDetails,
};
