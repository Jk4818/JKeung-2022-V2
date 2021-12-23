import * as React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";

import "../css/index.css";

// data

// markup
const IndexPage = () => {
  return (
    <main className="w-screen min-h-screen bg-dark-gray text-white">
      <title>Home Page</title>

      <Layout>
        <Hero />
        <About />
      </Layout>
      
    </main>
  );
};

export default IndexPage;
