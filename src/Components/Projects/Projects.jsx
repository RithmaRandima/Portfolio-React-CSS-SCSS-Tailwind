import { useRef } from "react";
import "./Projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { myWorks } from "../../Data/MyWorks";
import ProjectlinkBox from "../ProjectContainer/ProjectlinkBox/ProjectlinkBox";
import { IoLogoGithub } from "react-icons/io";
import { BiLogoFigma } from "react-icons/bi";
import { VscRunAll } from "react-icons/vsc";

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-600, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer relative" style={{ y }}>
            <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[300px] md:text-[380px] font-[700] z-[-1] text-[rgba(255,255,255,0.03)] ">
              {item.number}
            </h1>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div className="flex items-center w-[100%]  gap-6 py-1 justify-end">
              <a href={item.githubLink} target="_blank" rel="noreferrer">
                <ProjectlinkBox title="GitHub" icon={<IoLogoGithub />} />
              </a>

              <a href={item.figmaLink} target="_blank" rel="noreferrer">
                <ProjectlinkBox title="Figma" icon={<BiLogoFigma />} />
              </a>

              <a href={item.liveViewLink} target="_blank" rel="noreferrer">
                <ProjectlinkBox icon={<VscRunAll />} title="View " />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {myWorks.map((item) => {
        if (item.id < 6) {
          return <Single item={item} key={item.id} />;
        }
      })}

      <Link
        to="/works"
        className="block mx-auto"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <button className="bg-white mx-auto text-[13px]  uppercase px-3 py-2 text-black font-[700] tracking-[2px] cursor-pointer hover:bg-[#00f7ff] hover:scale-90 duration-300">
          show more
        </button>
      </Link>
    </div>
  );
};

export default Projects;
