import { motion } from "framer-motion";
import React from "react";

const Education = () => {
  return (
    <div className="border-b border-natural-900 pb-4">
      {/* topic */}
      <div className="w-[100%] text-center mb-10">
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

      <div>
        {/* use map method array */}
        <div className="mb-8 flex flex-wrap md:justify-center ">
          {/* left year */}
          <div className="w-full md:w-1/4">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="mb-2 text-sm"
            >
              {" "}
              2000
            </motion.p>
          </div>

          {/* right detail */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xl md:w3/4"
          >
            <h6 className="mb-2 font-semiblod">
              Lorem ipsum dolor sit amet. - asdfg
            </h6>
            <p className="text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              eveniet voluptates temporibus ea vitae? Commodi recusandae
              assumenda doloremque aliquid quis iure tenetur ipsa ab nesciunt.
              Sint minima quas ratione neque optio, est perspiciatis doloribus
              porro consequatur repellendus, ducimus qui!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
