import React from "react";
import HeroAbout from "../../Components/HeroAbout/HeroAbout";
import Skills from "../../Components/Skills/Skills";
import Education from "../../Components/Education/Education";
import Footer from "../../Components/Footer/Footer";

const About = () => {
  return (
    <div className="bg-[#090916]">
      <HeroAbout />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
};

export default About;
