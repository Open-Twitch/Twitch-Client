import { useState } from "react";

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthPageToggle = () => {
    setIsLogin((prev) => !prev);
  };

  return <div>{isLogin ? <Login /> : <Register />}</div>;
};
