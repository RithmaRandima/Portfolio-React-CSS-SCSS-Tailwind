import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = (props) => {
  const [color, setColor] = useState("home");
  return (
    <motion.div className="links" variants={variants}>
      <Link
        to="/"
        onClick={() => {
          props.setOpen((pre) => !pre);
          setColor("home");
          window.scrollTo(0, 0);
        }}
        style={{
          color: color === "home" ? "#00f7ff" : "inherit",
        }}
      >
        Home
        {color === "home" ? <hr /> : <></>}
      </Link>

      <Link
        to="/about"
        onClick={() => {
          props.setOpen((pre) => !pre);
          setColor("about");
          window.scrollTo(0, 0);
        }}
        style={{
          color: color === "about" ? "#00f7ff" : "inherit",
        }}
      >
        About Me
        {color === "about" ? <hr /> : <></>}
      </Link>

      <Link
        to="/works"
        onClick={() => {
          props.setOpen((pre) => !pre);
          setColor("works");
          window.scrollTo(0, 0);
        }}
        style={{
          color: color === "works" ? "#00f7ff" : "inherit",
        }}
      >
        My Works
        {color === "works" ? <hr /> : <></>}
      </Link>

      <Link
        to="/contact"
        onClick={() => {
          props.setOpen((pre) => !pre);
          setColor("contact");
          window.scrollTo(0, 0);
        }}
        style={{
          color: color === "contact" ? "#00f7ff" : "inherit",
        }}
      >
        Contact Me
        {color === "contact" ? <hr /> : <></>}
      </Link>
    </motion.div>
  );
};

export default Links;
