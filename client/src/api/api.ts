import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_HOST,
});
api.interceptors.request.use(
  function (config) {
    const access_token = localStorage.getItem("itend_access_token");
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
