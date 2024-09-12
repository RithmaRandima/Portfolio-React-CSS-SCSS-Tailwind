import React from "react";
import "./ServicesBox.css";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const ServicesBox = (props) => {
  return (
    <div className="serviceBox flex-col md:flex-row items-start justify-center w-[90%] md:w-[100%] mx-auto mb-[5px] md:mb-[25px] gap-[15px] md:gap-[30px]">
      {/* logo */}
      <h1 className="md:hidden block text-[40px] text-[#00f7ff]">
        {props.icon}
      </h1>

      <h1
        className="hidden md:block text-[50px]"
        style={{ color: props.bgcolor }}
      >
        {props.icon}
      </h1>

      {/* text-section */}
      <div className="text-section text-center md:text-left">
        <h1 className="service-title text-[20px] md:text-[21px] font-[700] capitalize mb-[10px] tracking-[1px]">
          {props.title}
        </h1>
        <p className="hidd block font-[300] text-[14px] tracking-[1px] text-gray-400 mb-[7px]">
          {props.description}
        </p>
        <div className=" md:hidden mx-auto md:ml-[1px] mt-[20px] rounded-[30px] py-1 px-3 flex items-center gap-[5px] bg-[#00f7ff] w-[100px] text-black hover:bg-black hover:text-[#00f7ff] hover:scale-90 duration-200  cursor-pointer">
          <div className="text-[13px] font-[500]">see more</div>
          <FaLongArrowAltRight />
        </div>
      </div>
      <div className="popup-box hidden md:flex">
        <img src={props.img} alt="" />
        <div
          style={{ backgroundColor: props.bgcolor }}
          className="popup-button  rounded-[30px] py-2 px-3 flex items-center gap-[5px]  w-[100px] text-black hover:bg-black hover:scale-75 duration-200  cursor-pointer"
        >
          <FaLongArrowAltLeft />
          <div className="text-[12px] font-[600]">see more</div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBox;
