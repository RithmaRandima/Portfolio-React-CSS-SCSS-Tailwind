import React from "react";
import "./SkillBox.css";
import { BiSolidUserCheck } from "react-icons/bi";

const SoftSkillBox = (props) => {
  return (
    <div
      className="skill-box soft-skill-box pl-10 bg-re400 w-[70%] h-[60px] flex items-center gap-5 rounded-[17px]  cursor-pointer text-[#00f7ff] hover:text-[#000] overflow-hidden duration-300 border-2 border-[#00f7ff20] hover:border-[rgba(0, 247, 255, 0.495)]"
      title={props.title}
    >
      <h1 className="box-icon soft-skill-icon text-[27px] duration-500 ">
        {props.icon}
      </h1>
      <h1 className="box-icon text-[16px] duration-500 capitalize tracking-[2px] font-[600]">
        {props.title}
      </h1>
    </div>
  );
};

export default SoftSkillBox;
