import React from 'react'
import Fifth1 from "../assets/icons/fifth_1.svg"
import Fifth2 from "../assets/icons/fifth_2.svg"
import Fifth3 from "../assets/icons/fifth_3.svg"
import Fifth4 from "../assets/icons/fifth_4.svg"
import Fifth5 from "../assets/icons/fifth_5.svg"
import Fifth6 from "../assets/icons/fifth_6.svg"
import RightArrow from "../assets/icons/right-arrow.svg"
import AllShoes from "../assets/images/all_shoes.svg"
import Waves from "../assets/images/Waves.svg"

const MainFifth = () => {
      const listedItems = [
            {icon:Fifth1 , name:"Bibendum Tellus" },
            {icon:Fifth2 , name:"Cras eget" },
            {icon:Fifth3 , name:"Dolor pharetra" },
            {icon:Fifth4 , name:"Amet Fringilla" },
            {icon:Fifth5 , name:"Amet Nibh" },
            {icon:Fifth6 , name:"Sed velit" }
      ];

  return (
    <div className='relative'>
      <div className='flex-col gap-8 pt-12 px-4 md:p-10 z-20'>
            <h1 className='text-[32px] md:text-[56px] font-bold'>Grow your collection</h1>
            <p className='text-wrap flex text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur cumque ut perspiciatis perferendis, earum vitae voluptate asperiores velit nulla repudiandae pariatur obcaecati! Non culpa delectus quisquam fugiat sit at. Error consectetur fuga architecto consequuntur.</p>
    
      </div>
      <div className='flex md:justify-between items-center justify-center z-20 border-2 border-blue-200 flex-wrap md:flex-nowrap'>
            <ul className='md:p-10 border-2 border-red-200 md:flex-col flex flex-row overflow-x-scroll scroll-smooth gap-x-2 '>
                  {listedItems.map((item, index) => (
                        <li key={index} className='flex items-center gap-4 hover:shadow-md w-fit p-4 rounded-md group text-nowrap hover:bg-gray-300'>
                              <img className='' src={item.icon} alt={item.name} />
                              <p className='text-[20px]'>{item.name}</p>
                              <img className=' invisible group-hover:visible group-hover:bg-gray-300' src={RightArrow} alt="" />
                        </li>
                  ))}
            </ul>
            <img src={AllShoes} alt="" className='min-w-[361px]' />

      </div>
            <img src={Waves} alt="" className='absolute -z-10 bottom-0' />
    </div>
  )
}

export default MainFifth