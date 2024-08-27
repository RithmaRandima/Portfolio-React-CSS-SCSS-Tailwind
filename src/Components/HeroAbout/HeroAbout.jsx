import { useRef } from "react";
import "./HeroAbout.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import img from "../../Asset/Untitled-2.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
    autoplaySpeed: 5000,
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
    ["-200%", "320%"]
  );
  const yAboutSubTitleText = useTransform(
    scrollYProgress,
    [0, 1],
    ["-250%", "720%"]
  );

  return (
    <div
      className="hero-about-container"
      style={{
        background: "linear-gradient(180deg, #0c0c1d, #030308)",
      }}
    >
      {/* top */}
      <div className="hero-about">
        <motion.h1 style={{ y: yAboutTitleText }}>About Me</motion.h1>
        <motion.h2 style={{ y: yAboutSubTitleText }}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut numquam,
          quasi est ipsam consequuntur rem vero voluptatum omnis illo iste quae
          quaerat debitis saepe error?
        </motion.h2>
        <motion.div className="user"></motion.div>
      </div>
      {/* bottom */}
      <div className="about-bottom-info-section w-[100%] h-[100%] grid grid-cols-1 md:grid-cols-2">
        {/* img */}
        <div>
          <div className="w-[450px] h-[450px] bg-green-400 about-bottom-img-container">
            <img src={img} alt="" className="w-[100%] h-[100%] object-cover " />
          </div>
        </div>

        {/* details */}
        <div className="w-[100%] h-[100%] ">
          <div className="w-[95%] md:w-[100%] mx-auto h-[100%] py-2">
            <Slider {...settings}>
              {/* Details 01 */}
              <div className="w-[100%] h-[100%]">
                <div className="h-[100%] w-[100%]  p-5 px-10 mt-10">
                  <h1 className="text-[white] text-[34px] font-[700] mb-[14px] hover:text-[#00f7ff]">
                    My Details
                  </h1>

                  <p className="text-[17px] mb-[20px] text-gray-400 tracking-[1px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas facere rem autem?
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque dolore laborum veritatis perferendis officiis. Hic
                    quia nesciunt doloremque consequuntur provident possimus
                    quae dolore, velit quaerat? Nam dolorem ab temporibus
                    veritatis qui. Provident neque voluptate recusandae ipsum
                    obcaecati assumenda alias sed doloribus magni. Id corrupti
                    corporis sunt voluptates accusamus, reiciendis dolorem?
                  </p>
                </div>
              </div>
              {/* details 02 */}
              <div className="w-[100%] h-[100%]">
                <div className="h-[100%] w-[100%]  p-5 px-10 mt-10">
                  <h1 className="text-[white] text-[34px] font-[700] mb-[14px] hover:text-[#00f7ff]">
                    My Details
                  </h1>

                  <p className="text-[17px] mb-[20px] text-gray-400 tracking-[1px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas facere rem autem?
                  </p>

                  <ul className="list-disc ml-3">
                    <li className="text-[#00f7ff] text-[18px] mb-2">
                      <span className="text-gray-400 mr-2">Name</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        Rithma Randima
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-2">
                      <span className="text-gray-400 mr-2">Age</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        Rithma Randima
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-2">
                      <span className="text-gray-400 mr-2">Birthday</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        Rithma Randima
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-2">
                      <span className="text-gray-400 mr-2">Phone</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        Rithma Randima
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-2">
                      <span className="text-gray-400 mr-2">Email</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        Rithma Randima
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-2">
                      <span className="text-gray-400 mr-2">Address</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        Rithma Randima
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-2">
                      <span className="text-gray-400 mr-2">City</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        Rithma Randima
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-2">
                      <span className="text-gray-400 mr-2">Nationality</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        Rithma Randima
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-2">
                      <span className="text-gray-400 mr-2">Languages</span> -
                      <span className="text-white ml-2 font-[600] tracking-[1px]">
                        English, Sinhala
                      </span>
                    </li>

                    <li className="text-[#00f7ff] text-[18px] mb-2">
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
