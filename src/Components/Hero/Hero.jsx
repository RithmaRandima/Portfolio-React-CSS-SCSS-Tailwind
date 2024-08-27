import { ReactTyped } from "react-typed";
import "./hero.scss";
import { motion } from "framer-motion";
import heroImg from "../../Asset/Untitled-1.png";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h3 variants={textVariants}>
            software engineer undergraduate
          </motion.h3>
          <motion.h2 variants={textVariants} className="greeting-text">
            Hi I'm
          </motion.h2>
          <motion.h1 variants={textVariants}>Rithma Randima</motion.h1>

          <motion.h2 variants={textVariants} className="looped-text">
            <ReactTyped
              strings={[
                "Front-End Developer",
                "Web Designer",
                "UI/UX Developer",
                "Web Developer",
              ]}
              typeSpeed={200}
              loop
            />
          </motion.h2>

          <p>
            I am Hasitha Dilshan, a dedicated software engineering undergraduate
            currently completing my Higher National Diploma (HND) in Computing
            at IDM Nations Campus. With a robust foundation in web design,
            UI/UX, and frontend development, I have honed my skills in creating
            visually appealing and user-friendly interfaces.
          </p>

          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            className="scroll-button"
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
