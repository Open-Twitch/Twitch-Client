export const validateUsername = (username:string) => {
  // user name should habe between 3 and 8 characters whitout spaces\
  const regex = /^\S{3,8}$/;

  return regex.test(username);
};
export const usernameValidationMessage =
  "Username should have between 3 and 8 characters. No spaces are allowed.";
