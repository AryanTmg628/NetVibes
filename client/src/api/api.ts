import axios from "axios";
import Cookies from "js-cookie";
const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_HOST,
});
api.interceptors.request.use(
  function (config) {
    const access_token = Cookies.get("accessToken");
    if (access_token) config.headers.Authorization = `Bearer ${access_token}`;
    return config;
  },
  function (error) {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
  },
);

export default api;
