import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import personal from "../data/personal";

function Navbar({ executeScroll, refs }) {
  const [isOpen, setOpen] = useState(false);

  const navItems = [
    { label: "Education", ref: refs.eduRef, accent: "hover:border-yellow-400" },
    { label: "Skills", ref: refs.sklRef, accent: "hover:border-red-600" },
    { label: "Experience", ref: refs.expRef, accent: "hover:border-cyan-400" },
    { label: "Projects", ref: refs.prjRef, accent: "hover:border-orange-400" },
    { label: "Contact", ref: refs.conRef, accent: "hover:border-green-500" },
  ];

  return (
    <div>
      <div
        className={`grid grid-cols-2 h-12 ${
          isOpen ? "bg-red-600" : "bg-black"
        }`}
      >
        <div className="flex text-white justify-start items-center text-xl tracking-wide">
          <h1
            className="pl-4 hover:text-3xl cursor-pointer text-2xl font-medium transition-all"
            onClick={() => {
              executeScroll(refs.intRef);
              if (isOpen) setOpen(false);
            }}
          >
            SJ
          </h1>
        </div>
        <div className="flex justify-end pr-1 items-center md:hidden max-h-44">
          <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
        </div>

        <div className="hidden md:flex justify-end">
          <ul className="flex items-center text-white text-lg space-x-4 mr-4">
            {navItems.map((item) => (
              <li
                key={item.label}
                onClick={() => executeScroll(item.ref)}
                className={`hover:border-b-2 ${item.accent} p-1 cursor-pointer`}
              >
                {item.label}
              </li>
            ))}
            <li
              onClick={() => window.open(personal.resumeUrl, "_blank")}
              className="hover:border-b-2 hover:border-fuchsia-600 p-1 cursor-pointer"
            >
              Resume
            </li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div className="flex justify-center bg-red-600">
          <ul className="flex flex-col items-center text-white text-lg space-y-1 py-2">
            {navItems.map((item) => (
              <li
                key={item.label}
                onClick={() => {
                  executeScroll(item.ref);
                  setOpen(false);
                }}
                className="hover:border-b-2 hover:border-white p-1 cursor-pointer"
              >
                {item.label}
              </li>
            ))}
            <li
              onClick={() => {
                window.open(personal.resumeUrl, "_blank");
                setOpen(false);
              }}
              className="hover:border-b-2 hover:border-white p-1 cursor-pointer"
            >
              Resume
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
