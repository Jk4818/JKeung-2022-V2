import React from "react";

function About(props) {
  return (
    <section id="about" className="relative w-full h-screen">
      <div className="absolute top-20 left-32 w-max z-0">
        <h1 className="font-extrabold text-massive text-blue-gray">
          01.
        </h1>
      </div>
      <div className="w-full h-full px-80 flex justify-center items-center z-10">
        <div className="w-full h-1/2 flex justify-end shadow-xl shadow-black">
          <div className="w-1/2 h-full bg-white self-start"></div>
          <div className="w-1/2 h-full bg-dark-gray "></div>
        </div>
      </div>
    </section>
  );
}

export default About;
