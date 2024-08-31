import React from "react";
import Watch from "../assets/icons/watch-demo.svg";
import Shoes from "../assets/images/shoes_1.svg";
import Blue from "../assets/icons/blue_triangle.svg";
import Cup from "../assets/icons/cup_icon.svg";
import Green from "../assets/icons/green_triangle.svg";
import Purple from "../assets/icons/purple_triangle.svg";
import Some from "../assets/icons/some_icon.svg";
import TV from "../assets/icons/tv_icon.svg";

const MainFirst = () => {
  return (
      <>
      
    <div className="flex flex-wrap md:p-10  md:justify-between  md:bg-customCream ">
      <div className="md:bg-customCream w-1/2 flex-wrap md:nowrap flex-col md:items-center md:justify-center min-w-[393px] mx-auto">
        <h1 className=" text-3xl md:text-5xl  font-bold text-wrap md:nowrap w-fit ">
          Collectible Sneakers
        </h1>
        <p className="text-wrap my-8 max-w-[750px] ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
          perspiciatis tempore ratione cupiditate officia labore veniam
          perspiciatis tempore ratione cupiditate officia.
        </p>
        <div className="inline-flex items-baseline gap-4 mx-auto">
          <button className="rounded-md text-xl text-customBrown md:bg-customCream px-4 py-3 transition-all duration-300 border-2 border-customBrown">
            Sign up now
          </button>
          <div className="">
            <button className="flex text-customBrown md:bg-customCream px-4 transition-all duration-300 ">
              <img src={Watch} style={{ width: "20px" }} />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2 min-w-[393px] md:bg-customCream relative p-20 mx-auto ">
        <div className=" bg-customYellow min-w-[275px] max-w-[370px] aspect-square rounded-[50px]  inset-0 z-10 mx-auto"></div>
        <img
          src={Shoes}
          className="absolute inset-0 z-20 min-w-[361px]  object-cover mx-auto"
        />
      </div>
      <div class="absolute inset-0 z-0 pointer-events-none bg-secondCream clip-triangle-inverse mt-56"></div>

      <div className="  flex flex-wrap items-center justify-center md:justify-around z-20 w-full mx-auto md:w-full  ">
      <div className="   max-w-[373px] min-w-[361px] py-4">
          <div className="flex relative">
            <img
              src={Cup}
              style={{ width: "64px" }}
              className="absolute inset-0 z-10   "
            />
            <img src={Blue} style={{ width: "60px" }} className="ml-8" />
          </div>
          <div className="mt-4">
            <h1 className="text-xl font-medium">Lorem, ipsum.</h1>
          </div>
          <div className="mt-2">
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              similique molestiae. Corrupti nostrum omnis vitae.
            </p>
          </div>
        </div>
        <div className=" max-w-[373px] min-w-[361px] py-4">
          <div className="flex relative">
            <img
              src={Some}
              style={{ width: "64px" }}
              className="absolute inset-0 z-10   "
            />
            <img src={Green} style={{ width: "43px" }} className="ml-8" />
          </div>
          <div className="mt-4">
            <h1 className="text-xl font-medium">Lorem, ipsum.</h1>
          </div>
          <div className="mt-2">
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              similique molestiae. Corrupti nostrum omnis vitae.
            </p>
          </div>
        </div>
        <div className=" max-w-[373px] min-w-[361px] py-4">
          <div className="flex relative">
            <img
              src={TV}
              style={{ width: "64px" }}
              className="absolute inset-0 z-10   "
            />
            <img src={Purple} style={{ width: "45px" }} className="ml-8" />
          </div>
          <div className="mt-4">
            <h1 className="text-xl font-medium">Lorem, ipsum.</h1>
          </div>
          <div className="mt-2">
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              similique molestiae. Corrupti nostrum omnis vitae.
            </p>
          </div>
        </div>
       
        
      </div>
    </div>
    </>
  );
};

export default MainFirst;
