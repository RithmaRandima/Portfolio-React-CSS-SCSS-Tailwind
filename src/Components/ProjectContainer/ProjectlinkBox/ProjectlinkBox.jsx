import React from "react";
import "./ProjectLinkBox.css";

const ProjectlinkBox = (props) => {
  return (
    <div className="link-box relative  cursor-pointer">
      <h1 className="text-[30px] hover:scale-110 hover:text-[#00f7ff] duration-300">
        {props.icon}
      </h1>
      <div className="link-box-icon-text absolute top-[-20px] text-[11px] font-[700] text-[#00f7ff] tracking-[1px] left-[50%] translate-x-[-50%]">
        {props.title}
      </div>
    </div>
  );
};

export default ProjectlinkBox;
