import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="w-full py-5 bg-black flex justify-center items-center flex-col ">
      <div className="flex items-center gap-8  w-fit mx-auto">
        <a href="#">
          <FaFacebook className="text-[19px] hover:scale-110 duration-300 text-white hover:text-[#00f7ff]" />
        </a>
        <a href="#">
          <RiInstagramFill className="text-[19px] hover:scale-110 duration-300 text-white hover:text-[#00f7ff]" />
        </a>
        <a href="#">
          <FaLinkedin className="text-[19px] hover:scale-110 duration-300 text-white hover:text-[#00f7ff]" />
        </a>
        <a href="#">
          <IoLogoGithub className="text-[19px] hover:scale-110 duration-300 text-white hover:text-[#00f7ff]" />
        </a>
        <a href="#">
          <FaTwitter className="text-[19px] hover:scale-110 duration-300 text-white hover:text-[#00f7ff]" />
        </a>
      </div>

      {/* copyright */}
      <p className="text-[13px] tracking-[1px] mt-[10px]">
        &#169;
        <span className="text-[#00f7ff] font-[500] mr-[2px]">RithmaRandy.</span>
        All rights reserved
      </p>
    </div>
  );
};

export default Footer;
