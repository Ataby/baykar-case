import React from "react";
import World from "../assets/images/world_map.svg";
import Shoes from "../assets/images/last-shoes.svg";
import Ellipses from "../assets/images/Ellipses_all.svg";

const MainSixth = () => {
  return (
    <div className="min-h-[717px] border-red-400 py-10 bg-[#78350F] overflow-x-auto ">
      <div className=" flex p-20 justify-start items-center relative  min-h-[633px] bg-[#78350F]">
        <img src={World} alt="" className="absolute min-w-[1049px] mx-auto " />
        <img src={Ellipses} alt="" className="absolute z-10 -mt-12 left-[290px] min-w-[724px]" />
        <img
          src={Shoes}
          alt=""
          className="relative z-10  -top-[180px]"
        />
        <div className="flex-col flex items-center md:justify-center relative z-50  -left-[290px] md:-left-10 ">
          <h1 className="relative z-50 font-bold text-[48px] md:text-[96px] text-white">
            11,658,467
          </h1>
          <p className="relative z-50 font-bold text-[32px] md:text-[56px] text-white">
            Shoes collected
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSixth;
