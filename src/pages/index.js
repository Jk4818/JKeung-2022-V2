import * as React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";

import "../css/index.css";
import Experience from "../components/Experience";

// data

// markup
const IndexPage = () => {
  return (
    <main className="overflow-x-hidden w-screen min-h-screen bg-dark-gray text-white">
      <title>Home Page</title>

      <Layout>
        <Hero />
        <About />
        <Experience />
      </Layout>
      
    </main>
  );
};

export default IndexPage;
