import React, { useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

import Logo from "./Logo";
import SquareButton from "./SquareButton";
import NavButton from "./NavButton";

function Navbar(props) {
  const [clicked, setClicked] = useState(false);

  function handleClick(state, id) {
    setClicked(state);
    id != null && scrollTo(id);
  }

  return (
    <nav>
      <button
        className="fixed right-8 top-8 md:hidden z-50 "
        onClick={() => handleClick(!clicked, null)}
      >
        <NavButton state={clicked} />
      </button>
      <div
        className={`h-24 w-full px-14 fixed top-0 flex gap-0 items-center text-sm font-roboto font-medium bg-dark-gray/90 backdrop-blur-md shadow-container z-30`}
      >
        <div className="self-center">
          <button className="w-max" onClick={() => scrollTo("#home")}>
            <Logo />
          </button>
        </div>
        <div
          className={`w-full hidden md:visible md:flex items-center justify-end  transition-all`}
        >
          <ul className="w-max h-max flex flex-row items-center gap-12 md:gap-6 tracking-widest ">
            <button
              onClick={() => scrollTo("#about")}
              className="font-roboto font-medium tracking-widest"
            >
              <li
                before="0.1 -"
                className="before:content-[attr(before)] before:inline-block before:text-vibrant-orange hover:text-vibrant-orange transition-all"
              >
                {" "}
                About.
              </li>
            </button>
            <button
              onClick={() => scrollTo("#experience")}
              className="font-roboto font-medium tracking-widest"
            >
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
            <div className="self-center ">
              <SquareButton color="white"> Resume </SquareButton>
            </div>
          </ul>
        </div>
      </div>

      <div>
        <div
          className={`${clicked ? "opacity-100 visible" : "opacity-0 -translate-x-full"} fixed w-screen h-screen bg-dark-gray/30 backdrop-blur-sm z-30 md:opacity-0 md:-translate-x-full transition ease-in-out duration-300 `}
        ></div>
        <div
          className={`${clicked ? "opacity-100" : "translate-x-full"} w-2/3 h-screen flex-col gap-10 bg-dark-gray text-md py-40 fixed right-0 flex items-center font-roboto font-medium shadow-container md:translate-x-full transition ease-in-out duration-500 z-40`}
        >
          <button onClick={() => handleClick(false, "#home")}>
            <Logo />
          </button>
          <div
            className={`w-full flex items-center justify-center transition-all`}
          >
            <ul className="w-max h-max flex flex-col items-start gap-12 tracking-widest ">
              <button
                onClick={() => handleClick(false, "#about")}
                className="font-roboto font-medium tracking-widest"
              >
                <li
                  before="0.1 -"
                  className="before:content-[attr(before)] before:inline-block before:text-vibrant-orange hover:text-vibrant-orange transition-all"
                >
                  {" "}
                  About.
                </li>
              </button>
              <button
                onClick={() => handleClick(false, "#experience")}
                className="font-roboto font-medium tracking-widest"
              >
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
              <div className="self-center ">
                <SquareButton color="white"> Resume </SquareButton>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
