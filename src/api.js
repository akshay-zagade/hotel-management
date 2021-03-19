import axios from "axios";
import * as endpoints from "./endpoints";

const instance = axios.create({
  baseURL: "/api",
  headers: {
    "content-type": "application/json",
  },
  auth: {
    username: process.env.REACT_APP_API_USERNAME,
    password: process.env.REACT_APP_API_USERPASS,
  },
});

const api = {
  getRooms: () => instance({
    method: "GET",
    url: endpoints.ROOMS,
  }),
};

export default api;