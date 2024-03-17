/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";
import { changePassword as changePasswordRequest } from "./../../api/api";

export const useChangePassword = () => {
  const changePassword = async ({
    password,
    newPassword,
  }: {
    password: string;
    newPassword: string;
  }) => {
    const responseData: any = await changePasswordRequest({
      password,
      newPassword,
    });
    if (responseData.error) {
      return toast.error(
        responseData.exception?.responseData?.data ||
          "Error occurred when saving channel details"
      );
    }

    toast.success("Password changed successfully");
  };
  return { changePassword };
};
