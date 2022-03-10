import { Sling as Hamburger } from "hamburger-react";
import { useState, useCallback, useEffect } from "react";

function Navbar({ executeScroll, comp }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="grid grid-cols-2 h-12 bg-black">
      <div className="flex text-white justify -start items-center text-xl tracking-wide">
        <h1 className="pl-4 hover:text-3xl cursor-default text-2xl font-medium">
          SJ
        </h1>
      </div>
      <div className="flex justify-end pr-1 items-center md:hidden max-h-44">
        <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="hidden md:flex justify-end">
        <ul className="flex items-center text-white text-lg space-x-4 mr-4">
          <li
            onClick={() => {
              comp("abt");
              executeScroll();
            }}
            className="hover:border-b-2 hover:border-red-600 p-1 cursor-default "
          >
            About
          </li>
          <li
            onClick={() => {
              comp("exp");
              executeScroll();
            }}
            className="hover:border-b-2 hover:border-cyan-400 p-1  cursor-default"
          >
            Experience
          </li>
          <li
            onClick={() => {
              comp("prj");
              executeScroll();
            }}
            className="hover:border-b-2 hover:border-orange-400 p-1  cursor-default"
          >
            Projects
          </li>
          <li
            onClick={() => {
              executeScroll();
              comp("con");
            }}
            className="hover:border-b-2 hover:border-green-500 p-1  cursor-default"
          >
            Contact
          </li>
          <li className="hover:border-b-2 hover:border-fuchsia-600 p-1  cursor-default">
            Resume
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
