import Hamburger from "hamburger-react";
import { useState } from "react";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="hamburger-menu-container">
        <Hamburger toggled={open} toggle={setOpen} />
      </div>
    </>
  );
};

export default HamburgerMenu;
