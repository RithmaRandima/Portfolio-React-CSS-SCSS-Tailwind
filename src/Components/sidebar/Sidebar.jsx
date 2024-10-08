import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import img1 from "../../Asset/sidebar-img-1.png";
import img2 from "../../Asset/sidebar-img-2.png";
import img3 from "../../Asset/sidebar-img-3.png";
import img4 from "../../Asset/sidebar-img-4.png";
import { IoLogoGithub } from "react-icons/io";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(23px at 65px 50px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setOpen(!open);
    }
    setOpen(false);
  };

  window.addEventListener("scroll", changeColor);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links setOpen={setOpen} />

        {/* img container */}
        <div className="md:hidden absolute top-[390px] w-[90%] left-[50%] translate-x-[-50%]  h-[250px] my-4 grid grid-cols-2 gap-[10px]">
          <img
            src={img1}
            className="w-[100%] h-[100px] object-contain rounded-[20px]"
            alt=""
          />

          <img
            src={img2}
            className="w-[100%] h-[100px] object-contain rounded-[20px]"
            alt=""
          />

          <img
            src={img3}
            className="w-[100%] h-[100px] object-contain rounded-[20px]"
            alt=""
          />

          <img
            src={img4}
            className="w-[100%] h-[100px] object-contain rounded-[20px]"
            alt=""
          />
        </div>

        {/* details */}
        <div className="absolute top-[660px] md:top-[350px] left-[30px] text-left w-[70%] mx-auto font-sans text-gray-500">
          <div className="my-3">
            <h1 className="font-bold text-[17px] mb-2">Email</h1>
            <p className="text-[14px] text-gray-400">
              rithma.r.namdasiri@gmail.com
            </p>
          </div>

          <div className="my-3">
            <h1 className="font-bold text-[17px] mb-2">Phone</h1>
            <p className="text-[14px] text-gray-400">
              Number (+94) 77 022 0407
            </p>
            <p className="text-[14px] text-gray-400">
              Number (+94) 71 480 7216
            </p>
          </div>

          <div className="my-2">
            <h1 className="font-bold text-[17px]">Follow Us</h1>
            <div className="flex justify-between items-center mt-3 w-[50%] gap-[16px]">
              <a
                href="https://www.facebook.com/profile.php?id=100084298615209"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="text-[20px] text-[#000] hover:scale-125 hover:text-[#00f7ff]  cursor-pointer duration-200" />
              </a>

              <a
                href="https://github.com/RithmaRandima"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoGithub className="text-[20px] text-[#000] hover:scale-125 hover:text-[#00f7ff] cursor-pointer duration-200" />
              </a>

              <a
                href="https://www.linkedin.com/in/randy-nandasiry-a35785328/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn className="text-[20px] text-[#000] hover:scale-125 hover:text-[#00f7ff] cursor-pointer duration-200" />
              </a>

              <a
                href="https://www.instagram.com/rithy_randy/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-[20px] text-[#000] hover:scale-125 hover:text-[#00f7ff] cursor-pointer duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
