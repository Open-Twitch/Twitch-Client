import { ILoginData, IRegisterData } from "@/shared";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 10000,
});

export const login = async (data: ILoginData) => {
  try {
    return await apiClient.post("/auth/login", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data: IRegisterData) => {
  try {
    return await apiClient.post("/auth/register", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const getChannelSetting = async () => {
  try {
    return await apiClient.get("/channels");
  } catch (error) {
    return {
      error: true,
      exception: error,
    };
  }
};
