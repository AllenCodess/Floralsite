import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
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
            <li className="nav-list-items">
              <Link className="nav-links" to="/inquiry">
                INQUIRY
              </Link>
            </li>

            <li className="nav-list-items">
              <Link className="nav-links" to="/cart">
                CART{" "}
                {cartItems.length > 0 && (
                  <span className="cart-length-number">{cartItems.length}</span>
                )}
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
        <li onClick={toggleHamburger}>
          <Link className="nav-links" to="/">
            HOME
          </Link>
        </li>
        <li onClick={toggleHamburger}>
          <Link className="nav-links" to="/about">
            ABOUT
          </Link>
        </li>
        <li onClick={toggleHamburger}>
          <Link className="nav-links" to="/gallery">
            GALLERY
          </Link>
        </li>
        <li onClick={toggleHamburger}>
          <Link className="nav-links" to="/shop">
            SHOP ALL
          </Link>
        </li>
        <li onClick={toggleHamburger}>
          <Link className="nav-links" to="/inquiry">
            INQUIRY
          </Link>
        </li>
        <li onClick={toggleHamburger}>LOGIN</li>
      </ul>
    </>
  );
};

export default NavBar;
