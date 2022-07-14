import React, { useState } from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";

import "../css/index.css";
import Experience from "../components/Experience";
import ProjectsMain from "../components/ProjectsMain";
import ProjectsMore from "../components/ProjectsMore";
import Contact from "../components/Contact";
// import IntroPage from "../components/Intro";
import Loader from "../components/Loader";
import ProjectSmallModal from "../components/ProjectSmallModal";
import RoundButton from '../components/RoundButton';

// data

// markup
const IndexPage = () => {
  const [active, setActive] = useState(true);


  const [showModal, setShowModal] = React.useState(false);

  return (
    <main className=" w-screen min-h-screen h-max bg-dark-gray text-white">
      <title>Home Page</title>

      <Loader setActive={setActive} />
      {(
        !active &&
        <Layout>
          <Hero />
          <About />
          <Experience />
          <ProjectsMain />
          <ProjectsMore />
          <Contact />

          <button
            className=""
            type="button"
            onClick={() => setShowModal(true)}
          >
            <RoundButton>Learn More</RoundButton>
          </button>

          <ProjectSmallModal showModal={showModal} setShowModal={setShowModal}/>
        </Layout>

      )}
    </main>
  );
};

export default IndexPage;
