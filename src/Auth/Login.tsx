import { Logo } from "./Logo";

export const Login = ({
  switchAuthHandler,
}: {
  switchAuthHandler: () => void;
}) => {
  return (
    <div className="login-container">
      <Logo text="Login to Clone" />
      <form className="auth-form">
        <button>Login</button>
      </form>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        Don't have an account ? Sign up
      </span>
    </div>
  );
};
