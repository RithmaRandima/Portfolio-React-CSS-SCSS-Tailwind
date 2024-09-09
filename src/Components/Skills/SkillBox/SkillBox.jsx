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
    <motion.div
      variants={iconVariants(props.duration)}
      initial="initial"
      animate="animate"
      className="skill-box bg-re400 w-[70px] h-[70px] flex items-center justify-center rounded-[17px]  cursor-pointer text-[#00f7ff] overflow-hidden duration-300 border-2 border-[#00f7ff35] hover:border-[rgba(0, 247, 255, 0.495)]"
      title={props.title}
      style={{ color: props.color }}
    >
      <h1 className="box-icon text-[35px] duration-500 ">{props.icon}</h1>
    </motion.div>
  );
};

export default SkillBox;
