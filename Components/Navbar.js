import { Sling as Hamburger } from "hamburger-react";
import { useState, useCallback, useEffect } from "react";

function Navbar({ executeScroll }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="grid grid-cols-2 h-12 bg-black">
      <div className="flex text-white justify-start items-center text-xl tracking-wide">
        <h1 className="pl-4 hover:text-2xl cursor-default">Stephen Jakku</h1>
      </div>
      <div className="flex justify-end pr-1 items-center md:hidden max-h-44">
        <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="hidden md:flex justify-end">
        <ul className="flex items-center text-white text-lg space-x-4 pr-4">
          <li className="hover:text-black hover:bg-slate-100 p-1 rounded-md cursor-default">
            About
          </li>
          <li
            onClick={executeScroll}
            className="hover:text-black hover:bg-slate-100 p-1 rounded-md cursor-default"
          >
            Experience
          </li>
          <li className="hover:text-black hover:bg-slate-100 p-1 rounded-md cursor-default">
            Projects
          </li>
          <li className="hover:text-black hover:bg-slate-100 p-1 rounded-md cursor-default">
            Contact
          </li>
          <li className="hover:text-black hover:bg-cyan-600 p-1 rounded-md cursor-default">
            Resume
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
