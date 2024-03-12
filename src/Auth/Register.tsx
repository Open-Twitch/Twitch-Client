import { useState } from "react";
import { AuthInput } from "./AuthInput";
import { Logo } from "./Logo";
import {
  emailValidationMessage,
  passwordConfValidationMessage,
  passwordValidationMessage,
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
          field={"username"}
          label={"Username"}
          value={formState.username.value}
          onChangeHandler={handleInputValueChange}
          type={"username"}
          showErrorMessage={formState.username.showError}
          validateMessage={usernameValidationMessage}
          onBlurHandler={handleInputValidationOnBlur}
        />
        <AuthInput
          field={"password"}
          label={"Password"}
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
          type={"password"}
          showErrorMessage={formState.password.showError}
          validateMessage={passwordValidationMessage}
          onBlurHandler={handleInputValidationOnBlur}
        />
        <AuthInput
          field={"passwordConfirmation"}
          label={"Password Confirmation"}
          value={formState.passwordConfirmation.value}
          onChangeHandler={handleInputValueChange}
          type={"passwordConfirmation"}
          showErrorMessage={formState.passwordConfirmation.showError}
          validateMessage={passwordConfValidationMessage}
          onBlurHandler={handleInputValidationOnBlur}
        />
        <button
          disabled={
            !formState.password.isValid ||
            !formState.email.isValid ||
            !formState.username.isValid ||
            formState.password.value !== formState.passwordConfirmation.value
          }
        >
          Register
        </button>
      </form>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        Already have an account ? Sign in
      </span>
    </div>
  );
};
