import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/intro.css";

import CircleText from "../assets/circle.svg";

const IntroPage = () => {
  const [pressed, setPressed] = useState(false);


  
  const circleAnimation = {
    rotate: [0, 360],
  };
  const circleAnimation2 = {
    rotate: [260, -100],
  };
  const circleAnimation3 = {
    rotate: [160, -200],
  };

  const exitAnimation = {
    scale: [1, 0.7, 0.7, 10],
  };
  
  
  const transition = {
    duration: 130,
    ease: "linear",
    repeat: Infinity
  };
  const transition2 = {
    duration: 100,
    ease: "linear",
    repeat: Infinity
  };
  const exitTransition = {
    duration: 3,
    ease: "easeIn",
    repeat: Infinity
  };
  
  return (
    <motion.main
      transition={transition}
      animate={"visible"}
      className="overflow-hidden w-screen h-screen flex justify-center items-center bg-dark-gray"
    >
      <title>Intro Page</title>

      <motion.button
        onClick={() => setPressed(true)}
        className="absolute sm:w-8 md:w-12 lg:w-14 aspect-square border-4 lg:border-8 border-white rounded-md z-10 active:bg-white active:scale-75 transition-all"
      ></motion.button>

      <motion.div animate={exitAnimation} transition={exitTransition} className="absolute w-1/2 aspect-square flex justify-center items-center fill-white">
        <CircleText />
      </motion.div>
      <motion.div animate={circleAnimation2} transition={transition} className="absolute w-5/12 aspect-square flex justify-center items-center fill-white">
        <CircleText />
      </motion.div>
      <motion.div animate={circleAnimation3} transition={transition} className="absolute w-4/12 aspect-square flex justify-center items-center fill-white">
        <CircleText />
      </motion.div>
      <motion.div animate={circleAnimation2} transition={transition2} className="absolute w-3/12 aspect-square flex justify-center items-center fill-white">
        <CircleText />
      </motion.div>
    </motion.main>
  );
};

export default IntroPage;
