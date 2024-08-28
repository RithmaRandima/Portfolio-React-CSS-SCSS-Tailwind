import React from "react";
import Hero from "../../Components/Hero/Hero";
import Parallax from "../../Components/Parallax/Parallax";
import Services from "../../Components/Services/Services";
import Projects from "../../Components/Projects/Projects";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Parallax />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
