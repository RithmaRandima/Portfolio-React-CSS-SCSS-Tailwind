import { ReactTyped } from "react-typed";
import "./hero.scss";
import { motion } from "framer-motion";
import heroImg from "../../Asset/Hero_Img.png";
import { Link } from "react-router-dom";
import FileSaver from "file-saver";

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

const saveFile = () => {
  FileSaver.saveAs(
    process.env.PUBLIC_URL + "/resource/Rithma_Randima_CV.pdf",
    "Rithma_Randima_CV.pdf"
  );
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
          <motion.h3 variants={textVariants} className="hidden md:block">
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

          <p className="hidden md:block">
            I'm Rithma Randima, a devoted undergraduate studying software
            engineering. IDM Nations Campus is where I'm presently pursuing my
            Higher National Diploma (HND) in Computing. I've developed my
            ability to create attractive and easy to use interfaces by honing my
            skills in web design, UI/UX, and frontend development.
          </p>

          <p className="md:hidden block">
            I'm Rithma Randima, a devoted undergraduate studying software
            engineering. I've developed my ability to create attractive and easy
            to use interfaces by honing my skills in web design, UI/UX, and
            frontend development.
          </p>

          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              className="cursor-pointer bg-transparent text-white text-[13px]"
            >
              <Link to="/works"> See the Latest Works</Link>
            </motion.button>
            <motion.button
              variants={textVariants}
              className="bg-white text-black uppercase text-[12px]"
              onClick={saveFile}
            >
              Download CV
            </motion.button>
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
