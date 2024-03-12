/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { AuthInput } from "./AuthInput";
import { Logo } from "./Logo";
import {
  emailValidationMessage,
  passwordConfValidationMessage,
  useLogin,
  validateEmail,
  validatePassword,
} from "@/shared";

export const Login = ({
  switchAuthHandler,
}: {
  switchAuthHandler: () => void;
}) => {
  const { login, isLoading } = useLogin();

  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChange = (
    value: string,
    field: "email" | "password"
  ) => {
    setFormState((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        value: value,
      },
    }));
  };

  const handleInputValidationOnBlur = (
    value: string,
    field: "email" | "password"
  ) => {
    let isValid = false;
    switch (field) {
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      default:
        break;
    }

    setFormState((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleLogin = (e: any) => {
    e.preventDefault();

    login({ email: formState.email.value, password: formState.password.value });
  };

  const buttonDisabled =
    isLoading || !formState.password.isValid || !formState.email.isValid;

  return (
    <div className="login-container">
      <Logo text="Login to Clone" />
      <form className="auth-form">
        <AuthInput
          field={"email"}
          label={"Email"}
          value={formState.email.value}
          onChangeHandler={handleInputValueChange}
          type={"text"}
          showErrorMessage={formState.email.showError}
          validateMessage={emailValidationMessage}
          onBlurHandler={handleInputValidationOnBlur}
        />
        <AuthInput
          field={"password"}
          label={"Password"}
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
          type={"password"}
          showErrorMessage={formState.password.showError}
          validateMessage={passwordConfValidationMessage}
          onBlurHandler={handleInputValidationOnBlur}
        />
        <button onClick={handleLogin} disabled={buttonDisabled}>
          Login
        </button>
      </form>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        Don't have an account ? Sign up
      </span>
    </div>
  );
};
