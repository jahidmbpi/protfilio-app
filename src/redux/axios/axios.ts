import axios from "axios";
export const axiousInstance = axios.create({
  baseURL: "https://some-domain.com/api/",
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
