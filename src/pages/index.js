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

// data

// markup
const IndexPage = () => {
  const [active, setActive] = useState(true);


  const [showModal, setShowModal] = useState({title: "", tags: "", fullDesc: ""});

  return (
    <main className=" min-h-screen h-max bg-dark-gray text-white">
      <title>Home Page</title>

      
      {(
        !active ?
        <Layout>
          <Hero />
          <About />
          <Experience />
          <ProjectsMain />
          <ProjectsMore setShowModal={setShowModal}/>
          <Contact />

          <ProjectSmallModal showModal={showModal} setShowModal={setShowModal}/>
        </Layout>
        :
        <Loader setActive={setActive} />

      )}
    </main>
  );
};

export default IndexPage;
