/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILoginData } from "..";
import { login as loginRequest } from "@/api";
import toast from "react-hot-toast";
export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const login = async ({ email, password }: ILoginData) => {
    setIsLoading(true);

    const response: any = await loginRequest({
      email,
      password,
    });

    setIsLoading(false);

    if (response.error) {
      return toast.error(response.exception?.response?.data || 'Error occured while loogin in. Please try again');
    }

    const { userDetails } = response.data;

    localStorage.setItem("user", userDetails);

    navigate("/");
  };
  return { login, isLoading };
};
