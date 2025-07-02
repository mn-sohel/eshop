import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const ProductListSidebarContent = ({ children,title="Categories" }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="mb-20">
      <h3
        className='mb-5 font-["Montserrat"] font-bold text-xl cursor-pointer flex justify-between items-center'
        onClick={() => setShow(!show)}
      >
        {title} <FaAngleDown className={`${show && "rotate-180"}`} />
      </h3>
      {show && children}
    </div>
  );
};

export default ProductListSidebarContent;
