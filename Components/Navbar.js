import { Sling as Hamburger } from "hamburger-react";
import { useState, useCallback, useEffect } from "react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="grid grid-cols-2 h-12 bg-black w-screen">
      <div className="flex text-white justify-start items-center text-2xl tracking-wide">
        <h1 className="pl-4">Stephen Jakku</h1>
      </div>
      <div className="flex justify-end pr-1 items-center md:hidden max-h-44">
        <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="sm:hidden md:flex justify-end">
        <ul className="flex items-center text-white text-lg space-x-4 pr-4">
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
