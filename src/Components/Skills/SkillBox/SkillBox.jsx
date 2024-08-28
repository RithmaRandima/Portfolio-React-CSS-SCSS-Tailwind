import React from "react";
import "./SkillBox.css";

const SkillBox = (props) => {
  return (
    <div
      className="skill-box bg-re400 w-[75px] h-[75px] flex items-center justify-center rounded-[17px]  cursor-pointer text-[#00f7ff] hover:text-[#000] overflow-hidden duration-300 border-2 border-[#00f7ff20] hover:border-[rgba(0, 247, 255, 0.495)]"
      title={props.title}
    >
      <h1 className="box-icon text-[35px] duration-500 ">{props.icon}</h1>
    </div>
  );
};

export default SkillBox;
