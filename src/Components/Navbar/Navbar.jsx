import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { IoLogoGithub } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="logo-name"
        >
          Rithma
          <GoDotFill className="inline-block text-[#00f7ff] text-[18px] mb-[-7px] ml-[-1px]" />
        </motion.span>
        <div className="social">
          <a
            href="https://www.facebook.com/profile.php?id=100084298615209"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/rithy_randy/"
            target="_blank"
            rel="noreferrer"
          >
            <RiInstagramFill className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/randy-nandasiry-a35785328/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href="https://github.com/RithmaRandima"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoGithub className="social-icon" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaTwitter className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
