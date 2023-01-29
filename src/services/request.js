import axios from "axios";
import { BASE_URL } from "../configs/global-app";
const service = axios.create({
  baseURL: BASE_URL,
  timeout: 16000,
});

export default service;
