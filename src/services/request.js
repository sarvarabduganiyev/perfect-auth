import { notification } from "antd";
import axios from "axios";
import { BASE_URL } from "../configs/global-app";
import { storageService } from "./storage.service";
const service = axios.create({
  baseURL: BASE_URL,
  timeout: 16000,
});

// Config
const TOKEN_PAYLOAD_KEY = "Authorization";
const AUTH_TOKEN_TYPE = "Bearer";
const AUTH_CONTENT_TYPE = "Content-Type";
const AUTH_TOKEN_TYPE_VALUE = "application/x-www-form-urlencoded";

service.interceptors.request.use(
  (config) => {
    const access_token = JSON.parse(
      storageService.getAccessToken()
    ).accessToken.slice(1, -1);

    if (access_token) {
      config.headers[TOKEN_PAYLOAD_KEY] = AUTH_TOKEN_TYPE + " " + access_token;
      config.headers[AUTH_CONTENT_TYPE] = AUTH_TOKEN_TYPE_VALUE;
    }

    config.headers[AUTH_CONTENT_TYPE] = AUTH_TOKEN_TYPE_VALUE;

    return config;
  },
  (error) => {
    notification.error({
      message: "Error",
    });
    Promise.reject(error);
  }
);

service.interceptors.response.use((response) => {
  return response;
});
export default service;
