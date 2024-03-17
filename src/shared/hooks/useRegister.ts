/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IRegisterData } from "..";
import { register as registerRequest } from "@/api";
import toast from "react-hot-toast";
export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const register = async ({ email, password, username }: IRegisterData) => {
    setIsLoading(true);

    const response: any = await registerRequest({
      email,
      password,
      username,
    });

    setIsLoading(false);

    if (response.error) {
      return toast.error(
        response.exception?.response?.data ||
          "Error occurred while registering. Please try again"
      );
    }

    const { userDetails } = response.data;

    localStorage.setItem("user", JSON.stringify(userDetails));

    navigate("/channels");
  };
  return { register, isLoading };
};
