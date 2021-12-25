import React from "react";
import ODDImage from "../images/odd.png";

function ProjectLarge({ type, children }) {
  return (
    <div className="grid grid-cols-10 font-bold font-roboto tracking-wide">
      <div
        className={`row-span-full ${
          type === "right" ? `col-start-1 col-span-4` : `col-span-4 col-end-11`
        } self-center relative`}
      >
        <div className="after:bg-gradient-to-tr after:from-pink-500 after:via-red-500 after:to-yellow-500 after:w-full after:h-full after:block after:absolute after:inset-0 after:opacity-70 after:backdrop">
            <img
              className="object-fit blur-sm"
              src={ODDImage}
              alt=""
            />
        </div>
      </div>
      <div
        className={`row-span-full h-full ${
          type === "left"
            ? `col-start-1 col-span-7`
            : `col-span-7 col-end-11 text-right`
        } relative self-center py-4 flex flex-col gap-4 z-10`}
      >
        <h2 className="text-sm text-blue-gray">Full Stack.</h2>
        <h1>Sound Store App</h1>
        <div
          className={`mt-6 w-full h-1/2 bg-dark-gray shadow-container ${
            type === "left" ? `text-right` : `text-left`
          }  items-center p-6 `}
        >
          <p className="mb-2 font-normal text-sm text-p-gray">{children}</p>
        </div>
        <ul className="font-roboto-mono text-blue-gray text-sm font-medium ">
          <li>React</li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectLarge;
