import { usernameValidationMessage } from "@/shared";

interface input {
  field: string;
  label: string;
  validationMessage: string;
  type: string;
  textarea?: boolean;
}

const inputs: input[] = [
  {
    field: "username",
    label: "Username",
    validationMessage: usernameValidationMessage,
    type: "text",
  },
  {
    field: "title",
    label: "Title",
    validationMessage: "titleValidationMessage",
    type: "text",
  },
  {
    field: "avatarUrl",
    label: "Avatar Url",
    validationMessage: "avatarUrlValidationMessage",
    type: "text",
  },
  {
    field: "description",
    label: "Description",
    validationMessage: "descriptionValidationMessage",
    type: "text",
    textarea: true,
  },
];

export const ChannelSettings = () => {
  return <form className="settings-form">ChannelSettings</form>;
};
