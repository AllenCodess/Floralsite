import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../slices/authSlice.js";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const { adminInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleHamburger = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav-left">
          <img className="logo-img" src="/logo.png" alt="website logo" />
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
                  <span className="cart-length-number">({cartItems.length})</span>
                )}
              </Link>
            </li>

            {adminInfo ? (
              <>
                <li className="nav-list-items">
                  <Link className="nav-links" to="/admin/orders">
                    ADMIN
                  </Link>
                </li>
                <li className="nav-list-items">
                  <button className="nav-links nav-logout-btn" onClick={handleLogout}>
                    LOGOUT
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-list-items">
                <Link className="nav-links" to="/login">
                  LOGIN
                </Link>
              </li>
            )}
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
        <li onClick={toggleHamburger}>
          <Link className="nav-links" to="/cart">
            CART
          </Link>
        </li>

        {adminInfo ? (
          <>
            <li onClick={toggleHamburger}>
              <Link className="nav-links" to="/admin/orders">
                ADMIN
              </Link>
            </li>
            <li onClick={toggleHamburger}>
              <button className="nav-links nav-logout-btn" onClick={handleLogout}>
                LOGOUT
              </button>
            </li>
          </>
        ) : (
          <li onClick={toggleHamburger}>
            <Link className="nav-links" to="/login">
              LOGIN
            </Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default NavBar;
