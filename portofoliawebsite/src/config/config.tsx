
import axios from "axios";

export const api = "http://localhost:4500";

const instance = axios.create({
  baseURL: api,
  withCredentials: true,
});

export default instance;
