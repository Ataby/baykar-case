import React from "react";
import best1 from "../assets/images/best_1.svg";
import best2 from "../assets/images/best_2.svg";
import best3 from "../assets/images/best_3.svg";
import Shopping from "../assets/icons/shopping-cart.svg";
import Rect1 from "../assets/icons/Rectangle_1.svg";
import Rect2 from "../assets/icons/Rectangle_2.svg";
import Rect3 from "../assets/icons/Rectangle_3.svg";
import Rect4 from "../assets/icons/Rectangle_4.svg";
import Rect5 from "../assets/icons/Rectangle_5.svg";

const MainSecond = () => {
  const bestItems = [
    {
      image: best1,
      icon: Rect1,
      position: { left: "-9%", top: "130px" },
      icon2: "",
      position2: { left: "" },
    },
    {
      image: best2,
      icon: Rect2,
      position: { left: "-20px", top: "-20px" },
      icon2: Rect3,
      position2: { right: "-14px",bottom:"20px" },
    },
    {
      image: best3,
      icon: Rect5,
      position: { right: "-10%", top: "8px" },
      icon2: Rect4,
      position2: {left: "25%",bottom:"-10%" },
    },
  ];

  return (
    <div className="bg-darkBlue justify-evenly p-6 relative ">
      <div className="flex flex-col md:flex-row w-full  p-1  items-center md:justify-between flex-nowrap md:flex-wrap mx-auto md:mx-0">
        <h1 className="text-3xl md:text-6xl text-white">
          The best of the best
        </h1>
        <ul>
          <li className="text-2xl px-6 py-4 border-2 rounded-md text-white">
            <a href="#">Sign up now</a>{" "}
          </li>
        </ul>
      </div>
      <div className="flex mx-auto  flex-wrap items-center justify-center gap-12 mt-6 mb-12  ">
        {bestItems.map((item) => {
          return (
            <div className="relative ">
              <div className="min-w-[394px] relative max-w-[394px]  flex flex-col gap-3 rounded-[10px] z-10 shadow-md shadow-white bg-darkBlue">
                <img
                  src={item.image}
                  alt=""
                  className="rounded-t-[10px] z-10"
                />

                <h1 className="text-2xl font-bold text-white px-6 bg-darkBlue z-10">
                  Title
                </h1>
                <p className="text-lg z-10 text-white text-wrap px-6 bg-darkBlue">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, deleniti veritatis.
                </p>
                <button className="flex gap-2 items-center justify-center  mx-auto px-24 py-3 mb-4 text-white transition-all duration-300 border-2 border-white rounded-lg z-10 bg-darkBlue">
                  <img src={Shopping} alt="" />
                  Buy Now
                </button>
              </div>
              <img
                src={item.icon}
                alt=""
                style={item.position}
                className="absolute"
              />
              <img
                src={item.icon2}
                alt=""
                style={item.position2}
                className="absolute"
              />
            </div>
          );
        })}ß
      </div>
    </div>
  );
};

export default MainSecond;
