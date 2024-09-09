import React from "react";
import HeroAbout from "../../Components/HeroAbout/HeroAbout";
import Skills from "../../Components/Skills/Skills";
import Education from "../../Components/Education/Education";
import Footer from "../../Components/Footer/Footer";
import AboutParallax from "../../Components/AboutParallax/AboutParallax";

const About = () => {
  return (
    <div className="bg-[#090916] overflow-x-hidden">
      <HeroAbout />
      <Education />
      <Skills />
      <AboutParallax />
      <Footer />
    </div>
  );
};

export default About;
