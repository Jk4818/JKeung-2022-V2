import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/intro.css";

import CircleText from "../assets/circle.svg";

const IntroPage = () => {
  const [pressed, setPressed] = useState(false);

  const circles = ["w-2/12","w-3/12","w-4/12","w-5/12","w-6/12","w-7/12","w-8/12"];
  const orientation = [1,-1,-1,1,-1,1,-1,1];

  const container = {
    start: {
      transition: {
      },
    },
    end: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const variants = {
    start: i => ({
      rotate: [Math.random() * 360, orientation[i] * 360],
      transition: {
        duration: (i*Math.random() * (130 - 80 + 1) + 80),
        ease: "linear",
        repeat: Infinity,
      },
    }),
    end: i => ({
      scale: [1, 17],
      opacity: [1, 1,0],
      transition: {
        duration: 2,
        ease: "anticipate",
      },
    }),
  };

  const buttonVariant = {
    start: {
      transition: {
        duration: 1,
        ease: "anticipate",
      },
    },
    end: {
      scale: [1, 1, 1, 1, 2, 0],
      rotate: [0, 360],
      borderRadius: ["20%", "50%", "50%", "50%"],
      transition: {
        duration: 1,
        ease: "anticipate",
      },
    },
  };

  return (
    <main className="overflow-hidden w-screen h-screen flex justify-center items-center bg-dark-gray">
      <title>Intro Page</title>

      <motion.div
        variants={container}
        initial={"hidden"}
        animate={pressed ? "end" : "start"}
        className="w-full h-full flex justify-center items-center"
      >

      <motion.button
        onClick={() => setPressed(true)}
        variants={buttonVariant}
        className="absolute w-6 sm:w-8 md:w-12 lg:w-14 aspect-square border-4 lg:border-8 border-white rounded-md z-10 focus:bg-white active:scale-75 transition-all"
      ></motion.button>

      {circles.map((circle, i) => (
        <motion.div
          key ={i}
          custom={i}
          variants={variants}
          className={`absolute ${circle} aspect-square flex justify-center items-center fill-white`}
        >
          <CircleText />
        </motion.div>
      ))}

      </motion.div>
    </main>
  );
};

export default IntroPage;
