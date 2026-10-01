import HamburgerMenu from "./HamburgerMenu";

const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-left">
          <img className="logo-img" src="./../../public/logo.png" alt="website logo" />
        </div>
        <div className="nav-right">
          <ul className="nav-list">
            <li className="nav-list-items">HOME</li>
            <li className="nav-list-items">ABOUT</li>
            <li className="nav-list-items">SHOP ALL</li>
            <li className="nav-list-items">LOGIN</li>
          </ul>
          <HamburgerMenu />
        </div>
      </div>
    </>
  );
};

export default NavBar;
