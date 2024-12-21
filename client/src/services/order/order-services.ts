import api from "../../api/api";

const createOrder = async (payload) => {
  const res = await api.post("order/", payload);
  return res.data;
};

const fetchAllOrderDomains = async () => {
  const res = await api.get("order/");
  return res.data;
};

export default {
  createOrder,
  fetchAllOrderDomains,
};
