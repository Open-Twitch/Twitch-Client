import { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";

import "./authPage.styles.css";

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthPageToggle = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="auth-container">
      {isLogin ? (
        <Login switchAuthHandler={handleAuthPageToggle} />
      ) : (
        <Register switchAuthHandler={handleAuthPageToggle} />
      )}
    </div>
  );
};
