export const Register = ({
  switchAuthHandler,
}: {
  switchAuthHandler: () => void;
}) => {
  return <div onClick={switchAuthHandler}></div>;
};
