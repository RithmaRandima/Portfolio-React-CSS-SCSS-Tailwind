import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";

const Footer = () => {
  return (
    <div className="w-full pt-5 pb-3 bg-black md:px-5">
      <div className="w-full flex justify-center items-center flex-col gap-4 ">
        <h1 className="logo-name text-[#00f7ff] text-[18px] tracking-[2px]">
          Rithma Randima.
        </h1>
        <div className="flex items-center gap-8  w-fit mx-auto">
          <a
            href="https://www.facebook.com/profile.php?id=100084298615209"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="text-[19px] hover:scale-110 duration-300 text-white hover:text-[#00f7ff]" />
          </a>
          <a
            href="https://www.instagram.com/rithy_randy/"
            target="_blank"
            rel="noreferrer"
          >
            <RiInstagramFill className="text-[19px] hover:scale-110 duration-300 text-white hover:text-[#00f7ff]" />
          </a>
          <a
            href="https://www.linkedin.com/in/randy-nandasiry-a35785328/"
            target="_blank"
            rel="noreferrer"
          >
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
      </div>

      {/* copyright */}
      <div className="flex items-center justify-between mt-[30px] md:mt-[20px]">
        <p className="text-[10px] tracking-[2px] font-[900]">
          &#169; RandyNandasiry. All rights reserved
        </p>

        <p className="hidden md:block text-[12px] text-[#00f7ff]">
          <ReactTyped
            strings={[
              "Front-End Developer",
              "Web Designer",
              "UI/UX Developer",
              "Web Developer",
            ]}
            typeSpeed={200}
            loop
          />
        </p>
      </div>
    </div>
  );
};

export default Footer;
