import { motion } from "framer-motion";
import React from "react";
import EducationBox from "./EducationBox/EducationBox";
import { myEducation } from "../../Data/MyEducation";

const Education = (props) => {
  return (
    <div className="border-b border-natural-900 pb-4 pt-[40px]">
      {/* topic */}
      <div className="w-[100%] text-center mb-12">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-[35px] md:text-[43px] font-[700] tracking-[2px] text-[#00f7ff] mb-2"
        >
          My Education{" "}
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[16px] tracking-[2px]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem?
        </motion.p>
      </div>

      <div className=" mx-auto w-[90%] md:w-[100%]">
        {/* use map method array */}
        {myEducation.map((education) => {
          return (
            <EducationBox
              key={education.id}
              year={education.year}
              title={education.title}
              place={education.place}
              status={education.status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Education;
