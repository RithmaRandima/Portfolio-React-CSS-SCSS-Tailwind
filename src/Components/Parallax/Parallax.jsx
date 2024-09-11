import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroBottom from "../HeroBottom/HeroBottom";
import img from "../../Asset/planets.png";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["100%", "-320%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const planetBg = useTransform(scrollYProgress, [0, 1], ["-20%", "100%"]);

  return (
    <div ref={ref} className="h-[100%] md:h-[100vh]">
      <HeroBottom />

      <div
        className="parallax"
        // ref={ref}
        style={{
          background: "linear-gradient(180deg, #111132, #0c0c1d)",
        }}
      >
        {/* <img src={} alt="" /> */}
        <motion.h1 style={{ y: yText }}>
          {type === "services" ? "What We Do?" : "I'm Ready to Work With You "}
        </motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div
          className="planets"
          style={{
            y: planetBg,
            backgroundImage: `url(${img})`,
          }}
        ></motion.div>
        <motion.div style={{ x: yBg }} className="stars"></motion.div>
      </div>
    </div>
  );
};

export default Parallax;
