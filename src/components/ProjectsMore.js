import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ProjectSmall from "./ProjectSmall";

function ProjectsMore(props) {
  const data = useStaticQuery(
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
              timeToRead
              excerpt
              html
              id
            }
          }
        }
      }
    `
  );

  return (
    <section className="relative w-full h-full font-roboto text-white  px-4 sm:px-20 lg:px-40 xl:px-80 md:py-10">
      <div className="flex items-center justify-between md:my-20">
        <h1>Other Noteworthy Works</h1>
        <div className="w-40 h-1 bg-blue-gray"></div>
      </div>

      <div className="w-full h-full inline-flex flex-wrap justify-center md:justify-between gap-10 md:gap-2">
        {data.allMarkdownRemark.edges.map((project) => (
          <ProjectSmall
            key={project.node.id}
            title={project.node.frontmatter.title}
            tags={project.node.frontmatter.tags}
          >{project.node.excerpt}</ProjectSmall>
        ))}
      </div>
    </section>
  );
}

export default ProjectsMore;
