import React from "react";
import { FiExternalLink } from "react-icons/fi";
import RoundButton from './RoundButton';

function ProjectSmall({ children, title, tags, setShowModal, fullDesc}) {

  
  return (
    <div className="w-full h-max aspect-square flex flex-col gap-4 p-6 px-8 bg-dark-gray rounded-xl shadow-container hover:-translate-y-2 transition-all">
      <div className="flex justify-between">

        <button
            className=""
            type="button"
            onClick={() => setShowModal({title: title, tags: tags, fullDesc: fullDesc})}
          >
            <RoundButton>Learn More</RoundButton>
          </button>
        <FiExternalLink
          size="20"
          className="text-blue-gray hover:stroke-stone-200 transition ease-in-out duration-300"
        />
      </div>
      <h1 className="font-bold text-lg text-center">{title}</h1>
      <div className="text-lg sm:text-sm text-p-gray leading-relaxed">
        <div dangerouslySetInnerHTML={{ __html: children }}></div>
      </div>
      <ul className="font-roboto-mono text-xs text-blue-gray flex flex-wrap justify-start self-end mt-auto gap-2">
        {tags != null && tags.map((tag,index) => (
          <li
          key={index}>{tag}</li>
        ))}
      </ul>

    </div>
  );
}

export default ProjectSmall;
