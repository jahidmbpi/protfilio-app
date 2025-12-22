import axios from "axios";
export const axiousInstance = axios.create({
  baseURL: "https://protfolio-server-chi.vercel.app/api/v1",
  withCredentials: true,
});

axiousInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiousInstance.interceptors.response.use(
  function onFulfilled(response) {
    return response;
  },
  function onRejected(error) {
    return Promise.reject(error);
  }
);
