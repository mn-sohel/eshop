import React, { useState } from 'react'
import ArrowDownIcon from '../../icons/ArrowDownIcon';
import CheckListIcon from '../../icons/CheckListIcon';

const ProductCategories = () => {
    let [isOpen, setIsOpen] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    let categoriesList = [
    { item: "Computer & Tablets" },
    { item: "Smartphones" },
    { item: "Headphones" },
    { item: "Cameras" },
    { item: "Wearables" },
    { item: "Gaming Consoles" },
    { item: "Home Appliances" },
    { item: "TV & Audio" },
    { item: "Printers & Scanners" },
    { item: "Accessories" },
  ];

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className=" border-b-[1px] pb-[28px] mb-[40px] border-[rgba(48,48,48,0.25)]">
        <div className="flex items-center justify-between mb-5">
            <h3 className='font-["Montserrat"] font-bold text-[20px]'>
            Categories
            </h3>
            <div
            onClick={handleDropDown}
            className={`cursor-pointer ${
                isOpen ? "rotate-180" : ""
            } transition-transform duration-300`}
            >
            <ArrowDownIcon />
            </div>
        </div>
        <ul>
        {isOpen &&
          categoriesList.map((category, index) => (
            <li
              key={index}
              className={`flex items-center gap-2 mb-3 font-["Montserrat"] text-base text-[#303030] leading-6 cursor-pointer ${
                selectedIndex === index ? "font-bold" : ""
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <div
                className={`h-[16px] w-[16px] border border-[#303030] cursor-pointer hover:bg-[#ff624c] flex items-center justify-center  ${
                  selectedIndex === index ? "bg-[#ff624c]" : ""
                } `}
                onClick={() => setSelectedIndex(index)}
              >
                {selectedIndex === index && (
                  <div>
                    <CheckListIcon />
                  </div>
                )}
              </div>
              {category.item}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ProductCategories