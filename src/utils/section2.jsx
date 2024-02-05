import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import img1 from "../assets/Img/hero.jpg"
const Section2 = () => {
  const [activeItem, setActiveItem] = useState(null);

  const items = [
    { id: 1, name: 'Item 1', image:  img1 },
    { id: 2, name: 'Item 2', image: 'item2_image.jpg' },
    { id: 3, name: 'Item 3', image: 'item3_image.jpg' },
    { id: 4, name: 'Item 4', image: 'item4_image.jpg' }
  ];

  const handleClick = (itemId) => {
    setActiveItem(itemId === activeItem ? null : itemId);
  };

  return (
    <div className="container mx-auto p-4">
      {items.map(item => (
        <div key={item.id} className="relative flex ">
          <div
            className="flex items-center justify-between cursor-pointer border border-gray-300 rounded p-2 mb-2"
            onClick={() => handleClick(item.id)}
          >
            <span className="mr-2">{item.name}</span>
            <span className={`arrow ${activeItem === item.id ? 'transform rotate-0' : 'transform rotate-180'}`}><IoIosArrowDown /></span>
          </div>
          <div>
            {activeItem === item.id && (
              <img
                src={item.image}
                alt={item.name}
                className="absolute top-0 left-0"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default  Section2;
