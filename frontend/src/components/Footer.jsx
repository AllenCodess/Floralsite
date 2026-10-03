import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-one">
          <img className="footer-img" src="footer-logo.png" alt="footer logo" />
        </div>
        <hr />
        <div className="footer-two">
          <h2 className="footer-contact">CONTACT</h2>
          <ul className="footer-contact-list">
            <li className="footer-contact-item">daisyemail@gmail.com</li>
            <li className="footer-contact-item">(555) 123-4567</li>
          </ul>
        </div>
        <hr />
        <div className="footer-three">
          <h2 className="footer-contact">EXPLORE</h2>
          <ul className="footer-contact-list">
            <li className="footer-contact-item">
              <Link className="nav-links" to="/about">
                About Us
              </Link>
            </li>
            <li className="footer-contact-item">
              <Link className="nav-links" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="footer-contact-item">
              <Link className="nav-links" to="/shop">
                Shop All
              </Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="footer-four">
          <h2 className="footer-contact">FOLLOW US</h2>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank">
              <FontAwesomeIcon className="footer-icon" icon={faInstagram} />
            </a>
            <a href="https://Facebook.com" target="_blank">
              <FontAwesomeIcon className="footer-icon" icon={faFacebook} />
            </a>
            <a href="https://tiktok.com" target="_blank">
              <FontAwesomeIcon className="footer-icon" icon={faTiktok} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
