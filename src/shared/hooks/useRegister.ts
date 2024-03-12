/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IRegisterData } from "..";
import { register as registerRequest } from "@/api";
export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const register = async ({
    email,
    password,
    username,
  }: IRegisterData) => {
    setIsLoading(true);

    const response: any = await registerRequest({
      email,
      password,
      username,
    });

    setIsLoading(false);

    if (response.error) {
      console.log(response.error);
    }

    const { userDetails } = response.data;

    localStorage.setItem("user", userDetails);

    navigate("/");
  };
  return { register, isLoading };
};
