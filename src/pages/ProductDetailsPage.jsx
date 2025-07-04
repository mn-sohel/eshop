import React, { useEffect, useRef, useState } from "react";
import Container from "../components/commonLayouts/Container";
import Slider from "react-slick";
import { MdFullscreen } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import SecureIcon from "../icons/SecureIcon";
import ShippingIcon from "../icons/ShippingIcon";
import TransparentIcon from "../icons/TransparentIcon";
import { IoCartOutline } from "react-icons/io5";
import NewProduct from "../components/NewProduct";

const ProductDetailsPage = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [active, setActive] = useState(false);
  const [descriptionActive, setDescriptionActive] = useState(true);
  const [reviewActive, setReviewActive] = useState(false);
  const [image, setImage] = useState("");
  let [quantity, setQuantity] = useState(0);
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
    setActive(true);
    setImage(url);
  };

  let handleClickQuantity = (type) => {
    if (type == "minus") {
      if (quantity > 0) {
        quantity--;
        setQuantity(quantity);
      }
    } else {
      quantity++;
      setQuantity(quantity);
    }
  };

  let handleDescription = () => {
    setDescriptionActive(true);
    setReviewActive(false);
  };

  let handleReview = () => {
    setDescriptionActive(false);
    setReviewActive(true);
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
                  onClick={() => handleClick("images/banner.png")}
                />
              </h3>
            </div>
            <div>
              <h3 className="relative">
                <img src="images/banner.png" alt="" />
                <MdFullscreen
                  className="absolute top-[10px] right-[10px] text-2xl"
                  onClick={() => handleClick("images/banner.png")}
                />
              </h3>
            </div>
            <div>
              <h3 className="relative">
                <img src="images/banner.png" alt="" />
                <MdFullscreen
                  className="absolute top-[10px] right-[10px] text-2xl text-white"
                  onClick={() => handleClick("images/banner.png")}
                />
              </h3>
            </div>
            <div>
              <h3 className="relative">
                <img src="images/banner.png" alt="" />
                <MdFullscreen
                  className="absolute top-[10px] right-[10px] text-2xl"
                  onClick={() => handleClick("images/banner.png")}
                />
              </h3>
            </div>
            <div>
              <h3 className="relative">
                <img src="images/banner.png" alt="" />
                <MdFullscreen
                  className="absolute top-[10px] right-[10px] text-2xl text-white"
                  onClick={() => handleClick("images/banner.png")}
                />
              </h3>
            </div>
            <div>
              <h3 className="relative">
                <img src="images/banner.png" alt="" />
                <MdFullscreen
                  className="absolute top-[10px] right-[10px] text-2xl"
                  onClick={() => handleClick("images/banner.png")}
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
            <FaStar className="text-[#FFD550]" />
            <FaStar className="text-[#FFD550]" />
            <FaStar className="text-[#FFD550]" />
            <FaStar className="text-[#FFD550]" />
            <FaStar className="text-[#FFD550]" />
            <span>(142)</span>
          </div>

          <h1 className="font-['Poppins'] font-semibold text-[36px] leading-12 border-b border-solid border-[#CBCBCB] pb-[20px]">
            NexSUS ROCK Strix Scar 17 Gaming Laptop 15.7” 1TB SSD 16GB RAM Pro
          </h1>

          <div className="flex items-center gap-4">
            <p className="font-['Poppins'] font-bold text-[56px] text-[#FF624C]">
              $2,999.99
            </p>
            <small className="font-['Montserrat'] font-normal text-[20px] text-[#CBCBCB]">
              <del>$5,499.99</del>
            </small>
          </div>

          <div>
            <ul className="flex gap-x-[108px] mb-4">
              <li className="font-['Poppins'] font-semibold text-[20px] w-[83px]">
                Brand
              </li>
              <li className="font-['Poppins'] font-normal text-[20px] text-[#3E3E3E]">
                NexSUS Tech Company
              </li>
            </ul>
            <ul className="flex gap-x-[108px] mb-4">
              <li className="font-['Poppins'] font-semibold text-[20px] w-[83px]">
                Size
              </li>
              <li className="font-['Poppins'] font-normal text-[20px] text-[#3E3E3E]">
                15.7 x 11.1 x 1.0 inches (W x D x H)
              </li>
            </ul>
            <ul className="flex gap-x-[108px] mb-4">
              <li className="font-['Poppins'] font-semibold text-[20px] w-[83px]">
                Weight
              </li>
              <li className="font-['Poppins'] font-normal text-[20px] text-[#3E3E3E]">
                6.28 pounds
              </li>
            </ul>
            <ul className="flex gap-x-[108px] mb-4">
              <li className="font-['Poppins'] font-semibold text-[20px] w-[83px]">
                Delivery
              </li>
              <li className="font-['Poppins'] font-normal text-[20px] text-[#3E3E3E]">
                Worldwide
              </li>
            </ul>
            <ul className="flex gap-x-[108px] mb-4">
              <li className="font-['Poppins'] font-semibold text-[20px] w-[83px]">
                Variant
              </li>
              <li className="font-['Poppins'] font-normal text-[20px] text-[#3E3E3E]">
                <button className="py-4 px-8 border border-solid border-black rounded mr-[5px] cursor-pointer hover:text-[#ff624c] hover:border-[#ff624c]">
                  Off White
                </button>
                <button className="py-4 px-8 border border-solid border-black rounded mr-[5px] cursor-pointer hover:text-[#ff624c] hover:border-[#ff624c]">
                  Space Gray
                </button>
                <button className="py-4 px-8 border border-solid border-black rounded cursor-pointer hover:text-[#ff624c] hover:border-[#ff624c]">
                  Jet Black
                </button>
                <button
                  disabled
                  className="py-4 px-8 border border-solid border-[#d9d9d9] text-[#d9d9d9] rounded mt-[10px] cursor-pointer "
                >
                  Cinnamon Red
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-[60px]">
        <div className="w-[49%]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div>
                <ShippingIcon />
              </div>
              <div>
                <h6 className='font-["Montserrat"] font-bold text-base'>
                  Free Shipping
                </h6>
                <p className='font-["Montserrat"] font-normal text-base'>
                  Worldwide available
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div>
                <SecureIcon />
              </div>
              <div>
                <h6 className='font-["Montserrat"] font-bold text-base'>
                  100% Guaranteed
                </h6>
                <p className='font-["Montserrat"] font-normal text-base'>
                  Receive product first
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div>
                <TransparentIcon />
              </div>
              <div>
                <h6 className='font-["Montserrat"] font-bold text-base'>
                  Return Available
                </h6>
                <p className='font-["Montserrat"] font-normal text-base'>
                  See return policy
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[49%]">
          <div className="flex">
            <div className="flex mr-35">
              <button
                className="w-[56px] h-[56px] rounded-full hover:bg-[#F4F4F4] cursor-pointer flex justify-center items-center"
                onClick={() => handleClickQuantity("minus")}
              >
                <FaMinus />
              </button>
              <input
                type="text"
                value={quantity}
                className="w-[200px] font-['Poppins'] font-semibold text-[36px] text-center"
              />
              <button
                className="w-[56px] h-[56px] rounded-full hover:bg-[#F4F4F4] cursor-pointer flex justify-center items-center"
                onClick={() => handleClickQuantity("plus")}
              >
                <FaPlus />
              </button>
            </div>
            <div className="flex gap-4 ">
              <button className="py-4 px-10 bg-[#FF624C] font-['Montserrat'] font-bold text-xl text-white rounded-lg">
                Buy Now
              </button>
              <div className="w-[62px] h-[62px] rounded border border-solid border-red-500 flex justify-center items-center text-red-500">
                <IoCartOutline className="text-[30px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* description part from here */}
      <div>
        <div className="flex gap-[35px] mb-12 mt-10">
          <h4
            className={`${
              descriptionActive && "border-b border-solid border-red-500"
            } inline-block font-['Poppins'] font-semibold text-[24px] cursor-pointer`}
            onClick={handleDescription}
          >
            Description
          </h4>
          <h4
            className={`${
              reviewActive && "border-b border-solid border-red-500"
            } inline-block font-['Poppins'] font-semibold text-[24px] cursor-pointer`}
            onClick={handleReview}
          >
            Reviews
          </h4>
        </div>

        <div className="w-full">
          {descriptionActive && (
            <div className="flex gap-[70px]">
              <div>
                <ul className="flex gap-x-[108px] mb-4">
                  <li className="font-['Poppins'] font-semibold text-[20px] w-[83px]">
                    Brand
                  </li>
                  <li className="font-['Montserrat'] font-normal text-[20px] text-[#3E3E3E] w-[531px]">
                    NexSUS Tech Company
                  </li>
                </ul>
                <ul className="flex gap-x-[108px] mb-4">
                  <li className="font-['Poppins'] font-semibold text-[20px] w-[83px]">
                    Display
                  </li>
                  <li className="font-['Montserrat'] font-normal text-[20px] text-[#3E3E3E] w-[531px]">
                    17.3-inch Full HD (1920 x 1080) IPS panel, 144Hz refresh rate, 3ms response time, 100% sRGB color gamut, Adaptive-Sync technology, anti-glare
                  </li>
                </ul>
                <ul className="flex gap-x-[108px] mb-4">
                  <li className="font-['Poppins'] font-semibold text-[20px] w-[83px]">
                    Processor
                  </li>
                  <li className="font-['Montserrat'] font-normal text-[20px] text-[#3E3E3E] w-[531px]">
                    10th Gen Intel Core i9-10980HK (8 cores, 16 threads, 2.4GHz base clock speed, up to 5.3GHz turbo boost)
                  </li>
                </ul>
                <ul className="flex gap-x-[108px] mb-4">
                  <li className="font-['Poppins'] font-semibold text-[20px] w-[83px]">
                    Graphics
                  </li>
                  <li className="font-['Montserrat'] font-normal text-[20px] text-[#3E3E3E] w-[531px]">
                    NVIDIA GeForce RTX 3080 (16GB GDDR6 VRAM)
                  </li>
                </ul>
                <ul className="flex gap-x-[108px] mb-4">
                  <li className="font-['Poppins'] font-semibold text-[20px] w-[83px]">
                    Memory
                  </li>
                  <li className="font-['Montserrat'] font-normal text-[20px] text-[#3E3E3E] w-[531px]">
                    32GB DDR4-3200 RAM
                  </li>
                </ul>
                <ul className="flex gap-x-[108px] mb-4">
                  <li className="font-['Poppins'] font-semibold text-[20px] w-[83px]">
                    Storage
                  </li>
                  <li className="font-['Montserrat'] font-normal text-[20px] text-[#3E3E3E] w-[531px]">
                    1TB PCIe NVMe M.2 SSD
                  </li>
                </ul>
              </div>
              
              <div>
                <ul className="flex gap-x-[108px] mb-4">
                  <li className="font-['Poppins'] font-semibold text-[20px] w-[83px]">
                    Audio
                  </li>
                  <li className="font-['Montserrat'] font-normal text-[20px] text-[#3E3E3E] w-[531px]">
                    2 x 4W speakers with Smart Amp technology
                  </li>
                </ul>
                <ul className="flex gap-x-[108px] mb-4">
                  <li className="font-['Poppins'] font-semibold text-[20px] w-[83px]">
                    Connection
                  </li>
                  <li className="font-['Montserrat'] font-normal text-[20px] text-[#3E3E3E] w-[531px]">
                    Wi-Fi 6 (802.11ax), Bluetooth 5.1, Gigabit Ethernet, HDMI 2.0b, USB 3.2 Gen 2 Type-C with DisplayPort 1.4 and Power Delivery, 3 x USB 3.2 Gen 1 Type-A, 3.5mm audio
                  </li>
                </ul>
                <ul className="flex gap-x-[108px] mb-4">
                  <li className="font-['Poppins'] font-semibold text-[20px] w-[83px]">
                    Keyboard
                  </li>
                  <li className="font-['Montserrat'] font-normal text-[20px] text-[#3E3E3E] w-[531px]">
                   Backlit Chiclet keyboard, N-key rollover, per-key RGB lighting, Aura Sync technology
                  </li>
                </ul>
                <ul className="flex gap-x-[108px] mb-4">
                  <li className="font-['Poppins'] font-semibold text-[20px] w-[83px]">
                    Battery
                  </li>
                  <li className="font-['Montserrat'] font-normal text-[20px] text-[#3E3E3E] w-[531px]">
                   4-cell 90Wh lithium battery (up to 8 hours battery life)
                  </li>
                </ul>
                <ul className="flex gap-x-[108px] mb-4">
                  <li className="font-['Poppins'] font-semibold text-[20px] w-[83px]">
                    Dimensions
                  </li>
                  <li className="font-['Montserrat'] font-normal text-[20px] text-[#3E3E3E] w-[531px]">
                   15.7 x 11.1 x 1.0 inches (W x D x H)
                  </li>
                </ul>
                <ul className="flex gap-x-[108px] mb-4">
                  <li className="font-['Poppins'] font-semibold text-[20px] w-[83px]">
                    Weight
                  </li>
                  <li className="font-['Montserrat'] font-normal text-[20px] text-[#3E3E3E] w-[531px]">
                    6.28 pounds
                  </li>
                </ul>
              </div>
              
            </div>
          )}
          {reviewActive && <h1>review</h1>}
        </div>
      </div>

      <NewProduct heading="Related Products"/>

      {active && (
        <div className="fixed top-0 left-0 bg-[rgba(0,0,0,.5)] w-full h-screen flex justify-center items-center">
          <IoMdClose
            className="absolute text-white text-3xl top-[200px] right-[230px]"
            onClick={() => setActive(false)}
          />
          <img src={image} alt="" />
        </div>
      )}
    </Container>
  );
};

export default ProductDetailsPage;
