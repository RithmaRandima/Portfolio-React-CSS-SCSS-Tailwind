import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="w-full py-5 bg-black flex justify-center items-center flex-col ">
      <div className="flex items-center gap-8  w-fit mx-auto">
        <a
          href="https://www.facebook.com/profile.php?id=100084298615209"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook className="text-[19px] hover:scale-110 duration-300 text-white hover:text-[#00f7ff]" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <RiInstagramFill className="text-[19px] hover:scale-110 duration-300 text-white hover:text-[#00f7ff]" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-[19px] hover:scale-110 duration-300 text-white hover:text-[#00f7ff]" />
        </a>
        <a
          href="https://github.com/RithmaRandima"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoGithub className="text-[19px] hover:scale-110 duration-300 text-white hover:text-[#00f7ff]" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <FaTwitter className="text-[19px] hover:scale-110 duration-300 text-white hover:text-[#00f7ff]" />
        </a>
      </div>

      {/* copyright */}
      <p className="text-[12px] mt-[10px] tracking-[3px]">
        &#169;
        <span className="text-[#00f7ff] font-[500]">RithmaRandy.</span>
        All rights reserved
      </p>
    </div>
  );
};

export default Footer;
