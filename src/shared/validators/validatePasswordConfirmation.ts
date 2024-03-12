export const validatePasswordConf = (pass:string, confPass:string) => {
  return pass === confPass;
};

export const passwordConfValidationMessage = "Password do not match.";
