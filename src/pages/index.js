import * as React from "react";
import SquareButton from "../components/SquareButton";
import { IoMdArrowRoundDown } from "react-icons/io";
import "../css/index.css";

// data

// markup
const IndexPage = () => {
  return (
    <main className="w-screen min-h-screen bg-dark-gray">
      <title>Home Page</title>

      <section className="w-screen h-screen px-40 font-roboto text-white">
        <div className="w-full h-full flex flex-col justify-center items-start">
          <div className="w-max h-max font-bold text-5xl">
            <h1>Jason Keung.</h1>
            <h2 className="text-blue-gray">
              Electronic and Full Stack Engineer
            </h2>
            <div className="mt-10 flex items-center gap-2">
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
        <div className="w-full relative">
          <div className="absolute bottom-0 w-full h-max ">
            <div className="w-max h-max mx-auto">
              <IoMdArrowRoundDown color="white" size="100" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;
