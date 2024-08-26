import axios from "axios";

const service = () => {
  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Max-Age": 86400,
    "Access-Control-Allow-Origin": "*",
  };

  const requestResolve = (config: any) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  };

  const responseResolve = (res: any) => {
    return res.data;
  };

  const responseReject = (err: any) => {
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
