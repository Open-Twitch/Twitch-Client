import logo from "@/resources/images/logoPlaceholder.svg";

export const NavLogo = () => {
  return (
    <div className="nav-logo-container">
      <img className="nav-logo" width="100%" height="100%" src={logo} alt="" />
    </div>
  );
};