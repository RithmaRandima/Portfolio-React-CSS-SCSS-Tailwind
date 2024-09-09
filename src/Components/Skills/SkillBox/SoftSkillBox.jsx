import React from "react";
import "./SkillBox.css";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { x: -10 },
  animate: {
    x: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const SoftSkillBox = (props) => {
  return (
    <motion.div
      variants={iconVariants(props.duration)}
      initial="initial"
      animate="animate"
      className="skill-box soft-skill-box pl-10 bg-re400 w-[70%] h-[60px] flex items-center gap-5 rounded-[17px]  cursor-pointer text-[#00f7ff] hover:text-[#000] overflow-hidden duration-300 border-2 border-[#00f7ff20] hover:border-[rgba(0, 247, 255, 0.495)]"
      title={props.title}
      style={{ animationDelay: props.animationDelay }}
    >
      <h1 className="box-icon soft-skill-icon text-[27px] duration-500 ">
        {props.icon}
      </h1>
      <h1 className="box-icon text-[16px] duration-500 capitalize tracking-[2px] font-[600]">
        {props.title}
      </h1>
    </motion.div>
  );
};

export default SoftSkillBox;
