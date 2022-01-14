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
    if (ev.keyCode === 13) {
      setShow(state);
      if (!state) {
        scrollTo("#more_projects");
      }
    }
  }

  let data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: { frontmatter: { featured: { eq: false } } }) {
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
      className="relative w-full h-full font-roboto text-white py-10 flex justify-center"
    >
      <div className="px-28 sm:px-0 w-full h-full sm:w-3/4 xl:w-1/2 ultrawide:w-1/3 super-ultrawide:w-1/4 ">
        
        <div className="flex flex-col md:flex-row font-bold items-center justify-between my-20">
          <h1>Other Noteworthy Works</h1>
          <div className="w-40 h-1 bg-blue-gray"></div>
        </div>

        <motion.div
          className="w-full h-full grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.2, staggerChildren: 0.1 }}
          animate={show ? "visible" : "hidden"}
        >
          {data.allMarkdownRemark.edges.slice(0, numberOfItems).map((project) => (
            <motion.div
              key={project.node.id}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
            >
              <ProjectSmall
                title={project.node.frontmatter.title}
                tags={project.node.frontmatter.tags}
              >
                {project.node.excerpt}
              </ProjectSmall>
            </motion.div>
          ))}
        </motion.div>

        <div className={`flex justify-center mt-10`}>
          <button
            id="scroll_more"
            onClick={() => handleClick(!show)}
            onKeyDown={(ev) => handleKeyDown(ev, !show)}
          >
            <RoundButton>{show ? "Show Less" : "Show More"}</RoundButton>
          </button>
        </div>

      </div>
    </section>
  );
}

export default ProjectsMore;
