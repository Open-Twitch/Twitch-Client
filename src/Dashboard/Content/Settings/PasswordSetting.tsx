import { passwordValidationMessage } from "@/shared";
import { input } from "./type";

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
  return <div>PasswordSetting</div>;
};
