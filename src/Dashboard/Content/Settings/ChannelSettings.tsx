/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Input,
  avatarUrlValidationMessage,
  descriptionValidationMessage,
  titleValidationMessage,
  usernameValidationMessage,
  validateAvatarUrl,
  validateDescription,
  validateTitle,
  validateUsername,
} from "@/shared";
import { MouseEvent, useState } from "react";
import { input } from "./type";

interface settingInput extends input {
  field: "username" | "title" | "avatarUrl" | "description";
}

const inputs: settingInput[] = [
  {
    field: "username",
    label: "Username",
    validationMessage: usernameValidationMessage,
    type: "text",
  },
  {
    field: "title",
    label: "Title",
    validationMessage: titleValidationMessage,
    type: "text",
  },
  {
    field: "avatarUrl",
    label: "Avatar Url",
    validationMessage: avatarUrlValidationMessage,
    type: "text",
  },
  {
    field: "description",
    label: "Description",
    validationMessage: descriptionValidationMessage,
    type: "text",
    textarea: true,
  },
];

export const ChannelSettings = ({
  settings,
  saveSettings,
}: {
  settings: { [key: string]: string };
  saveSettings: any;
}) => {
  const [formState, setFormState] = useState({
    title: {
      isValid: false,
      showError: false,
      value: settings.title,
    },
    username: {
      isValid: false,
      showError: false,
      value: settings.username,
    },
    avatarUrl: {
      isValid: false,
      showError: false,
      value: settings.avatarUrl,
    },
    description: {
      isValid: false,
      showError: false,
      value: settings.description,
    },
  });

  const handleInputValueChange = (
    value: string,
    field: "username" | "title" | "avatarUrl" | "description"
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
    field: "username" | "title" | "avatarUrl" | "description"
  ) => {
    let isValid = false;
    switch (field) {
      case "username":
        isValid = validateUsername(value);
        break;
      case "title":
        isValid = validateTitle(value);
        break;
      case "avatarUrl":
        isValid = validateAvatarUrl(value);
        break;
      case "description":
        isValid = validateDescription(value);
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

  const handleFormSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    saveSettings({
      title: formState.title.value,
      username: formState.username.value,
      avatarUrl: formState.avatarUrl.value,
      description: formState.description.value,
    });
  };

  const isSubmitButtonDisabled =
    !formState.username.isValid ||
    !formState.title.isValid ||
    !formState.avatarUrl.isValid ||
    !formState.description.isValid;

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
