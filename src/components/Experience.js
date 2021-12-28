import React from "react";
import { motion } from "framer-motion";

import Jdk from "../assets/jdk.svg";
import Odd from "../assets/odd.svg";
import Aon from "../assets/aon.svg";

function Experience(props) {
  const variant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <section
      id="experience"
      className="relative w-full mt-80 md:mt-0 md:my-40 h-max items-center justify-center font-roboto font-bold text-lg text-white"
    >
      <div className="absolute -top-60 md:-top-48 md:right-0 xl:right-32 w-max z-0">
        <h1 className="font-bold text-massive text-blue-gray">02.</h1>
      </div>
      <motion.div
        className="relative flex justify-center z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 50 },
        }}
      >
        <h1>Few companies I've enjoyed working with</h1>
      </motion.div>
      <motion.div
        className="my-10 h-full flex flex-wrap justify-center gap-10 px-10 sm:px-20 lg:px-40 xl:px-80 md:justify-between items-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.2, staggerChildren: 0.1 }}
      >
        <motion.div
          className="w-1/3 md:w-40 flex justify-center"
          variants={variant}
        >
          <Jdk />
        </motion.div>
        <motion.div
          className="w-1/3 md:w-max flex justify-center"
          variants={variant}
        >
          <Odd />
        </motion.div>
        <motion.div
          className="w-1/3 md:w-40 flex justify-center"
          variants={variant}
        >
          <Aon />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Experience;
