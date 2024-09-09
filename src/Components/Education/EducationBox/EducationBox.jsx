import { motion } from "framer-motion";
import React from "react";
import "./EducationBox.css";

const EducationBox = (props) => {
  return (
    <div className="mb-10 flex flex-wrap md:justify-center  w-full">
      {/* left year */}
      <div className="w-full md:w-1/4 md:flex md:justify-center md:items-center">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className=" text-[22px] font-[900] tracking-[2px] text-[#00f7ff] mb-[10px] md:mb-0"
        >
          {props.year}
        </motion.p>
      </div>

      {/* right detail */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="education-box-right w-full max-w-xl md:w3/4  rounded-2xl px-10 py-3 "
      >
        <h6 className="font-bold text-[20px] uppercase">{props.title}</h6>
        <h6 className="mb-5 font-[100] text-[15px]">{props.place}</h6>
        <h6 className="mb-2 font-bold text-[10px] tracking-[1px] uppercase text-[#00f7ff]">
          {props.status}
        </h6>
      </motion.div>
    </div>
  );
};

export default EducationBox;
