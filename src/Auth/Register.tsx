export const Register = ({
  switchAuthHandler,
}: {
  switchAuthHandler: () => void;
}) => {
  return <div className="register-container" onClick={switchAuthHandler}></div>;
};
