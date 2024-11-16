import axios from "axios";
import { serviceSetErrors } from "../services/app.service";
import { notification } from "../helper/helper";
import { store } from "../store/app.store";

const service = () => {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Max-Age": 86400,
    "Access-Control-Allow-Origin": "*",
  };

  const requestResolve = (config: any) => {
    const token = localStorage.getItem("token");
    const { language } = store.getState().AppStore;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    if (language) config.headers["Content-Language"] = language;
    return config;
  };

  const responseResolve = (res: any) => {
    return res.data;
  };

  const responseReject = (err: any) => {
    const error = err.response;

    if (error.status === 422) {
      serviceSetErrors(error.data);
      notification("error", "Username or password is incorrect");
    }

    return Promise.reject(err);
  };

  let instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_BASE_URL,
    timeout: 0,
    headers,
  });

  instance.interceptors.request.use(requestResolve);

  instance.interceptors.response.use(responseResolve, responseReject);

  return instance;
};

export const API = service();