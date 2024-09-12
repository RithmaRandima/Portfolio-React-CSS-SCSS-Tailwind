import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import img1 from "../../Asset/Untitled-2.jpg";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

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
        <div className="md:hidden absolute top-[390px] w-[90%] left-[50%] translate-x-[-50%]  h-[250px] my-4 grid grid-cols-3 gap-[10px]">
          <img
            src={img1}
            className="w-[100%] h-[100px] object-cover rounded-[20px]"
            alt=""
          />
          <img
            src={img1}
            className="w-[100%] h-[100px] object-cover rounded-[20px]"
            alt=""
          />
          <img
            src={img1}
            className="w-[100%] h-[100px] object-cover rounded-[20px]"
            alt=""
          />
          <img
            src={img1}
            className="w-[100%] h-[100px] object-cover rounded-[20px]"
            alt=""
          />
        </div>

        {/* details */}
        <div className="absolute top-[680px] md:top-[360px] left-[30px] text-left w-[70%] mx-auto font-sans text-gray-500">
          <div className="my-3">
            <h1 className="font-bold text-[16px] mb-2">Email</h1>
            <p className="text-[13px] text-gray-400">info@travel.com</p>
          </div>

          <div className="my-3">
            <h1 className="font-bold text-[16px] mb-2">Phone</h1>
            <p className="text-[13px] text-gray-400">
              Travel Agency + 1 473 483 384
            </p>
            <p className="text-[13px] text-gray-400">
              info insurance + 1 474 499 384
            </p>
          </div>

          <div className="my-2">
            <h1 className="font-bold text-[16px]">Follow Us</h1>
            <div className="flex justify-between items-center mt-3 w-[50%] gap-[16px]">
              <FaFacebook className="text-[20px] text-[#000] hover:scale-110 cursor-pointer duration-200" />
              <FaTwitter className="text-[20px] text-[#000] hover:scale-110 cursor-pointer duration-200" />
              <FaLinkedinIn className="text-[20px] text-[#000] hover:scale-110 cursor-pointer duration-200" />
              <FaInstagram className="text-[20px] text-[#000] hover:scale-110 cursor-pointer duration-200" />
            </div>
          </div>
        </div>
      </motion.div>
      <ToggleButton setOpen={setOpen} />

      {/* img container */}
      {/* <div className="w-[70%] mx-auto h-[180px] my-4 grid grid-cols-3 gap-[15px]">
        <img
          src={img1}
          className="w-[100%] h-[80px] object-cover rounded-[20px]"
          alt=""
        />

        <img
          src={img1}
          className="w-[100%] h-[80px] object-cover rounded-[20px]"
          alt=""
        />

        <img
          src={img1}
          className="w-[100%] h-[80px] object-cover rounded-[20px]"
          alt=""
        />

        <img
          src={img1}
          className="w-[100%] h-[80px] object-cover rounded-[20px]"
          alt=""
        />

        <img
          src={img1}
          className="w-[100%] h-[80px] object-cover rounded-[20px]"
          alt=""
        />

        <img
          src={img1}
          className="w-[100%] h-[80px] object-cover rounded-[20px]"
          alt=""
        />
      </div> */}
    </motion.div>
  );
};

export default Sidebar;
