import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import { motion } from "framer-motion";

import ProjectSmall from "./ProjectSmall";
import RoundButton from "./RoundButton";

function ProjectsMore(props) {
  const [show, setShow] = useState(false);

  function handleClick(state) {
    setShow(state);
    if (!state) {
      scrollTo("#more_projects");
    }
  }

  function handleKeyDown(ev, state) {
    // check keys if you want
    if (ev.keyCode == 13) {
      setShow(state);
      if (!state) {
        scrollTo("#more_projects");
      }
    }
  }

  let data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              frontmatter {
                title
                tags
                date(formatString: "DD MMMM, YYYY")
              }
              excerpt
              html
              id
            }
          }
        }
      }
    `
  );

  const numberOfItems = show ? data.length : 3;

  return (
    <section
      id="more_projects"
      className="relative w-full h-full font-roboto text-white px-20 lg:px-40 xl:px-80 py-10"
    >
      <div className="flex items-center justify-between my-20">
        <h1>Other Noteworthy Works</h1>
        <div className="w-40 h-1 bg-blue-gray"></div>
      </div>

      <motion.div
        className="w-full h-full grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.2, staggerChildren: 0.1 }}
        animate={show ? "visible" : "hidden"}
      >
        {data.allMarkdownRemark.edges.slice(0, numberOfItems).map((project) => (
          <motion.div
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
          >
            <ProjectSmall
              key={project.node.id}
              title={project.node.frontmatter.title}
              tags={project.node.frontmatter.tags}
            >
              {project.node.excerpt}
            </ProjectSmall>
          </motion.div>
        ))}
      </motion.div>

      <div
        id="scroll_more"
        className={`flex justify-center mt-10`}
        onClick={() => handleClick(!show)}
        onKeyDown={(ev) => handleKeyDown(ev, !show)}
      >
        <RoundButton>{show ? "Show Less" : "Show More"}</RoundButton>
      </div>
    </section>
  );
}

export default ProjectsMore;
