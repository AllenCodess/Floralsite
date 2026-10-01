import Hamburger from "hamburger-react";
import { useState } from "react";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Hamburger toggled={open} toggle={setOpen} />
    </>
  );
};

export default HamburgerMenu;
