import React from "react";
import { motion } from "framer-motion";

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      duration: 1.5,
      when: "afterChildren",
      ease: [0.87, 0, 0.13, 1],
    },
  },
};
const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
  },
};
const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

function Loader({setActive}) {
  return (
    <div id="transition-container" className="absolute inset-0 flex items-end justify-end overflow-hidden">
      <motion.div
        className="relative z-50 w-full bg-dark-gray flex justify-center items-center"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationComplete={() =>
          setActive(false)
        }
      >
        <motion.svg id="transition-svg" variants={textContainer} className="absolute z-50 flex">
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            className="text-white"
          >
            <rect className="w-full h-full fill-current" />
            <motion.rect
              variants={text}
              className="w-full h-full text-gray-600 fill-current"
            />
          </pattern>
          <text
            className="text-3xl font-roboto font-semibold text-white tracking-loader uppercase"
            textAnchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
            jkeung.me
          </text>
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default Loader;