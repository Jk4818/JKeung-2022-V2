import React from "react";

function About(props) {
  return (
    <section id="about" className="relative w-full h-screen">
      <div className="absolute top-24 left-32 w-max z-0">
        <h1 className="font-bold scale-x-[-1] text-massive text-blue-gray">
          01.
        </h1>
      </div>
      <div className="relative w-full h-full px-80 flex justify-center items-center z-10">
        <div className="w-full h-1/2 flex justify-end shadow-container shadow-black">
          <div className="container w-1/2 h-full p-10 lg:p-20 bg-white self-start flex flex-col justify-center font-roboto text-p-gray">
              <h2 className="w-max font-bold text-2xl text-black link link-underline link-underline-black">About Me.</h2>
              <h3 className="mt-2 font-medium text-sm">It's all about full-stack.</h3>
              <div className="mt-12">
                <p>I'm a UK born Chinese currently studying an MEng in Electronic and
                Information Engineering at Imperial College London. 
                Highly self-driven,
                my interest in technology is broad with particular interest on music
                technology, photography and full-stack systems.</p>
              </div>
          </div>
          <div className="container w-1/2 h-full bg-dark-gray p-10 flex flex-col justify-center items-center font-roboto text-white">
            <h2 className="text-left">Technologies I’ve worked with recently:</h2>
            <div className="mt-12 flex gap-10 lg:gap-20 font-medium">
              <ul className="list-[square] list-inside">
                <li className=" text-vibrant-orange "><span className="text-white link link-underline link-underline-black">React</span></li>
                <li className=" text-vibrant-orange"><span className="text-white link link-underline link-underline-black">Javascript (ES6+)</span></li>
                <li className=" text-vibrant-orange"><span className="text-white link link-underline link-underline-black">Node.js</span></li>
                <li className=" text-vibrant-orange"><span className="text-white link link-underline link-underline-black">Tailwind</span></li>
              </ul>
              <ul className="list-[square] list-inside">
                <li className=" text-vibrant-orange"><span className="text-white link link-underline link-underline-black">JUCE (C++)</span></li>
                <li className=" text-vibrant-orange"><span className="text-white link link-underline link-underline-black">Python</span></li>
                <li className=" text-vibrant-orange"><span className="text-white link link-underline link-underline-black">Go</span></li>
                <li className=" text-vibrant-orange"><span className="text-white link link-underline link-underline-black">AWS</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
