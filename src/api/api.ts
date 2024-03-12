import { ILoginData, IRegisterData } from "@/shared";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 2000,
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