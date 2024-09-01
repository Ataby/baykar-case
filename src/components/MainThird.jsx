import React from "react";
import Check from "../assets/icons/check_icon.svg";
import Media from "../assets/images/Media.svg";
import Rect6 from "../assets/icons/Rectangle_6.svg";
import Rect7 from "../assets/icons/Rectangle_7.svg";
import Rect8 from "../assets/icons/Rectangle_8.svg";
import Rect9 from "../assets/icons/Rectangle_9.svg";
import Rect10 from "../assets/icons/Rectangle_10.svg";
import Rect11 from "../assets/icons/Rectangle_11.svg";

const MainThird = () => {
  return (
    <div className="bg-customCream p-20">
      <div className="max-h-[816px] max-w-[1280px] pt-4 gap-x-20 flex items-center justify-center flex-wrap bg-white shadow-lg rounded-[30px] ">
        <div className=" max-h-[496px] border-blue-400  flex flex-col items-center md:items-start min-w-[329px] rounded-3xl px-4 ">
          <h1 className="text-3xl md:text-[56px] mb-8  font-bold text-wrap">
            Why join us
          </h1>
          <p className="flex gap-2 text-xl py-1">
            <img src={Check} style={{ width: "14px" }} /> Lorem, ipsum dolor sit
            amet consectetur adipisicing.
          </p>
          <p className="flex gap-2 text-xl py-1">
            <img src={Check} style={{ width: "14px" }} /> Lorem, ipsum dolor sit
            amet consectetur adipisicing.
          </p>
          <p className="flex gap-2 text-xl py-1 relative z-10">
            <img src={Check} style={{ width: "14px" }} /> Lorem, ipsum dolor sit
            amet consectetur adipisicing.
          </p>
          <button className="mt-8 relative z-10">
            <a
              href="#"
              className="text-customBrown border-2 border-customBrown px-4 py-2 rounded-md text-nowrap"
            >
              {" "}
              Sign up now
            </a>
          </button>
        </div>
        <div className="relative -z-0 ">
          <img
            src={Media}
            alt=""
            className="max-w-[520px] min-w-[330px] w-fit relative z-40"
          />
          <img src={Rect6} className="z-0  absolute -top-[90px] -left-[10px]" />
          <img src={Rect7} className="z-0  absolute top-[30px] " />
          <img src={Rect8} className="z-50  absolute bottom-[20px] left-[100px] " />
          <img src={Rect9} className="z-0  absolute bottom-[20px] right-[80px] " />
          <img src={Rect10} className="z-0  absolute -bottom-[20px] -right-[100px] " />
          <img src={Rect11} className="z-0  absolute -top-[50px] right-[50px] " />
        </div>
      </div>
    </div>
  );
};

export default MainThird;
