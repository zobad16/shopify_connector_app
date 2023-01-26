import axios from "axios";
import { BACK_END_URL } from "../config/config";

const service = axios.create({
  baseURL: BACK_END_URL,
});


service.interceptors.request.use(
  config => {
    config.headers['Ngrok-Skip-Browser-Warning'] = 'skip-browser-warning';
    return config
  } ,
  err => console.error(err)
)

export default service;
