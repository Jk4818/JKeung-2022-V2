import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/intro.css";

import CircleText from "../assets/circle.svg";

const IntroPage = ({ pressed, setPressed }) => {

  const circles = ["w-2/12", "w-3/12", "w-4/12", "w-5/12", "w-6/12", "w-7/12",];

  // const container = {
  //   start: {
  //     screenY: 0,
  //     transition: {
  //     },
  //   },
  //   end: {
  //     transition: {
  //       staggerChildren: 0.2,
  //       delay: 1.5,
  //       ease: "easeInOut",
  //       duration: 0.5,
  //     },
  //     opacity: 0,
  //   }
  // };

  // const variants = {
  //   // start: i => ({
  //   //   rotate: [0,0],
  //   //   transition: {
  //   //     duration: (3),
  //   //     // ease: "linear",
  //   //     // repeat: Infinity,
  //   //   },
  //   // }),
  //   end: {
  //     //scale: [1,1, 1.1, 0, 0],
  //     opacity: 0,
  //     transition: {
  //       duration: 1.5,
  //       ease: "anticipate",
  //     },
  //   },
  // };

  // const buttonVariant = {
  //   start: {
  //     transition: {
  //       duration: 1,
  //       ease: "anticipate",
  //     },
  //   },
  //   end: {
  //     scale: [1, 1, 1, 1, 2,100],
  //     rotate: [0, 360],
  //     borderRadius: ["20%", "50%", "50%", "50%"],
  //     transition: {
  //       duration: 1.5,
  //       ease: "anticipate",
  //     },
  //   },
  // };

  return (
    <AnimatePresence>
      {!pressed && (<motion.main
        key="intro"
        className="fixed top-0 left-0 overflow-hidden w-screen h-screen flex justify-center items-center bg-dark-gray z-100">
        <title>Intro Page</title>

        <motion.div
          key="container"
          className="w-full h-full flex justify-center items-center"
        >
          <motion.button
            key="intro-button"
            className="absolute w-6 sm:w-8 md:w-12 lg:w-14 aspect-square border-4 lg:border-8 border-white rounded-md z-10 hover:bg-white focus:bg-white active:scale-75 transition-all duration-300"
          ></motion.button>

          {circles.map((circle, i) => (
            <motion.div
              key={i}
              className={`circle-class absolute ${circle} transform animation aspect-square flex justify-center items-center fill-white`}
            >
              <CircleText />
            </motion.div>
          ))}

        </motion.div>

      </motion.main>
      )}

    </AnimatePresence>
  );
};

export default IntroPage;
