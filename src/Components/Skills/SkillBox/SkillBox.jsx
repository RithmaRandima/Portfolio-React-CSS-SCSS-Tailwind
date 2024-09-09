import React from "react";
import "./SkillBox.css";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { scale: 1 },
  animate: {
    scale: [0.97, 1.09],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const SkillBox = (props) => {
  return (
    <div className="skill-box-container relative">
      <motion.div
        variants={iconVariants(props.duration)}
        initial="initial"
        animate="animate"
        className="skill-box bg-re400 w-[70px] h-[70px] flex items-center justify-center rounded-[17px]  cursor-pointer text-[#00f7ff] overflow-hidden duration-300 border-2 border-[#00f7ff35] hover:border-[rgba(0, 247, 255, 0.495)]"
        style={{ color: props.color }}
      >
        <h1 className="box-icon text-[35px] duration-500 ">{props.icon}</h1>
      </motion.div>
      <div className="box-title absolute text-[10px] top-[-15px] right-0  bg-[#ffffff0b] text-[#00f7ff] font-[700] tracking-[1px] px-2 py-1">
        {props.title}
      </div>
    </div>
  );
};

export default SkillBox;
