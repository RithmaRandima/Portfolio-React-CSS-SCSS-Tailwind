import React, { useState } from "react";
import CountUp from "react-countup";

const HeroBottomBox = (props) => {
  const [counterOn, setCounterOn] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 10 && window.scrollY <= 1000) {
      setCounterOn(true);
    } else {
      setCounterOn(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className="w-[100%] h-[100%]  py-[5px] flex items-center justify-center flex-col">
      {/* count */}
      <h1 className="text-[45px] md:text-[60px] mb-[1px]  text-[#00f7ff] font-[700]">
        {counterOn ? (
          <CountUp start={0} end={props.end} duration={props.duration} />
        ) : (
          0
        )}
        +
      </h1>
      <h1 className="text-[12px] md:text-[13px] uppercase tracking-[3px] font-[600]">
        {props.title}
      </h1>
      {/* title */}
    </div>
  );
};

export default HeroBottomBox;
