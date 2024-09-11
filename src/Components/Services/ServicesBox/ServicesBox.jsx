import React from "react";
import "./ServiceBox.scss";
import { FaLongArrowAltRight } from "react-icons/fa";

const ServicesBox = (props) => {
  return (
    <div className="serviceBox flex-col md:flex-row items-center justify-center w-[90%] md:w-[100%] mx-auto mb-[5px] md:mb-[25px] gap-[15px] md:gap-[30px]">
      {/*logo  */}
      <h1 className="text-[45px] md:text-[55px] text-[#00f7ff]">
        {props.icon}
      </h1>
      {/* text-section */}
      <div className="text-section text-center md:text-left">
        <h1 className="service-title text-[20px] md:text-[25px] font-[700] capitalize mb-[10px] tracking-[1px]">
          {props.title}
        </h1>
        <p className="hidden md:block font-[300] text-[14px] tracking-[1px] text-gray-400 mb-[7px]">
          {props.description}
        </p>
        <div className="mx-auto md:ml-[1px] mt-[20px] rounded-[30px] py-1 px-3 flex items-center gap-[5px] bg-[#00f7ff] w-[110px] text-black hover:bg-black hover:text-[#00f7ff] hover:scale-95">
          <p className="text-[15px] font-[500]">see more</p>
          <FaLongArrowAltRight />
        </div>
      </div>

      <div className="popup-box hidden md:flex">
        <img src={props.img} alt="" />
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
