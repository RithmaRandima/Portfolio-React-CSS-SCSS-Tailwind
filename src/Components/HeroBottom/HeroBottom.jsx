import React from "react";
import HeroBottomBox from "./HeroBottomBox/HeroBottomBox";

const HeroBottom = () => {
  return (
    <div className="w-[100%] md:w-[80%] mx-auto h-[20vh] md:h-[25vh] grid grid-cols-3  gap-2">
      <HeroBottomBox end={23} duration={3.4} title={"Projects"} />
      <HeroBottomBox end={10} duration={2.8} title={"Languages"} />
      <HeroBottomBox end={10} duration={3} title={"Languages"} />
    </div>
  );
};

export default HeroBottom;
