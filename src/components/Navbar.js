import React, { useState, useEffect, useCallback } from "react";
import { window, document } from 'browser-monads';
import scrollTo from "gatsby-plugin-smoothscroll";

import Logo from "./Logo";
import SquareButton from "./SquareButton";
import NavButton from "./NavButton";

function Navbar(props) {
  const [show, setShow] = useState(false);
  const [reachedTop, setReachedTop] = useState(true);
  const [clicked, setClicked] = useState(false);

  function handleClick(state, id) {
    setClicked(state);
    id != null && scrollTo(id);
    if (state) {
      console.log(true);
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "visible";
    }
  }

  const [y, setY] = useState(document.scrollingElement.scrollHeight);

  const handleNavigation = useCallback(
    (e) => {
      if (y > window.scrollY) {
        setShow(false);
        setReachedTop(false);
      } else if (y < window.scrollY && window.scrollY > 100) {
        setShow(true);
      }

      if (window.scrollY <= 100) {
        setReachedTop(true);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    function handleViewport() {
      if (document.documentElement.clientWidth >= 768) {
        document.documentElement.style.overflow = "visible";
        setClicked(false);
      }
    }
    window.addEventListener("scroll", handleNavigation);
    window.addEventListener("resize", handleViewport);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
      window.addEventListener("resize", handleViewport);
    };
  }, [handleNavigation]);

  return (
    <nav
      className={`z-30 transition ease-in-out duration-300`}
    >
      <button
        className={`${
          show && "-translate-y-[5rem]"
        } w-max fixed right-8 top-8 md:hidden z-50 transition ease-in-out duration-300`}
        onClick={() => handleClick(!clicked, null)}
      >
        <NavButton state={clicked} />
      </button>
      <div
        className={` ${show && "-translate-y-full shadow-none"}  ${
          reachedTop && "shadow-none"
        } h-24 w-full px-14 fixed top-0 flex gap-0 items-center text-xs font-roboto  bg-dark-gray/90 backdrop-blur-md shadow-container z-30 transition ease-in-out duration-300`}
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
                className="before:content-[attr(before)] before:inline-block before:text-vibrant-orange before:tracking-tight hover:text-vibrant-orange transition-all"
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
                className="before:content-[attr(before)] before:inline-block before:text-vibrant-orange before:tracking-tight hover:text-vibrant-orange transition-all"
              >
                {" "}
                Experience.
              </li>
            </button>
            <button
              onClick={() => scrollTo("#main_projects")}
              className="font-roboto font-medium tracking-widest"
            >
              <li
                before="0.3 -"
                className="before:content-[attr(before)] before:inline-block before:text-vibrant-orange before:tracking-tight hover:text-vibrant-orange transition-all"
              >
                {" "}
                Projects.
              </li>
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="font-roboto font-medium tracking-widest"
            >
              <li
                before="0.4 -"
                className="before:content-[attr(before)] before:inline-block before:text-vibrant-orange before:tracking-tight hover:text-vibrant-orange transition-all"
              >
                {" "}
                Contact.
              </li>
            </button>
            <div className="self-center ">
              <SquareButton color="white"> Resume </SquareButton>
            </div>
          </ul>
        </div>
      </div>

      <div>
        {/* <div
          className={`${
            clicked ? "opacity-100" : "hidden"
          } fixed w-screen h-screen bg-dark-gray/30 backdrop-blur-sm z-30 block md:hidden`}
        ></div> */}
        <div
          className={`${
            clicked ? "opacity-100 shadow-container" : "translate-x-full"
          } w-3/4 h-screen flex-col gap-10 bg-dark-gray text-dynamic-small py-40 fixed right-0 flex items-center font-roboto font-medium md:translate-x-full transition ease-in-out duration-500 z-40`}
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
              <button
                onClick={() => handleClick(false, "#main_projects")}
                className="font-roboto font-medium tracking-widest"
              >
                <li
                  before="0.3 -"
                  className="before:content-[attr(before)] before:inline-block before:text-vibrant-orange hover:text-vibrant-orange transition-all"
                >
                  {" "}
                  Projects.
                </li>
              </button>
              <button
                onClick={() => handleClick(false, "#contact")}
                className="font-roboto font-medium tracking-widest"
              >
                <li
                  before="0.4 -"
                  className="before:content-[attr(before)] before:inline-block before:text-vibrant-orange hover:text-vibrant-orange transition-all"
                >
                  {" "}
                  Contact.
                </li>
              </button>
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
