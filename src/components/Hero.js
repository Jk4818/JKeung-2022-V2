import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { motion } from "framer-motion";
import SquareButton from "../components/SquareButton";
import { IoMdArrowRoundDown } from "react-icons/io";

function Hero(props) {
  const variant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 10 },
  };

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return (
    <section id="home" className=" w-screen h-screen font-roboto text-white">
      <div className="w-screen h-screen px-10  sm:pl-20 lg:pl-44 2xl:pl-60">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <motion.div
            className="w-full h-max font-bold text-dynamic leading-tight"
            initial="hidden"
            animate="visible"
            variants={variant}
            transition={{ duration: 0.3, staggerChildren: 0.1 }}
          >
            <motion.h1 variants={variant} className="w-full">
              {data.site.siteMetadata.author}
            </motion.h1>
            <motion.h2 variants={variant} className="text-blue-gray w-full">
              <span className="link link-underline link-underline-black">
                Electronic
              </span>{" "}
              and{" "}
              <span className="link link-underline link-underline-black">
                Full Stack
              </span>{" "}
              Engineer
            </motion.h2>
            <motion.div
              variants={variant}
              className="mt-10 flex flex-wrap items-center gap-2"
            >
              <p className="text-blue-gray text-sm">Check out my other </p>
              <SquareButton
                border="border-vibrant-orange"
                text="text-vibrant-orange"
              >
                stuff
              </SquareButton>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            y: 0,
            transition: { duration: 1, type: "tween" },
          },
          hidden: {
            y: 450,
            transition: { duration: 1, type: "tween" },
          },
        }}
        className="w-full relative"
      >
        <div className="absolute -bottom-5 flex justify-center w-full h-max">
          <div className="w-max h-max -rotate-45">
            <IoMdArrowRoundDown color="white" size="100" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 10 },
        }}
        className="hidden md:block w-full fixed bottom-0"
      >
        <div className="absolute w-max h-max bottom-0 right-auto left-10 flex flex-col justify-center items-center">
          <div className="w-0.5 h-28 bg-white"></div>
          <p className="my-2 font-bold vertical-rl rotate-180">
            jiang7866@yahoo.co.uk
          </p>
          <div className="w-0.5 h-28 bg-white"></div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
