import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import personal from "../data/personal";

function Navbar({ executeScroll, refs }) {
  const [isOpen, setOpen] = useState(false);

  const navItems = [
    { label: "Education", ref: refs.eduRef, accent: "hover:border-yellow-400" },
    { label: "Skills", ref: refs.sklRef, accent: "hover:border-red-500" },
    { label: "Experience", ref: refs.expRef, accent: "hover:border-accent" },
    { label: "Projects", ref: refs.prjRef, accent: "hover:border-orange-400" },
    { label: "Contact", ref: refs.conRef, accent: "hover:border-green-400" },
  ];

  return (
    <div className="border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="grid grid-cols-2 h-14">
        <div className="flex text-white justify-start items-center">
          <h1
            className="pl-5 cursor-pointer text-xl font-semibold tracking-widest text-accent hover:opacity-80 transition-opacity"
            onClick={() => {
              executeScroll(refs.intRef);
              if (isOpen) setOpen(false);
            }}
          >
            SJ
          </h1>
        </div>
        <div className="flex justify-end pr-2 items-center md:hidden">
          <Hamburger color="white" toggled={isOpen} toggle={setOpen} size={20} />
        </div>

        <div className="hidden md:flex justify-end items-center">
          <ul className="flex items-center text-white text-sm font-medium space-x-1 mr-4">
            {navItems.map((item) => (
              <li
                key={item.label}
                onClick={() => executeScroll(item.ref)}
                className={`border-b-2 border-transparent ${item.accent} px-3 py-1 cursor-pointer transition-all duration-200`}
              >
                {item.label}
              </li>
            ))}
            <li
              onClick={() => window.open(personal.resumeUrl, "_blank")}
              className="ml-2 border border-accent text-accent px-4 py-1 rounded cursor-pointer hover:bg-accent hover:text-black transition-all duration-200 text-sm font-medium"
            >
              Resume
            </li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div className="bg-zinc-950 border-t border-white/10 py-3">
          <ul className="flex flex-col items-center text-white text-sm font-medium space-y-3">
            {navItems.map((item) => (
              <li
                key={item.label}
                onClick={() => {
                  executeScroll(item.ref);
                  setOpen(false);
                }}
                className="cursor-pointer hover:text-accent transition-colors"
              >
                {item.label}
              </li>
            ))}
            <li
              onClick={() => {
                window.open(personal.resumeUrl, "_blank");
                setOpen(false);
              }}
              className="border border-accent text-accent px-6 py-1.5 rounded cursor-pointer hover:bg-accent hover:text-black transition-all duration-200"
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
