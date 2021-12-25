import React from "react";
import ProjectSmall from "./ProjectSmall";

function ProjectsMore(props) {
    const data = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 3, name: "Jane Doe" },
      ];
  return (
    <section className="relative w-full h-full font-roboto text-white ">
      <div>
        <h1>Other Noteworthy Works</h1>
      </div>

      <div className="w-full h-96 flex flex-wrap justify-between gap-2 px-4 sm:px-20 lg:px-40 xl:px-80">
        {data.map((project) => (
          <ProjectSmall />
        ))}
        <ProjectSmall />
      </div>
    </section>
  );
}

export default ProjectsMore;
