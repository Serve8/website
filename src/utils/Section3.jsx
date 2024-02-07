import React from 'react';
import icon1 from "../assets/Svg/icon_1.png";
import icon2 from "../assets/Svg/icon_2.png";
import icon3 from "../assets/Svg/icon_3.png";

const Section3 = () => {
    const items = [
        { title: 'Boost Your Online Business with Our All-in-One Platform – Easy Setup, Smooth Operations, and Hassle-Free Delivery Logistics', icon: icon1,  bg: "#AFFFB3" },
        { title: 'Boost Your Online Business with Our All-in-One Platform – Easy Setup, Smooth Operations, and Hassle-Free Delivery Logistics', icon: icon2,  bg: "#B8FFF6" },
        { title: 'Engage, connect, and share the latest with your customers, unveil new offerings, promotions, and exciting updates', icon: icon3, bg: "#F2A5FF" }
    ];

    return (
        <div className='flex justify-center gap-8'>
            {items.map((item, index) => (
                <div key={index} className='flex items-center gap-8'>
                    <div className='relative rounded-md shadow-lg shadow-black/60 flex items-end   bg-[#ffffff93] p-7 w-[353px] h-[345px]'>
                        <div className='absolute rounded-md left-4 top-3' style={{background: item.bg}} >
                          <img src={item.icon}/>
                        </div>
                        <div className=' flex flex-wrap text-[20px] font-[500] '>{item.title}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Section3;
