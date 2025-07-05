import React, { useEffect, useRef, useState } from "react";
import Container from "../components/commonLayouts/Container";
import Slider from "react-slick";
import { MdFullscreen } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const ProductDetailsPage = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [active, setActive] = useState(false);
  const [image, setImage] = useState("");
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var settingsAnother = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  let handleClick = (url) => {
    setActive(true)
    setImage(url)
  };

  return (
    <Container>
      <div className="flex gap-[16px] mt-16 mb-12">
        <span className='font-["Montserrat"] font-normal text-[16px] relative after:absolute after:w-[1px] after:h-full after:bg-[#4D4D4D] after:content-[""] after:top-0 after:right-[-8px]'>
          Home
        </span>
        <span className='font-["Montserrat"] font-normal text-[16px] relative after:absolute after:w-[1px] after:h-full after:bg-[#4D4D4D] after:content-[""] after:top-0 after:right-[-8px]'>
          Computers & Tablets
        </span>
        <span className='font-["Montserrat"] font-normal text-[16px] relative after:absolute after:w-[1px] after:h-full after:bg-[#4D4D4D] after:content-[""] after:top-0 after:right-[-8px]'>
          Laptop
        </span>
        <span className='font-["Montserrat"] font-bold text-[16px]'>
          NexSUS ROCK Strix Scar 17 Gaming Laptop
        </span>
      </div>

      <div className="flex gap-14">
        <div className="w-[49%]">
          <Slider
            asNavFor={nav2}
            ref={(slider) => (sliderRef1 = slider)}
            {...settings}
          >
            <div>
              <h3 className="relative">
                <img src="images/banner.png" alt="" />
                <MdFullscreen
                  className="absolute top-[10px] right-[10px] text-2xl text-white"
                  onClick={()=>handleClick("images/banner.png")}
                />
              </h3>
            </div>
            <div>
              <h3 className="relative">
                <img src="images/banner.png" alt="" />
                <MdFullscreen
                  className="absolute top-[10px] right-[10px] text-2xl"
                  onClick={()=>handleClick("images/banner.png")}
                />
              </h3>
            </div>
            <div>
              <h3 className="relative">
                <img src="images/banner.png" alt="" />
                <MdFullscreen
                  className="absolute top-[10px] right-[10px] text-2xl text-white"
                  onClick={()=>handleClick("images/banner.png")}
                />
              </h3>
            </div>
            <div>
              <h3 className="relative">
                <img src="images/banner.png" alt="" />
                <MdFullscreen
                  className="absolute top-[10px] right-[10px] text-2xl"
                  onClick={()=>handleClick("images/banner.png")}
                />
              </h3>
            </div>
            <div>
              <h3 className="relative">
                <img src="images/banner.png" alt="" />
                <MdFullscreen
                  className="absolute top-[10px] right-[10px] text-2xl text-white"
                  onClick={()=>handleClick("images/banner.png")}
                />
              </h3>
            </div>
            <div>
              <h3 className="relative">
                <img src="images/banner.png" alt="" />
                <MdFullscreen
                  className="absolute top-[10px] right-[10px] text-2xl"
                  onClick={()=>handleClick("images/banner.png")}
                />
              </h3>
            </div>
          </Slider>
          <Slider
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            {...settingsAnother}
          >
            <div>
              <div className="mx-[5px]">
                <img src="images/banner.png" alt="" />
              </div>
            </div>
            <div>
              <div className="mx-[5px]">
                <img src="images/banner.png" alt="" />
              </div>
            </div>
            <div>
              <div className="mx-[5px]">
                <img src="images/banner.png" alt="" />
              </div>
            </div>
            <div>
              <div className="mx-[5px]">
                <img src="images/banner.png" alt="" />
              </div>
            </div>
            <div>
              <div className="mx-[5px]">
                <img src="images/banner.png" alt="" />
              </div>
            </div>
            <div>
              <div className="mx-[5px]">
                <img src="images/banner.png" alt="" />
              </div>
            </div>
          </Slider>
        </div>
        <div className="w-[49%]">
          <div className="flex gap-2 items-center">
            <FaStar className="text-[#FFD550]"/>
            <FaStar className="text-[#FFD550]"/>
            <FaStar className="text-[#FFD550]"/>
            <FaStar className="text-[#FFD550]"/>
            <FaStar className="text-[#FFD550]"/>
            <span>(142)</span>
          </div>

          <h1 className="font-['Poppins'] font-semibold text-[36px] leading-12 border-b border-solid border-[#CBCBCB] pb-[20px]">NexSUS ROCK Strix Scar 17 Gaming Laptop 15.7” 1TB SSD 16GB RAM Pro</h1>

          <div className="flex items-center gap-4">
            <p className="font-['Poppins'] font-bold text-[56px] text-[#FF624C]">$2,999.99</p>
            <small className="font-['Montserrat'] font-normal text-[20px] text-[#CBCBCB]"><del>$5,499.99</del></small>
          </div>
        </div>
      </div>

      {active && (
        <div className="fixed top-0 left-0 bg-[rgba(0,0,0,.5)] w-full h-screen flex justify-center items-center">
          <IoMdClose className="absolute text-white text-3xl top-[200px] right-[230px]" onClick={()=>setActive(false)}/>
          <img src={image} alt="" />
        </div>
      )}
    </Container>
  );
};

export default ProductDetailsPage;
