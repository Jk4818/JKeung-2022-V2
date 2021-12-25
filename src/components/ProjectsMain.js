import React from "react";
import ProjectLarge from "./ProjectLarge";

function ProjectsMain(props) {
  return (
    <section id="main_projects" className="relative w-full h-full font-roboto">
      <div className="absolute md:top-24 xl:left-32 w-max z-0">
        <h1 className="font-bold md:scale-x-[-1] text-massive text-blue-gray">
          03.
        </h1>

      </div>

      <section className="relative w-full flex flex-col gap-20 px-4 sm:px-20 lg:px-40 xl:px-80">

        <div className="relative flex justify-center z-10">
          <h2>Some projects I've worked on</h2>
        </div>

          <ProjectLarge type="right" > 
              Lorem
          </ProjectLarge>

          <ProjectLarge type="left" > 
              Lorem asddddddddddddd asdas asdas as das das d
          </ProjectLarge>

      </section>
    </section>
  );
}

export default ProjectsMain;
