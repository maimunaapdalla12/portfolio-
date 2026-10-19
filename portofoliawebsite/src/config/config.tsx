
import axios from "axios";

export const api = "https://portfolio-2-g2bw.onrender.com";

const instance = axios.create({
  baseURL: api,
  withCredentials: true,
});

export default instance;
