import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import { Link } from "react-router";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleHamburger = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav-left">
          <img className="logo-img" src="./../../public/logo.png" alt="website logo" />
        </div>
        <div className="nav-right">
          <ul className="nav-list">
            <li className="nav-list-items">
              <Link className="nav-links" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-list-items">
              <Link className="nav-links" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="nav-list-items">
              <Link className="nav-links" to="/gallery">
                GALLERY
              </Link>
            </li>
            <li className="nav-list-items">
              <Link className="nav-links" to="/shop">
                SHOP ALL
              </Link>
            </li>
            <li className="nav-list-items">LOGIN</li>
          </ul>
          <div className="menuIcon" onClick={toggleHamburger}>
            <HamburgerMenu />
          </div>
        </div>
      </div>
      <div className={`menu-backdrop ${menuOpen ? "open" : ""}`} onClick={toggleHamburger} />
      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <li onClick={toggleHamburger}>HOME</li>
        <li onClick={toggleHamburger}>ABOUT</li>
        <li onClick={toggleHamburger}>GALLERY</li>
        <li onClick={toggleHamburger}>SHOP ALL</li>
        <li onClick={toggleHamburger}>LOGIN</li>
      </ul>
    </>
  );
};

export default NavBar;
