import { Sling as Hamburger } from "hamburger-react";
import { useState, useCallback, useEffect } from "react";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", (e) => updateTarget(e));

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", (e) => updateTarget(e));
  }, []);

  return targetReached;
};

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const isBreakpoint = useMediaQuery(768);
  return (
    // <div className="flex h-10 bg-black w-screen">
    <div className="grid grid-cols-2 items-center h-10 bg-black w-screen">
      <div className="text-white ml-4 items-center">
        <h1>Stephen Jakku</h1>
      </div>
      {isBreakpoint ? (
        <div className="flex justify-end mr-5 items-center">
          <Hamburger
            color="white"
            toggled={isOpen}
            toggle={setOpen}
            direction="right"
          />
        </div>
      ) : (
        <div className="justify-end">
          <ul className="hidden md:flex items-center text-white space-x-4 mr-4 justify-end">
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Resume</li>
          </ul>
        </div>
      )}
    </div>
    // </div>
  );
}

export default Navbar;
