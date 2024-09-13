import React from "react";
import ProjectlinkBox from "../ProjectlinkBox/ProjectlinkBox";
import { BiLogoFigma } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { VscRunAll } from "react-icons/vsc";

const ProjectContainerBox = (props) => {
  return (
    <div className="flex flex-col md:flex-row gap-2   h-[98vh] md:h-[90vh] pt-[20px] ">
      {/* img */}
      <div className="w-[100%] h-[260px] p-5 px-7  md:h-[450px]  flex items-center justify-center ">
        <img
          // src={img1}
          src={props.img}
          className="w-[100%] h-[100%] object-cover"
          alt=""
        />
      </div>
      {/* info */}
      <div className="relative w-[100%] flex flex-col p-[1px] md:p-3 justify-center ">
        <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[300px] md:text-[380px] font-[700] z-[-1] text-[#ffffff0f] ">
          {props.number}
        </h1>
        <h1 className="text-[24px] md:text-[32px] font-[700] capitalize mb-4 md:mb-7 text-white">
          {props.title}
        </h1>
        <p className="text-gray-400 text-[14px] md:text-[16px] leading-[25px] tracking-[1px] mb-7 ">
          {props.description}
        </p>

        {/* features */}
        <div className="mb-4 md:mb-7">
          <p className="font-[700] text-[15px] md:text-[16px]">
            Used Features :
          </p>
          {props.techniques.map((tech) => {
            return (
              <span className="cursor-pointer mr-2 rounded  text-[12px]  md:text-[13px] font-[400] tracking-[1px] text-[#00f7ffa7] w-fit">
                {tech}
              </span>
            );
          })}
        </div>

        {/* languages section */}
        <div className="flex w-[100%] items-center gap-2 py-1 mb-4 md:mb-6">
          {props.languages.map((language) => {
            return (
              <span className="cursor-pointer mr-2 rounded bg-neutral-900 px-2 py-1 text-[14px] font-[700] tracking-[1px] text-[#00f7ff] w-fit">
                {language}
              </span>
            );
          })}
        </div>

        {/* event section */}
        <div className="flex items-center w-[100%]  gap-6 py-1 justify-end">
          <a
            // href="https://github.com/RithmaRandima/Hycade-Fashion-App-React-Tailwind-CSS"
            href={props.githubLink}
            target="_blank"
            rel="noreferrer"
          >
            <ProjectlinkBox title="GitHub" icon={<IoLogoGithub />} />
          </a>

          <a href={props.figmaLink} target="_blank" rel="noreferrer">
            <ProjectlinkBox title="Figma" icon={<BiLogoFigma />} />
          </a>

          <a href={props.liveViewLink} target="_blank" rel="noreferrer">
            <ProjectlinkBox icon={<VscRunAll />} title="View " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainerBox;
