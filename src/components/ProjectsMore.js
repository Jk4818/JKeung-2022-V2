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
    <section className="relative w-full h-full font-roboto text-white ">
      <div>
        <h1>Other Noteworthy Works</h1>
      </div>

      <div className="w-full h-full flex flex-wrap justify-center md:justify-between gap-10 md:gap-2 px-4 sm:px-20 lg:px-40 xl:px-80">
        {data.allMarkdownRemark.edges.map((project) => (
          <ProjectSmall
            key={project.node.id}
            title={project.node.frontmatter.title}
            tags={project.node.frontmatter.tags}
          >{project.node.html}</ProjectSmall>
        ))}
      </div>
    </section>
  );
}

export default ProjectsMore;
