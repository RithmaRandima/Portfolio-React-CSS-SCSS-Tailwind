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
        <motion.h1 style={{ y: yAboutTitleText }}>
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
          <div className="w-[160px] h-[160px] md:w-[450px] md:h-[450px] about-bottom-img-container">
            <img src={img} alt="" className="w-[100%] h-[100%] object-cover " />
          </div>
        </div>

        {/* details */}
        <div className="w-[100%] h-[100%] ">
          <div className="w-[95%] md:w-[100%] mx-auto h-[100%] py-2">
            <Slider {...settings}>
              {/* Details 01 */}
              <div className="w-[100%] h-[100%] pt-16 px-5">
                <div className="h-[100%] w-[100%]  p-5 px-10 mt-6">
                  <h1 className="text-[white] text-[40px] font-[100] mb-[14px] hover:text-[#00f7ff]">
                    Who Am I?
                  </h1>

                  <p className="text-[17px] mb-[20px] text-gray-400 tracking-[1px] leading-[29px] text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur obcaecati explicabo iure quia beatae, sint
                    possimus ea, officia quibusdam voluptas ut quis ducimus
                    optio quae esse laborum exercitationem sed facere ad illum
                    eius! Architecto consequatur veritatis itaque facere? Qui,
                    quidem!
                  </p>

                  <p className="text-[17px] mb-[20px] text-gray-400 tracking-[1px] leading-[29px] text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur obcaecati explicabo iure quia beatae, sint
                    possimus ea, officia quibusdam voluptas ut quis ducimus
                    optio quae esse laborum exercitationem sed facere ad illum
                    eius! Architecto consequatur veritatis itaque facere? Qui,
                    quidem!
                  </p>
                </div>
              </div>
              {/* details 02 */}
              <div className="w-[100%] h-[100%] pt-12 px-5">
                <div className="h-[100%] w-[100%]  p-5 px-10 mt-10">
                  <h1 className="text-white text-[40px] font-[100] mb-[14px] hover:text-[#00f7ff]">
                    My Details
                  </h1>

                  <ul className="list-disc ml-12 mt-5">
                    <li className="text-[#00f7ff] text-[18px] mb-3">
                      <span className="text-gray-400 mr-2">Name</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        Rithma Randima
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-3">
                      <span className="text-gray-400 mr-2">Age</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        Rithma Randima
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-3">
                      <span className="text-gray-400 mr-2">Birthday</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        Rithma Randima
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-3">
                      <span className="text-gray-400 mr-2">Phone</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        Rithma Randima
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-3">
                      <span className="text-gray-400 mr-2">Email</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        Rithma Randima
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-3">
                      <span className="text-gray-400 mr-2">Address</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        Rithma Randima
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-3">
                      <span className="text-gray-400 mr-2">City</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        Rithma Randima
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-3">
                      <span className="text-gray-400 mr-2">Nationality</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        Rithma Randima
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-3">
                      <span className="text-gray-400 mr-2">Languages</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        English, Sinhala
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-3">
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
