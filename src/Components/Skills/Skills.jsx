import React from "react";
import SkillBox from "./SkillBox/SkillBox";
import {
  FaCss3Alt,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
  FaUserCog,
} from "react-icons/fa";
import { RiBootstrapFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaHtml5, FaUsersLine, FaVuejs } from "react-icons/fa6";
import { BsFiletypeScss } from "react-icons/bs";
import {
  SiAdobephotoshop,
  SiIntellijidea,
  SiMysql,
  SiPhp,
  SiPycharm,
  SiSublimetext,
  SiVisualstudio,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma } from "react-icons/io5";
import { DiPython } from "react-icons/di";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SoftSkillBox from "./SkillBox/SoftSkillBox";
import { MdSyncProblem } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { PiQuestionFill, PiUserGearFill } from "react-icons/pi";
import { HiUserGroup } from "react-icons/hi";
import { motion } from "framer-motion";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(0, 247, 255, 0.527)",
        transform: "scale(1.2)",
        position: "absolute",
        borderRadius: "50%",
        paddingTop: "1px",
        paddingRight: "1px",
        top: "10px",
        left: "10%",
        zIndex: "10",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(0, 247, 255, 0.527)",
        transform: "scale(1.2)",
        position: "absolute",
        borderRadius: "50%",
        paddingTop: "1px",
        paddingLeft: "0.2px",
        top: "10px",
        left: "5%",
        zIndex: "10",
      }}
      onClick={onClick}
    ></div>
  );
}

const Skills = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500000,
    speed: 1600,
    nextArrow: <SampleNextArrow className="next-button" />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-[100%] h-[100%]  flex flex-col items-center pt-10 pb-2 md:pb-5 ">
      {/* topic container */}
      <div className="w-[90%] md:w-[50%] text-center mb-10">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-[35px] md:text-[45px] font-[700] tracking-[2px] text-[#00f7ff] mb-3"
        >
          My Skills{" "}
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[16px] tracking-[2px]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem?
        </motion.p>
      </div>

      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.3 }}
        transition={{ duration: 0.5 }}
        className="w-[95%] md:w-[100%] mx-auto h-[100%]"
      >
        <Slider {...settings}>
          {/* skill 01 */}
          <div className="w-[100%] h-[100%]">
            <div className="h-[100%] w-[100%] grid grid-cols-1 md:grid-cols-2  md:px-5 mt-10">
              {/* left */}
              <div className="w-[100%] h-[100%] py-5 px-2 md:px-10">
                <h1 className="text-[white] text-[25px] md:text-[30px] font-[700] mb-[20px] hover:text-[#00f7ff] tracking-[2px]">
                  Technical Skills
                </h1>
                <h2 className="tracking-[1px]  text-neutral-400 leading-[30px] text-justify text-[16px] md:text-[17px]">
                  Under my skills, I have developed a diverse and versatile set
                  of technical and creative abilities that allow me to tackle a
                  wide range of challenges in software development, web design,
                  and UI/UX design. My skillset is built on a solid foundation
                  of programming, design, and problem-solving expertise.
                </h2>
              </div>

              {/* right */}
              <div className="w-[100%]  h-[100%] ">
                {/* content box 01 */}
                <div className="mb-[30px]">
                  <h1 className=" text-[22px] md:text-[23px] font-[700] mb-5 tracking-[2px] text-[#fff]">
                    Languages
                  </h1>
                  <div className="w-[100%] h-[100%]  grid grid-cols-5 md:grid-cols-6 gap-2 py-2 px-1 md:px-0">
                    <SkillBox icon={<FaReact />} title="React" duration={2.5} />
                    <SkillBox
                      icon={<RiNextjsFill />}
                      title="NextJs"
                      duration={4}
                    />
                    <SkillBox icon={<FaHtml5 />} title="HTML" duration={1} />
                    <SkillBox icon={<FaCss3Alt />} title="CSS" duration={3} />
                    <SkillBox
                      icon={<BiLogoTailwindCss />}
                      title="Tailwind"
                      duration={6}
                    />
                    <SkillBox
                      icon={<FaJs />}
                      title="JavaScript"
                      duration={2.5}
                    />
                    <SkillBox icon={<FaVuejs />} title="VueJs" duration={3} />
                    <SkillBox
                      icon={<RiBootstrapFill />}
                      title="Bootstrap"
                      duration={1}
                    />
                    <SkillBox
                      icon={<BsFiletypeScss />}
                      title="Scss"
                      duration={2.5}
                    />
                    <SkillBox icon={<SiPhp />} title="Php" duration={5} />
                    <SkillBox icon={<FaJava />} title="Java" duration={3} />
                    <SkillBox icon={<FaNodeJs />} title="NodeJs" duration={6} />
                    <SkillBox icon={<SiMysql />} title="Mysql" duration={1} />
                    <SkillBox
                      icon={<DiPython />}
                      title="Python"
                      duration={4.5}
                    />
                  </div>
                </div>

                {/* content box 02 */}
                <div>
                  <h1 className="text-[21px] md:text-[23px] font-[700] mb-5 tracking-[2px] text-[#fff]">
                    Design And Editor Tools
                  </h1>
                  <div className="w-[100%] h-[100%]  grid grid-cols-5 md:grid-cols-6 gap-2 py-2 px-1 md:px-0">
                    <SkillBox
                      icon={<VscVscode />}
                      duration={5}
                      title="VS Code"
                    />
                    <SkillBox
                      icon={<SiIntellijidea />}
                      duration={1}
                      title="Intelij IDEA"
                    />
                    <SkillBox
                      icon={<SiSublimetext />}
                      duration={3}
                      title="Sublime Text"
                    />
                    <SkillBox
                      icon={<SiVisualstudio />}
                      duration={2.5}
                      title="Visual Studio"
                    />
                    <SkillBox
                      icon={<SiPycharm />}
                      duration={5}
                      title="Pycharm"
                    />
                    <SkillBox
                      icon={<IoLogoFigma />}
                      duration={1}
                      title="Figma"
                    />
                    <SkillBox
                      icon={<SiAdobephotoshop />}
                      duration={3.2}
                      title="Photo Shop"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* skill 02 */}
          <div className="w-[100%] h-[100%] ">
            <div className="h-[100%] w-[100%] grid grid-cols-1 md:grid-cols-2  px-5 mt-10">
              {/* left */}
              <div className="w-[100%] h-[100%] py-5 md:px-10">
                <h1 className="text-[white] text-[25px] md:text-[30px]  font-[700] mb-[20px] hover:text-[#00f7ff] tracking-[2px]">
                  Soft Skills
                </h1>
                <h2 className="tracking-[1px] text-neutral-400 leading-[30px] text-justify text-[16px] md:text-[17px]">
                  I believe that technical expertise alone does not define a
                  successful professional. My soft skills complement my
                  technical abilities and play a crucial role in my overall
                  effectiveness. I pride myself on strong communication,
                  adaptability, and problem-solving skills, which help me work
                  efficiently in diverse team environments and tackle challenges
                  creatively. My ability to collaborate, stay organized, and
                  manage time effectively ensures that I can contribute
                  positively to any project and drive it to successful
                  completion.
                </h2>
              </div>

              {/* right */}
              <div className="w-[100%]  h-[100%] ">
                {/* content box 01 */}
                <div className="mb-[50px]">
                  <div className="w-[100%] h-[100%]  gap-2 py-2 pt-7">
                    <SoftSkillBox
                      icon={<IoIosTime />}
                      title="time management"
                      duration={2}
                    />
                    <SoftSkillBox
                      icon={<FaUsersLine />}
                      title="Communication Skill"
                      duration={4}
                    />

                    <SoftSkillBox
                      icon={<MdSyncProblem />}
                      title="Problem Solving"
                      duration={1}
                    />

                    <SoftSkillBox
                      icon={<FaUserCog />}
                      title="Self Motivation"
                      duration={5}
                    />
                    <SoftSkillBox
                      icon={<PiUserGearFill />}
                      title="Critical Thinking"
                      duration={2}
                    />
                    <SoftSkillBox
                      icon={<HiUserGroup />}
                      title="Team Work"
                      duration={3.2}
                    />

                    <SoftSkillBox
                      icon={<PiQuestionFill />}
                      title="Resourcefulness"
                      duration={5.5}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </motion.div>
    </div>
  );
};

export default Skills;
