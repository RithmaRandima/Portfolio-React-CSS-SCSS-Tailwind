import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import ServicesBox from "./ServicesBox/ServicesBox";
import { myServices } from "../../Data/MyServices";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  // const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services pb-[20px] "
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      {/* top title */}
      <div className="services-top-text pt-[40px] md:pt-[50px]">
        <h1 className="text-[35px] md:text-[45px] font-[700] tracking-[2px] text-[#00f7ff] mx-auto mb-[10px]">
          My Services
        </h1>

        <motion.div className="titleContainer" variants={variants}>
          <div className="title-top">
            <hr />
            <h1>
              <motion.b>What I Do</motion.b>{" "}
            </h1>
          </div>
        </motion.div>

        <motion.div className="textContainer" variants={variants}>
          <p>
            I focus on Creating Modern <br />
            Real World Application Designs. <br /> With New Technologies
          </p>
          <hr />
        </motion.div>
      </div>

      {/* bottom */}
      <motion.div className="listContainer" variants={variants}>
        {myServices.map((service) => {
          return (
            <ServicesBox
              key={service.id}
              title={service.title}
              description={service.description}
              img={service.img}
              icon={service.icon}
              bgcolor={service.bgcolor}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Services;
