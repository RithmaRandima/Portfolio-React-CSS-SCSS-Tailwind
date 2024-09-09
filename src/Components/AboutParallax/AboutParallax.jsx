import { useRef } from "react";
import "./AboutParallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroBottom from "../HeroBottom/HeroBottom";
import img from "../../Asset/planets.png";

const AboutParallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [1, 0], ["0%", "-250%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div
      className="about-parallax"
      // ref={ref}
      style={{
        background: "linear-gradient(180deg, #111132, #0c0c1d)",
      }}
    >
      {/* <img src={} alt="" /> */}
      <motion.h1 style={{ y: yText }}>I'm Ready to Work With You</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default AboutParallax;
