import React from "react";
import img1 from "../../../Asset/package1.jpg";

const ProjectContainerBox = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 ">
      {/* img */}
      <div className="w-[100%] h-[180px] md:h-[430px]  flex items-center justify-center ">
        <img src={img1} className="w-[100%] h-[100%] object-cover" alt="" />
      </div>
      {/* info */}
      <div className="w-[100%] flex flex-col p-3 justify-center bg-black">
        <h1 className="text-[30px] font-[500] capitalize">title</h1>
        <p className="text-gray-400 text-[17px] leading-[25px] tracking-[1px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo error
          vero atque rerum molestias ut optio odit laudantium consectetur!
          Dignissimos rerum laborum voluptates illo cum corporis dolores ipsam
          dolorem laboriosam ab, possimus accusantium optio, a et dolor delectus
          doloremque! Error.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          adipisci rem dolore sit, consequuntur ipsum fugiat qui atque deleniti
          cum!
        </p>
      </div>
    </div>
  );
};

export default ProjectContainerBox;
