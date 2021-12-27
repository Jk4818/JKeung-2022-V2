import React from "react";

import JDK from "../images/JDK.svg";
import ODD from "../images/ODD.svg";
import AON from "../images/AON.svg";

function Experience(props) {
  return (
    <section id="experience" className="relative w-full mt-80 md:mt-0 h-max items-center justify-center font-roboto font-bold text-lg text-white">
      <div className="absolute -top-60 md:-top-48 md:right-0 xl:right-32 w-max z-0">
        <h1 className="font-bold text-massive text-blue-gray">02.</h1>
      </div>
      <div className="relative flex justify-center z-10">
          <h1 >Few companies I've enjoyed working with</h1>
      </div>
      <div className="my-10 h-full flex flex-wrap gap-10 px-10 sm:px-20 lg:px-40 xl:px-80 justify-between items-center ">
          <div className="w-full md:w-40 flex justify-center"><img src={JDK} alt="JDK" className="h-full w-40"></img></div>
          <div className="w-full md:w-max flex justify-center"><img src={ODD} alt="ODD" className="h-full w-max"></img></div>
          <div className="w-full md:w-40 flex justify-center"><img src={AON} alt="AON" className="mix-blend-screen h-full w-40"></img></div>
      </div>
    </section>
  );
}

export default Experience;
