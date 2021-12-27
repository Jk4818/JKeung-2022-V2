import React from "react";
import SquareButton from "../components/SquareButton";
import Symbol from "../images/Symbol.svg";

function Contact(props) {
  return (
    <div
      id="contact"
      className="relative w-full h-max flex flex-col sm:flex-row sm:justify-evenly  items-center  px-4 my-20"
    >
      <div className="relative w-max z-0">
        <h1 className="absolute top-6 font-bold text-5xl text-white">Say Hello</h1>
        <h1 className="font-bold text-massive text-blue-gray">04.</h1>
      </div>

      <div className="w-max font-roboto z-10">
        <h3 className="font-bold">for business enquiries:</h3>
        <p>jk4818@ic.ac.uk</p>
        <br></br>
        <h3 className="font-bold">for general enquiries:</h3>
        <p>jiang7866@yahoo.co.uk</p>

        <div className="w-full mt-10 flex flex-col  items-center">
          <h3>For all visual/audio work</h3>
          <SquareButton> Learn More</SquareButton>
        </div>
      </div>

      <div className="hidden md:block w-40 z-30">
        <img src={Symbol} alt="Symbol" />
      </div>
    </div>
  );
}

export default Contact;
