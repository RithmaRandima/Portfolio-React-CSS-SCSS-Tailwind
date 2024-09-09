import { motion } from "framer-motion";
import React from "react";
import EducationBox from "./EducationBox/EducationBox";

const Education = (props) => {
  return (
    <div className="border-b border-natural-900 pb-4 pt-[40px]">
      {/* topic */}
      <div className="w-[100%] text-center mb-20">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-[45px] font-[700] tracking-[2px] text-[#00f7ff]"
        >
          My Education{" "}
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem?
        </motion.p>
      </div>

      <div className=" mx-auto w-[90%] md:w-[100%]">
        {/* use map method array */}
        <EducationBox />
        <EducationBox />
      </div>
    </div>
  );
};

export default Education;
