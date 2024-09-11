import React from "react";
import "./ProjectContainer.scss";
import ProjectContainerBox from "./ProjectContainerBox/ProjectContainerBox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { myWorks } from "../../Data/MyWorks";

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
        top: "15px",
        left: "95%",
        zIndex: "10",
        rotate: "90deg",
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
        top: "15px",
        left: "90%",
        zIndex: "10",
        rotate: "90deg",
      }}
      onClick={onClick}
    ></div>
  );
}

const ProjectContainer = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1600,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <SampleNextArrow className="next-button" />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="project-container">
      {/* topic */}
      <div className="w-[100%] text-center mb-2">
        <h1 className="text-[35px] font-[700] tracking-[1px] text-[#00f7ff]">
          My Works
        </h1>
      </div>
      {/* content section */}
      <div className="w-[85%] md:w-[90%] h-[100%]  mx-auto">
        {/* box */}
        <Slider {...settings}>
          {myWorks.map((work) => {
            return (
              <ProjectContainerBox
                key={work.id}
                number={work.number}
                title={work.title}
                languages={work.languages}
                img={work.img}
                techniques={work.techniques}
                githubLink={work.githubLink}
                figmaLink={work.figmaLink}
                liveViewLink={work.liveViewLink}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectContainer;
