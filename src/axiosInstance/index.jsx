import axios from "axios";
import { BACK_END_URL } from "../config/config";

const axiosInstance = axios.create({
  baseURL: BACK_END_URL,
});

export default axiosInstance;
