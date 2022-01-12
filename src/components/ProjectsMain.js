import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { motion } from "framer-motion";

import ProjectLarge from "./ProjectLarge";

function ProjectsMain(props) {
  let data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: { frontmatter: { featured: { eq: true } } }) {
          edges {
            node {
              id
              frontmatter {
                featured
                type
                title
                tags
                date(formatString: "DD MMMM, YYYY")
                image {
                    childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                } 
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
    <section
      id="main_projects"
      className="my-20 relative w-full h-full font-roboto"
    >
      <motion.div
        className="relative md:absolute md:top-0 xl:left-32 w-max z-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1},
          hidden: { opacity: 0},
        }}
      >
        <h1 className="font-bold md:scale-x-[-1] text-massive text-blue-gray">
          03.
        </h1>
      </motion.div>

      <section className="relative w-full flex flex-col gap-20 px-4 sm:px-40 xl:px-80">
        <motion.div
          className="relative flex flex-col md:flex-row items-center justify-end gap-10 font-bold z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
        >
          <h2>Some projects I've worked on.</h2>
          <div className="w-3/4 md:w-1/3 h-1 bg-blue-gray"></div>
        </motion.div>

        <div className="flex flex-col gap-10">
          {data.allMarkdownRemark.edges.map((project, index) => (
            <motion.div
            key={project.node.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
            >
              <ProjectLarge
                type={index % 2 === 0 ? "right" : "left"}
                topic={project.node.frontmatter.type}
                title={project.node.frontmatter.title}
                tags={project.node.frontmatter.tags}
                featuredImgFluid={project.node.frontmatter.image.childImageSharp.fluid}
              >
                {project.node.html}
              </ProjectLarge>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default ProjectsMain;
