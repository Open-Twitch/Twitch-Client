/* eslint-disable @typescript-eslint/no-explicit-any */

import { useUserDetails } from "@/shared";
import { NavButton, NavLogo } from ".";
import { Link } from "react-router-dom";

export const Nav = () => {
  const { isLogged } = useUserDetails();

  return (
    <div className="nav-container">
      <NavLogo />
      <div className="nav-buttons-container">
        <Link to={"/channels"}>
          <NavButton text="Browse" />
        </Link>
        {isLogged ? (
          <div>
            <Link to={"/settings"}>
              <NavButton text="My Account" />
            </Link>
            <NavButton text="Logout" onClickHandler={() => {}} />
          </div>
        ) : (
          <Link to={"/auth"}>
            <NavButton text="Login" />
          </Link>
        )}
      </div>
    </div>
  );
};
