/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Logo } from "./Logo";
import {
  Input,
  emailValidationMessage,
  passwordConfValidationMessage,
  passwordValidationMessage,
  useRegister,
  usernameValidationMessage,
  validateEmail,
  validatePassword,
  validatePasswordConf,
  validateUsername,
} from "@/shared";

export const Register = ({
  switchAuthHandler,
}: {
  switchAuthHandler: () => void;
}) => {
  const { register, isLoading } = useRegister();

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
    username: {
      value: "",
      isValid: false,
      showError: false,
    },
    passwordConfirmation: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChange = (
    value: string,
    field: "email" | "password" | "username" | "passwordConfirmation"
  ) => {
    setFormState((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        value: value,
      },
    }));
  };

  const handleRegister = (e: any) => {
    e.preventDefault();

    register({
      email: formState.email.value,
      password: formState.password.value,
      username: formState.username.value,
    });
  };

  const buttonDisabled =
    isLoading ||
    !formState.password.isValid ||
    !formState.email.isValid ||
    !formState.username.isValid ||
    formState.password.value !== formState.passwordConfirmation.value;

  const handleInputValidationOnBlur = (
    value: string,
    field: "email" | "password" | "username" | "passwordConfirmation"
  ) => {
    let isValid = false;
    switch (field) {
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      case "username":
        isValid = validateUsername(value);
        break;
      case "passwordConfirmation":
        isValid = validatePasswordConf(formState.password.value, value);
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

  return (
    <div className="register-container">
      <Logo text="Register to Clone" />
      <form className="auth-form">
        <Input
          field={"email"}
          label={"Email"}
          value={formState.email.value}
          onChangeHandler={handleInputValueChange}
          type={"text"}
          showErrorMessage={formState.email.showError}
          validateMessage={emailValidationMessage}
          onBlurHandler={handleInputValidationOnBlur}
        />
        <Input
          field={"username"}
          label={"Username"}
          value={formState.username.value}
          onChangeHandler={handleInputValueChange}
          type={"username"}
          showErrorMessage={formState.username.showError}
          validateMessage={usernameValidationMessage}
          onBlurHandler={handleInputValidationOnBlur}
        />
        <Input
          field={"password"}
          label={"Password"}
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
          type={"password"}
          showErrorMessage={formState.password.showError}
          validateMessage={passwordValidationMessage}
          onBlurHandler={handleInputValidationOnBlur}
        />
        <Input
          field={"passwordConfirmation"}
          label={"Password Confirmation"}
          value={formState.passwordConfirmation.value}
          onChangeHandler={handleInputValueChange}
          type={"passwordConfirmation"}
          showErrorMessage={formState.passwordConfirmation.showError}
          validateMessage={passwordConfValidationMessage}
          onBlurHandler={handleInputValidationOnBlur}
        />
        <button onClick={handleRegister} disabled={buttonDisabled}>
          Register
        </button>
      </form>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        Already have an account ? Sign in
      </span>
    </div>
  );
};
