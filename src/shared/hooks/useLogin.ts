import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    const response = await loginRequest({
      email,
      password,
    });

    setIsLoading(false);

    if (response.error) {
      console.log(response.error);
    }

    const { userDetails } = response.data;

    localStorage.setItem("user", userDetails);

    navigate("/");
  };
  return { login, isLoading };
};
