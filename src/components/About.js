import React from "react";
import { motion } from "framer-motion";

function About(props) {
  return (
    <section id="about" className="relative w-full h-screen my-40 md:my-0 flex justify-center">
      <motion.div
        className="relative px-4 w-full sm:w-3/4 ultrawide:w-1/3 super-ultrawide:w-1/4 h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.2, staggerChildren: 0.1 }}
      >
        <motion.div
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="absolute -top-40 md:top-24 xl:-left-32 w-max z-0"
        >
          <h1 className="font-bold md:scale-x-[-1] text-massive text-blue-gray">
            01.
          </h1>
        </motion.div>
        <motion.div
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="relative w-full h-full flex justify-center items-center z-10"
        >
          <div className="w-full h-full md:h-1/2 flex flex-col md:flex-row justify-end shadow-container shadow-black">
            <div className="container w-full h-1/2 md:w-1/2 md:h-full p-10 lg:p-20 bg-white self-start flex flex-col justify-center font-roboto text-p-gray">
              <h2 className="w-max font-bold text-2xl text-black link link-underline link-underline-black">
                About Me.
              </h2>
              <h3 className="mt-2 font-medium text-sm">
                It's all about full-stack.
              </h3>
              <div className="mt-12">
                <p>
                  I'm a UK born Chinese currently studying an MEng in Electronic
                  and Information Engineering at Imperial College London. Highly
                  self-driven, my interest in technology is broad with
                  particular interest on music technology, photography and
                  full-stack systems.
                </p>
              </div>
            </div>
            <div className="container w-full h-1/2 md:w-1/2 md:h-full bg-dark-gray p-10 flex flex-col justify-center items-center font-roboto text-white">
              <h2 className="text-left">
                Technologies I’ve worked with recently:
              </h2>
              <div className="mt-12 flex gap-10 lg:gap-20 font-medium">
                <ul className="list-[square] list-inside">
                  <li className=" text-vibrant-orange ">
                    <span className="text-white link link-underline link-underline-black">
                      React
                    </span>
                  </li>
                  <li className=" text-vibrant-orange">
                    <span className="text-white link link-underline link-underline-black">
                      Javascript (ES6+)
                    </span>
                  </li>
                  <li className=" text-vibrant-orange">
                    <span className="text-white link link-underline link-underline-black">
                      Node.js
                    </span>
                  </li>
                  <li className=" text-vibrant-orange">
                    <span className="text-white link link-underline link-underline-black">
                      Tailwind
                    </span>
                  </li>
                </ul>
                <ul className="list-[square] list-inside">
                  <li className=" text-vibrant-orange">
                    <span className="text-white link link-underline link-underline-black">
                      JUCE (C++)
                    </span>
                  </li>
                  <li className=" text-vibrant-orange">
                    <span className="text-white link link-underline link-underline-black">
                      Python
                    </span>
                  </li>
                  <li className=" text-vibrant-orange">
                    <span className="text-white link link-underline link-underline-black">
                      Go
                    </span>
                  </li>
                  <li className=" text-vibrant-orange">
                    <span className="text-white link link-underline link-underline-black">
                      AWS
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
