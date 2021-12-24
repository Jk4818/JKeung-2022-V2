import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

import Logo from "./Logo";
import SquareButton from "./SquareButton";

function Navbar(props) {
  return (
    <nav className="fixed w-full h-24 px-14 flex items-center bg-dark-gray/30 text-sm font-roboto font-medium backdrop-blur-sm z-50">
      <button onClick={() => scrollTo("#home")}>
        <Logo />
      </button>
      <div className="w-full flex items-center justify-end">
        <ul className="w-max h-max flex items-center gap-6 tracking-widest ">
          <button onClick={() => scrollTo("#about")} className="font-roboto font-medium tracking-widest">
            <li
              before="0.1 -"
              className="before:content-[attr(before)] before:inline-block before:text-vibrant-orange hover:text-vibrant-orange transition-all"
            >
              {" "}
              About.
            </li>
          </button>
          <button onClick={() => scrollTo("#experience")} className="font-roboto font-medium tracking-widest">
            <li
              before="0.2 -"
              className="before:content-[attr(before)] before:inline-block before:text-vibrant-orange hover:text-vibrant-orange transition-all"
            >
              {" "}
              Experience.
            </li>
          </button>
          <li
            before="0.3 -"
            className="before:content-[attr(before)] before:inline-block before:text-vibrant-orange"
          >
            {" "}
            Projects.
          </li>
          <li
            before="0.4 -"
            className="before:content-[attr(before)] before:inline-block before:text-vibrant-orange"
          >
            {" "}
            Contact.
          </li>
          <SquareButton color="white"> Resume </SquareButton>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
