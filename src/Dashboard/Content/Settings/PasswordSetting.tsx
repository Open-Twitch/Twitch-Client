import {
  Input,
  passwordValidationMessage,
  useChangePassword,
  validatePassword,
} from "@/shared";
import { input } from "./type";
import { MouseEvent, useState } from "react";

interface passwordInput extends input {
  field: "password" | "newPassword";
}
const inputs: passwordInput[] = [
  {
    field: "password",
    label: "Current password",
    validationMessage: passwordValidationMessage,
    type: "password",
  },
  {
    field: "newPassword",
    label: "New password",
    validationMessage: passwordValidationMessage,
    type: "password",
  },
];

export const PasswordSetting = () => {
  const [formState, setFormState] = useState({
    password: {
      isValid: false,
      showError: false,
      value: "",
    },
    newPassword: {
      isValid: false,
      showError: false,
      value: "",
    },
  });

  const { changePassword } = useChangePassword();

  const handleInputValueChange = (
    value: string,
    field: "password" | "newPassword"
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
    field: "password" | "newPassword"
  ) => {
    const isValid = validatePassword(value);

    setFormState((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleFormSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    changePassword({
      password: formState.password.value,
      newPassword: formState.newPassword.value,
    });
  };

  const isSubmitButtonDisabled =
    !formState.password.isValid || !formState.newPassword.isValid;

  return (
    <form className="settings-form">
      {inputs.map((input) => (
        <Input
          key={input.field}
          field={input.field}
          label={input.label}
          value={formState[input.field].value}
          onChangeHandler={handleInputValueChange}
          type={input.type}
          showErrorMessage={formState[input.field].showError}
          validateMessage={input.validationMessage}
          onBlurHandler={handleInputValidationOnBlur}
          textarea={input.textarea}
        />
      ))}
      <button onClick={handleFormSubmit} type="button" disabled={isSubmitButtonDisabled}>
        Save Changes
      </button>
    </form>
  );
};
