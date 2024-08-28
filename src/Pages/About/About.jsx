import React from "react";
import HeroAbout from "../../Components/HeroAbout/HeroAbout";
import Skills from "../../Components/Skills/Skills";
import Education from "../../Components/Education/Education";

const About = () => {
  return (
    <div className="bg-[#090916]">
      <HeroAbout />
      <Education />
      <Skills />
    </div>
  );
};

export default About;
