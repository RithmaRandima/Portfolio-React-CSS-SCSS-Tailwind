import React from "react";
import "./ServiceBox.scss";
import { FaHtml5, FaLongArrowAltRight } from "react-icons/fa";
import img1 from "../../../Asset/service-4.png";
import { PiArrowCircleUpRightFill } from "react-icons/pi";

const ServicesBox = (props) => {
  return (
    <div className="serviceBox">
      {/*logo  */}
      <h1 className="text-[55px] text-[#00f7ff]">
        {props.icom}
        <FaHtml5 />
      </h1>
      {/* text-section */}
      <div className="text-section">
        <h1 className="service-title text-[25px] font-[700] capitalize mb-[7px]">
          {props.title}Web Development
        </h1>
        <p className="font-[300] text-[13px] tracking-[1px] text-gray-400 mb-[7px]">
          With a strong foundation in web development, I specialize in creating
          dynamic, responsive, and visually appealing websites using the latest
          technologies like HTML, CSS, React, and Next.js. development
        </p>
        <div className="mt-[20px] rounded-[30px] py-1 px-3 flex items-center gap-[5px] bg-[#00f7ff] w-[110px] text-black hover:bg-black hover:text-[#00f7ff] hover:scale-95">
          <p className="text-[14px] font-[500]">see more</p>
          <FaLongArrowAltRight />
        </div>
      </div>

      <div className="popup-box">
        <img src={img1} alt="" />
        {/* <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          aliquam impedit inventore labore, modi beatae quam laboriosam est
          sapiente deserunt dolorem, blanditiis illum optio animi corrupti. Ut
          eius neque at?
        </p> */}
      </div>
    </div>
  );
};

export default ServicesBox;
