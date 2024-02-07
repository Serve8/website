import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import item1 from "../assets/Img/item_1.png"
import item2 from "../assets/Img/item_2.png"
import item3 from "../assets/Img/item_3.png"
import item4 from "../assets/Img/item_4.png"
import icon1 from "../assets/Img/icon_1.png"
import icon2 from "../assets/Img/icon_2.png"
import icon3 from "../assets/Img/icon_3.png"
import icon4 from "../assets/Img/icon_4.png"

function Section2() {
  const [activeItem, setActiveItem] = useState(0);

  const items = [
    { title: 'Launch your website', icon: icon1, content: "Upload products, create catalog & customize storefront.", bg: "#E6B1FF" },
    { title: 'Make sales from our marketplace', icon: icon2, content: "Elevate your brand,  boost sales and gain customers from our marketplace effortlessly", bg: "#D2FFFA" },
    { title: 'Message and share  new things with customers', icon: icon3, content: "Engage, connect, and share the latest with your customers, unveil new offerings, promotions, and exciting updates", bg: "#F0D18c" },
    { title: 'Start your ad campaign', icon: icon4, content: "Easily advertise your products on Facebook and Instagram to increase your sales.", bg: "#C7FFAC" }
  ];

  const handleClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className='container'>
      <div style={{ display: 'flex' }} className='w-screen h-full  p-10'>
        {/* Content */}
        <div style={{ flex: 1 }}>
          {items.map((item, index) => (
            <div key={index} className={`content item ${index === activeItem ? 'active' : ''}`} onClick={() => handleClick(index)}>
              <div className='items-center justify-center relative h-full'>
                <div className='flex items-start justify-between p-4' style={{ backgroundColor: index === activeItem ? item.bg : 'transparent' }}>
                  <div className='flex gap-4'>
                    <div>
                      <img src={item.icon} className='object-contain' style={{ backgroundColor: index === activeItem ? item.bg : 'transparent' }} />
                    </div>
                    <div className='flex flex-col text-start gap-4 items-start'>
                      <h3>{item.title}</h3>
                      <p>{item.content}</p>
                    </div>
                  </div>
                  <span className='arrow'>
                    {index === activeItem ?  <IoIosArrowDown />:<IoIosArrowUp /> }
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Image */}
        <div style={{ flex: 1, backgroundColor: activeItem >= 0 && activeItem < items.length ? items[activeItem].bg : 'transparent' }}>
          {activeItem >= 0 && activeItem < items.length &&
            <div className='image relative w-full p-8 flex items-center justify-center h-screen w-full'>
              <img src={activeItem === 0 ? item1 : activeItem === 1 ? item2 : activeItem === 2 ? item3 : item4} alt={`Item ${activeItem + 1} Image`} className='absolute top-8 bottom-0 left-8 right-0  object-contain' />
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Section2;
