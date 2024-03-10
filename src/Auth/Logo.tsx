import logoPlaceHolder from "@/resources/images/logoPlaceholder.svg";

export const Logo = ({ text }: { text: string }) => {
  return (
    <div className="auth-form-logo-container">
      <img src={logoPlaceHolder} />
      <span>&nbsp;&nbsp;{text}</span>
    </div>
  );
};
