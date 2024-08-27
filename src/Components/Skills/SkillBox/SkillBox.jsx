import React from "react";
import "./SkillBox.css";

const SkillBox = (props) => {
  return (
    <div
      className="skill-box bg-re400 w-[70px] h-[65px] flex items-center justify-center rounded-[17px]  cursor-pointer text-[#00f7ff] hover:text-[#000] overflow-hidden duration-300"
      title={props.title}
    >
      <h1 className="box-icon text-[45px] duration-500 ">{props.icon}</h1>
    </div>
  );
};

export default SkillBox;
