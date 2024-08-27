import React from "react";

const ProjectContainerBox = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
      {/* img */}
      <div className="w-[100%] h-[100%] py-5  flex items-center justify-center ">
        <div className="w-[95%] h-[390px] bg-black"></div>
      </div>
      {/* info */}
      <div className="w-[100%] h-[100%]">
        <h1 className="text-[30px] font-[500] capitalize">title</h1>
        <p className="text-gray-400 text-[17px] leading-[25px] tracking-[1px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo error
          vero atque rerum molestias ut optio odit laudantium consectetur!
          Dignissimos rerum laborum voluptates illo cum corporis dolores ipsam
          dolorem laboriosam ab, possimus accusantium optio, a et dolor delectus
          doloremque! Error.
        </p>
      </div>
    </div>
  );
};

export default ProjectContainerBox;
