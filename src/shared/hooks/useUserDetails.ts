import { useState } from "react";
import { logout as logoutHandler } from "..";

const getUserDetails = () => {
  const userDetails = localStorage.getItem("user");
  if (userDetails) {
    return JSON.parse(userDetails);
  }
  return null;
};

export const useUserDetails = () => {
  const [userDetails, setUserDetails] = useState(getUserDetails());
  const logout = () => {
    setUserDetails(null);
    logoutHandler();
  };

  return {
    isLogged: Boolean(userDetails),
    username: userDetails?.username ? userDetails?.username : "Guest",
    logout,
  };
};
