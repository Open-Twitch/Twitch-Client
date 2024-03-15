/* eslint-disable @typescript-eslint/no-explicit-any */

import { NavLogo } from ".";

const NavButton = ({
  text,
  onClickHandler,
}: {
  text: string;
  onClickHandler: any;
}) => {
  return (
    <span className="nav-button" onClick={onClickHandler}>
      {text}
    </span>
  );
};

export const Nav = () => {
  return (
    <div className="nav-container">
      <NavLogo />
      <div className="nav-buttons-container">
        <NavButton text="Browse" onClickHandler={() => {}} />
        <NavButton text="Login" onClickHandler={() => {}} />
        <div>
          <NavButton text="My Account" onClickHandler={() => {}} />
          <NavButton text="Logout" onClickHandler={() => {}} />
        </div>
      </div>
    </div>
  );
};
