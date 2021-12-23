import React from "react";
import SquareButton from "../components/SquareButton";
import { IoMdArrowRoundDown } from "react-icons/io";

function Hero(props) {
  return (
    <section className="overflow-x-hidden w-screen h-screen font-roboto text-white">
      <div className="w-screen h-screen px-4 sm:pl-28 lg:pl-44 2xl:pl-60">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="w-full h-max font-bold text-dynamic leading-tight">
            <h1>Jason Keung.</h1>
            <h2 className="break-words text-blue-gray">
              Electronic and Full Stack Engineer
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-2">
              <p className="text-blue-gray text-sm">Check out my other </p>
              <SquareButton
                border="border-vibrant-orange"
                text="text-vibrant-orange"
              >
                stuff
              </SquareButton>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative">
        <div className="absolute -bottom-5 flex justify-center w-full h-max">
          <div className="w-max h-max -rotate-45">
            <IoMdArrowRoundDown color="white" size="100" />
          </div>
        </div>
      </div>

      <div className="hidden md:block w-full relative">
        <div className="absolute w-max h-max bottom-0 right-auto left-10 flex flex-col justify-center items-center">
          <div className="w-0.5 h-28 bg-white"></div>
          <p className="my-2 font-bold vertical-rl rotate-180">Welcome</p>
          <div className="w-0.5 h-28 bg-white"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
