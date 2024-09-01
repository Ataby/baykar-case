import React from "react";
import GooglePlay from "../assets/icons/Google Play.svg"
import AppStore from "../assets/icons/App Store - Filled.svg"
import Twitter from "../assets/icons/twitter.svg"
import Linkedin from "../assets/icons/linkedin.svg"
import Facebook from "../assets/icons/facebook.svg"
import Instagram from "../assets/icons/instagram.svg"
import Youtube from "../assets/icons/youtube.svg"


const Footer = () => {
  const firstLi = ["Pricing", "Overview", "Browse", "Accessibility", "Five"];
  const secondLi = ["Brainstorming","Ideation","Wireframing","Research","Design"];
  const thirdLi = ["Contact Us","Developers","Documentation","Integration","Reports"];

  return (
    <div className="bg-[#0F172A] min-w-[393px] px-4 md:px-20">
      <div className="flex py-4 md:py-12 gap-8 md:flex-nowrap md:flex-row flex-col  md:justify-around items-center">
        <div className="">
          <ul className="grid grid-cols-1 gap-4 content-evenly">
            <li className="text-[16px] text-white font-medium">Product</li>
            {firstLi.map((item) => {
              return (
                <li
                  key={item}
                  className="text-[16px] text-white hover:underline"
                >
                  <a href="#">{item} </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
        <ul className="grid grid-cols-1 gap-4 content-evenly">
            <li className="text-[16px] text-white font-medium">Solutions</li>
            {secondLi.map((item) => {
              return (
                <li
                  key={item}
                  className="text-[16px] text-white  hover:underline"
                >
                  <a href="#">{item} </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
        <ul className="grid grid-cols-1 gap-4 content-evenly">
            <li className="text-[16px] text-white font-medium">Support</li>
            {thirdLi.map((item) => {
              return (
                <li
                  key={item}
                  className="text-[16px] text-white  hover:underline"
                >
                  <a href="#">{item} </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="text-white flex flex-col gap-y-3">
            <h1>Get the App</h1>
            <a href="#"><img src={GooglePlay} alt="" className="max-w-[135px]"/></a>
            <a href="#"><img src={AppStore} alt="" className="max-w-[120px]" /></a>
            <div className=" mt-6">
                  <h1 className="">Follow Us</h1>
                  <div className="flex gap-x-4"> 

                  <a href="#"><img src={Twitter} alt="" /></a>
                  <a href="#"><img src={Linkedin} alt="" /></a>
                  <a href="#"><img src={Facebook} alt="" /></a>
                  <a href="#"><img src={Instagram} alt="" /></a>
                  <a href="#"><img src={Youtube} alt="" /></a>

                  </div>
            </div>
        </div>
      </div>
      <div className="flex md:justify-between justify-center text-white py-6 border-t-2 flex-wrap items-center">
            <h1>Collers @ 2024. All rights reserved.</h1>
            <div className="flex gap-x-6 py-6 md:py-0">
                  <a href="#">Terms</a>
                  <a href="#">Privacy</a>
                  <a href="#">Contact</a>
                  <a href="#">EN</a>
            </div>
      </div>
    </div>
  );
};

export default Footer;
