import React from "react";

import JDK from "../images/JDK.svg";
import ODD from "../images/ODD.svg";
import AON from "../images/AON.svg";

function Experience(props) {
  return (
    <section id="experience" className="relative w-full h-72 items-center justify-center font-roboto font-bold text-lg text-white">
      <div className="absolute -top-48 right-32 w-max z-0">
        <h1 className="font-bold text-massive text-blue-gray">02.</h1>
      </div>
      <div className="flex justify-center">
          <h1 >Few companies I've enjoyed working with</h1>
      </div>
      <div className="h-full flex justify-center items-center gap-40">
          <img src={JDK} alt="JDK"></img>
          <img src={ODD} alt="ODD"></img>
          <img src={AON} alt="AON" className="mix-blend-screen"></img>
      </div>
    </section>
  );
}

export default Experience;
