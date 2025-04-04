import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [showMenu, setMenu] = useState(false);
  const handleButtonToggle = () => {
    setMenu(!showMenu);
  };
  return (
    <header className="relative top-0">
      <div className="container">
        <div className="grid navbar-grid">
          <div>
            <NavLink to="/">
              <img
                className="logo"
                src="./images/logo.webp"
                alt="logo image"
                onError={(e) => {
                  e.target.src = "./images/favicon.png";
                }}
              />
            </NavLink>
          </div>
          <nav className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
