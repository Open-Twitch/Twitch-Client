import { useState } from "react";
import { AuthInput } from "./AuthInput";
import { Logo } from "./Logo";

export const Login = ({
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
          showErrorMessage={undefined}
          validateMessage={undefined}
          onBlurHandler={undefined}
        /> 
        <AuthInput
          field={"password"}
          label={"Password"}
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
          type={"password"}
          showErrorMessage={undefined}
          validateMessage={undefined}
          onBlurHandler={undefined}
        />
        <button>Login</button>
      </form>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        Don't have an account ? Sign up
      </span>
    </div>
  );
};
