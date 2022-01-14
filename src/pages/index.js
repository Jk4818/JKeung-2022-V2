import React,{ useState } from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";

import "../css/index.css";
import Experience from "../components/Experience";
import ProjectsMain from "../components/ProjectsMain";
import ProjectsMore from "../components/ProjectsMore";
import Contact from "../components/Contact";
import IntroPage from "../components/Intro";
import ProjectSmallModal from "../components/ProjectSmallModal";

// data

// markup
const IndexPage = () => {
  const [pressed, setPressed] = useState(false);
  
  
  
  return (
    <main className="overflow-x-hidden w-screen min-h-screen h-max bg-dark-gray text-white">
      <title>Home Page</title>

      <IntroPage pressed={pressed} setPressed={setPressed}/>

      {pressed && (<Layout>
        {/* <ProjectSmallModal /> */}
        <Hero />
        <About />
        <Experience />
        <ProjectsMain />
        <ProjectsMore />
        <Contact />
      </Layout>)}
      
    </main>
  );
};

export default IndexPage;
