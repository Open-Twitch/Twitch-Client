export const Login = ({
  switchAuthHandler,
}: {
  switchAuthHandler: () => void;
}) => {
  return <div onClick={switchAuthHandler}></div>;
};
