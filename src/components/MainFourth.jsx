import React, { useState, useRef } from "react";
import Logo1 from "../assets/icons/company_1.svg";
import Logo2 from "../assets/icons/company_2.svg";
import Logo3 from "../assets/icons/company_3.svg";
import Logo4 from "../assets/icons/company_4.svg";
import Photo1 from "../assets/images/User Thumb_1.svg";
import Photo2 from "../assets/images/User Thumb_2.svg";
import Photo3 from "../assets/images/User Thumb_3.svg";
import Photo4 from "../assets/images/User Thumb_4.svg";
import Button1 from "../assets/icons/Button_1.svg";
import Button2 from "../assets/icons/Button_2.svg";

const MainFourth = () => {
  const sliderRef = useRef(-100);
  const scrollAmount = 372;

  const items = [
    {
      logo: Logo1,
      photo: Photo1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ut eum cumque adipisci minima corrupti veritatis deserunt non nihil.",
      name: "Hellen Jummy",
      degree: "Co-founder",
    },
    {
      logo: Logo2,
      photo: Photo2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ut eum cumque adipisci minima corrupti veritatis deserunt non nihil.",
      name: "Hellen Jummy",
      degree: "Team Lead",
    },
    {
      logo: Logo2,
      photo: Photo3,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ut eum cumque adipisci minima corrupti veritatis deserunt non nihil.",
      name: "Hellen Jummy",
      degree: "Team Lead",
    },
    {
      logo: Logo3,
      photo: Photo4,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ut eum cumque adipisci minima corrupti veritatis deserunt non nihil.",
      name: "Hellen Jummy",
      degree: "Developer",
    },
    {
      logo: Logo4,
      photo: Photo1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ut eum cumque adipisci minima corrupti veritatis deserunt non nihil.",
      name: "Hellen Jummy",
      degree: "Senior Developer",
    },
    {
      logo: Logo1,
      photo: Photo2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ut eum cumque adipisci minima corrupti veritatis deserunt non nihil.",
      name: "Hellen Jummy",
      degree: "Team Lead",
    },
  ];

  return (
    <div className=" pb-16 bg-customCream -z-20">
      <div className="flex justify-between p-5  ">
        <h1 className="font-bold text-[32px] md:text-[56px]">
          Because they love us
        </h1>
        <div>
          <button
          className=""
            onClick={() => {
              const container = sliderRef.current;
              container.scrollLeft -= scrollAmount;
            }}
          >
            <img src={Button1} alt="turn-next-image" />
          </button>
          <button
            onClick={() => {
              const container = sliderRef.current;
              container.scrollLeft += scrollAmount;
            }}
          >
              <img src={Button2} alt="turn-next-image" />  
            
          </button>
        </div>
      </div>
      <div className="flex gap-3 relative overflow-x-scroll
      pb-4 pl-4 scroll-smooth  bg-customCream -z-0 scrollbar-hide " ref={sliderRef} >
        <div className="w-full h-[320px] bg-[#FDE68A] absolute -z-10"></div>
        {items.map((item, index) => {
          return (
            <div
              key={item.id}
              className="max-w-[384px] min-w-[319px] mt-8 shadow-lg bg-white rounded-[20px] p-4  "
            >
              <img alt="sliderImage" key={index} src={item.logo} />
              <p className=" text-lg leading-9">{item.desc}</p>
              <div className="flex mt-6">
                <img
                  alt="userImage"
                  src={item.photo}
                  style={{ width: "64px" }}
                />
                <div className="my-auto">
                  <h2 className="text-lg">{item.name}</h2>
                  <h2 className="text-[#475569]">{item.degree}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainFourth;
