import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { motion } from "framer-motion";

import ProjectLarge from "./ProjectLarge";

function ProjectsMain(props) {


  let data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark (filter: { frontmatter: { featured: { eq: true } } }) {
          edges {
            node {
              id
              frontmatter {
                featured
                type
                title
                tags
                date(formatString: "DD MMMM, YYYY")
              }
              html
              id
            }
          }
        }
      }
    `
  );
  
  return (
    <section id="main_projects" className="relative w-full h-full font-roboto">
      <div className="relative md:absolute md:top-24 xl:left-32 w-max z-0">
        <h1 className="font-bold md:scale-x-[-1] text-massive text-blue-gray">
          03.
        </h1>

      </div>

      <section className="relative w-full flex flex-col gap-20 px-4 sm:px-40 xl:px-80">

        <div className="relative flex justify-center z-10">
          <h2>Some projects I've worked on</h2>
        </div>
        {data.allMarkdownRemark.edges.map((project) => (
          <motion.div
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
          >
            <ProjectLarge type="right" 
              key={project.node.id}
              topic={project.node.frontmatter.type}
              title={project.node.frontmatter.title}
              tags={project.node.frontmatter.tags}
            >
              {project.node.html}
            </ProjectLarge>
          </motion.div>
        ))}
      </section>
    </section>
  );
}

export default ProjectsMain;
