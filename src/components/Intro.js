import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/intro.css";

import CircleText from "../assets/circle.svg";

const IntroPage = ({ pressed, setPressed }) => {

  const circles = ["w-2/12 rotate-45", "w-3/12 rotate-90", "w-4/12 rotate-12", "w-5/12 rotate-90", "w-6/12 rotate-180 spin-slow"];

  const container = {
    start: {
      screenY: 0,
      transition: {
      },
    },
    end: {
      transition: {
        staggerChildren: 0.1,
        delay: 1.5,
        ease: "easeInOut",
        duration: 1,
      },
      opacity: [1, 0],
    }
  };

  const variants = {
    // start: i => ({
    //   rotate: [0,0],
    //   transition: {
    //     duration: (3),
    //     // ease: "linear",
    //     // repeat: Infinity,
    //   },
    // }),
    end: {
      //scale: [1,1, 1.1, 0, 0],
      opacity: 0,
      transition: {
        duration: 2.5,
        ease: "anticipate",
      },
    },
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
    <AnimatePresence>
      {!pressed && (<motion.main
        key="intro"
        variants={container}
        initial={"hidden"}
        animate={pressed ? "end" : "start"}
        exit={"end"}
        className="fixed top-0 left-0 overflow-hidden w-screen h-screen flex justify-center items-center bg-dark-gray z-100">
        <title>Intro Page</title>

        <motion.div
          key="container"
          variants={container}
          initial={"hidden"}
          animate={pressed ? "end" : "start"}
          exit={"end"}
          className="w-full h-full flex justify-center items-center"
        >
          <motion.button
            key="intro-button"
            onClick={() => setPressed(true)}
            variants={buttonVariant}
            className="absolute w-6 sm:w-8 md:w-12 lg:w-14 aspect-square border-4 lg:border-8 border-white rounded-md z-10 focus:bg-white active:scale-75 transition-all"
          ></motion.button>

          {circles.map((circle, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={variants}
              className={`absolute ${circle} transform animation aspect-square flex justify-center items-center fill-white`}
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
