import axios from "axios";

const createAxiosInstance = () => {
  const res = axios.create({
    baseURL: "https://suitmedia-backend.suitdev.com/api",
    proxy: {
      protocol: "http",
      host: "47.74.152.29",
      port: "8888",
    },
  });

  return res;
};

export { createAxiosInstance };
