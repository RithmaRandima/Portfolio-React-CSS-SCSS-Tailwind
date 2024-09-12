import { useRef } from "react";
import "./HeroAbout.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import img from "../../Asset/Untitled-2.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ReactTyped } from "react-typed";

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
        top: "70px",
        left: "85%",
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
        paddingRight: "1px",
        top: "70px",
        left: "75%",
        zIndex: "10",
      }}
      onClick={onClick}
    ></div>
  );
}

const HeroAbout = ({ type }) => {
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

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yAboutTitleText = useTransform(
    scrollYProgress,
    [0, 1],
    ["-150%", "1020%"]
  );

  const yAboutSubTitleText = useTransform(
    scrollYProgress,
    [0, 1],
    ["-370%", "2020%"]
  );

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

  return (
    <div
      className="hero-about-container"
      style={{
        background: "linear-gradient(180deg, #0c0c1d, #030308)",
      }}
    >
      {/* top */}
      <div className="hero-about">
        <motion.h1
          style={{ y: yAboutTitleText }}
          className="mt-[-100px] md:mt-[0px]"
        >
          Hi I'm <span>Rithma</span>{" "}
        </motion.h1>
        <motion.h2 style={{ y: yAboutSubTitleText }}>
          <ReactTyped strings={["The Web Developer"]} typeSpeed={500} loop />
        </motion.h2>

        <motion.div className="user"></motion.div>

        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Writer Content Creator Influencer
        </motion.div>
      </div>
      {/* bottom */}
      <div className="about-bottom-info-section w-[100%] h-[100%] grid grid-cols-1 md:grid-cols-2">
        {/* img */}
        <div>
          <div className="w-[180px] h-[180px] md:w-[450px] md:h-[450px] about-bottom-img-container">
            <img src={img} alt="" className="w-[100%] h-[100%] object-cover " />
          </div>
        </div>

        {/* details */}
        <div className="w-[100%] h-[100%] ">
          <div className=" w-[95%] md:w-[100%] mx-auto h-[100%] py-2">
            <Slider {...settings}>
              {/* Details 01 */}
              <div className="w-[100%] h-[100%] md:pt-10 px-5">
                <div className="h-[100%] w-[100%]  p-5 px-1 md:px-6 mt-6">
                  <h1 className="text-[white] text-[40px] font-[100] mb-[14px] hover:text-[#00f7ff]">
                    Who Am I?
                  </h1>

                  <p className="text-[15px] mb-[20px] text-gray-400 tracking-[1px] leading-[29px] text-justify">
                    Welcome! I’m a dedicated self-driven and hardworking
                    individual with a deep passion for technology and
                    innovation. With a strong foundation in HTML, CSS
                    JavaScript, React.js, Next.js, Node.js, Python, and Java, I
                    specialize in developing scalable, user-friendly software
                    solutions. My journey in tech began with my{" "}
                    <span className="text-[#00f7ff] font-[600]">
                      HIGHER NATIONAL DIPLOMA IN COMPUTING{" "}
                    </span>{" "}
                    , and since then, I’ve worked on a variety of projects
                    ranging from dynamic web applications to complex data
                    systems.
                  </p>

                  <p className="hidden md:block text-[15px] mb-[20px] text-gray-400 tracking-[1px] leading-[29px] text-justify">
                    I thrive in collaborative environments and enjoy tackling
                    complex problems with creative, efficient solutions. My
                    commitment to continuous learning drives me to stay updated
                    with the latest industry trends and advancements. Through
                    this portfolio, I aim to showcase my technical skills,
                    project experience, and enthusiasm for software engineering.
                    Let’s connect and explore how we can innovate together!
                  </p>
                </div>
              </div>
              {/* details 02 */}
              <div className="w-[100%] h-[100%] pt-5 md:pt-12 md:px-5 px-3 ">
                <div className="h-[100%] w-[100%]  p-5 px-10 mt-10">
                  <h1 className="text-white text-[40px] font-[100] mb-[14px] hover:text-[#00f7ff]">
                    My Details
                  </h1>

                  <ul className="list-disc md:ml-12 mt-5">
                    <li className="text-[#00f7ff] text-[18px] mb-4">
                      <span className="text-gray-400 mr-2">Name</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        Rithma Randima
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-4">
                      <span className="text-gray-400 mr-2">Age</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        24 years Old
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-4">
                      <span className="text-gray-400 mr-2">Birthday</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        17 - 03 - 2000
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-4">
                      <span className="text-gray-400 mr-2">Phone</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        (+94) 77 022 0407
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-4">
                      <span className="text-gray-400 mr-2">Email</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        rithma.r.nandasiri@gmail.com
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-4">
                      <span className="text-gray-400 mr-2">Address</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        Rithma Randima
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-4">
                      <span className="text-gray-400 mr-2">City</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        Galle
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-4">
                      <span className="text-gray-400 mr-2">Nationality</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        Sri Lankan
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-4">
                      <span className="text-gray-400 mr-2">Languages</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        English, Sinhala
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-4">
                      <span className="text-gray-400 mr-2">Experience</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        New to this field
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
