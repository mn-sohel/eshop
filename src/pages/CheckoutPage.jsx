import React, { useState } from 'react'
import Container from '../components/commonLayouts/Container'
import Box from '../components/Box';
import Button from '../components/Button';

const CheckoutPage = () => {
  let [active, setActive] = useState("Information");

  return (
    <Container>
      <div className="flex gap-[16px] mt-16 mb-12">
        <span className='font-["Montserrat"] font-normal text-[16px] relative after:absolute after:w-[1px] after:h-full after:bg-[#4D4D4D] after:content-[""] after:top-0 after:right-[-8px]'>
          Home
        </span>
        <span className='font-["Montserrat"] font-normal text-[16px] relative after:absolute after:w-[1px] after:h-full after:bg-[#4D4D4D] after:content-[""] after:top-0 after:right-[-8px]'>
          Cart
        </span>
        <span className='font-["Montserrat"] font-normal text-[16px]'>
          Checkout
        </span>
      </div>

      <div className='text-center'>
          <h2 className='font-["Poppins"] font-bold text-[56px]'>Checkout</h2>
          <div className='flex gap-[63px] justify-center font-["Poppins"] font-semibold text-[24px] text-[#cbcbcb] my-10'>
            <div className='flex items-center gap-[10px]'>
              {active == "Information" &&
                <div className='w-[50px] h-[50px] rounded-full bg-[#ff624c] text-white flex justify-center items-center'>01</div>
              }
              <p className={`${active == "Information" && "border-b-4 border-solid border-red-500 text-black cursor-pointer"}`} onClick={()=>setActive("Information")}>Information</p>
            </div>
            <div className='flex items-center gap-[10px]' onClick={()=>setActive("Shipping")}>
              {active == "Shipping" &&
                <div className='w-[50px] h-[50px] rounded-full bg-[#ff624c] text-white flex justify-center items-center'>02</div>
              }
              <p  className={`${active == "Shipping" && "border-b-4 border-solid border-red-500 text-black cursor-pointer"}`}>Shipping</p>
            </div>
            <div className='flex items-center gap-[10px]'>
              {active == "Payment" &&
                <div className='w-[50px] h-[50px] rounded-full bg-[#ff624c] text-white flex justify-center items-center'>03</div>
              }
              <p className={`${active == "Payment" && "border-b-4 border-solid border-red-500 text-black cursor-pointer"}`} onClick={()=>setActive("Payment")}>Payment</p>
            </div>
          </div>
      </div>
      
      <div className='flex'>
          <div className='w-[60%] flex flex-wrap gap-[10px]'>
            {/* first & last name */}
            <div className='w-[49%]'>
             <Box inputType={"First Name"} placeholder={"Enter Your First Name"}/>
            </div>
            <div className='w-[49%]'>
             <Box inputType={"Last Name"} placeholder={"Enter Your Last Name"}/>
            </div>
            {/* phone & email */}
            <div className='w-[49%]'>
             <Box inputType={"Phone Number"} placeholder={"Enter Your Phone No"}/>
            </div>
            <div className='w-[49%]'>
             <Box inputType={"Email Address"} placeholder={"Enter Your Email Address"}/>
            </div>
            {/* address */}
            <div className='w-full'>
             <Box inputType={"Address"} placeholder={"Enter Your Address"}/>
            </div>
            {/* country & state */}
            <div className='w-[49%]'>
             <Box inputType={"Country"} placeholder={"Enter Your Country Name"}/>
            </div>
            <div className='w-[49%]'>
             <Box inputType={"State"} placeholder={"Enter Your State Name"}/>
            </div>
            {/* city & zip code */}
            <div className='w-[49%]'>
             <Box inputType={"City"} placeholder={"Enter Your City Name"}/>
            </div>
            <div className='w-[49%]'>
             <Box inputType={"ZIP Code"} placeholder={"Enter Your Address ZIP Code"}/>
            </div>
            {/* order notes */}
            <div className='w-[100%]'>
             <Box inputType={"Order Notes"} placeholder={"Enter your order notes ..."} type={"textarea"}/>
            </div>
          </div>
          <div className='w-[40%]'>
            <div className='bg-[#f4f4f4] rounded-[25px] p-10'>
              <h4 className='font-["Poppins"] font-semibold text-[24px]'>Order Summary</h4>
              {/* 1 */}
              <div className='flex justify-between font-["Montserrat"] font-normal text-[20px] border-b border-solid border-[#ccc] pb-[20px] mt-[10px]'>
                <div className='w-[250px]'>
                  <p>2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD</p>
                </div>
                <div className='font-bold'>1</div>
                <div className='font-bold'>$1,659.00</div>
              </div>
              {/* 2 */}
              <div className='flex justify-between font-["Montserrat"] font-normal text-[20px] border-b border-solid border-[#ccc] pb-[20px] mt-[10px]'>
                <div className='w-[250px]'>
                  <p>Mobile Watch A Series GPS 7/144 45 mm Red Rubber Band</p>
                </div>
                <div className='font-bold'>1</div>
                <div className='font-bold'>$,999.00</div>
              </div>
              {/* 3 */}
              <div className='flex justify-between font-["Montserrat"] font-normal text-[20px] border-b border-solid border-[#ccc] pb-[20px] mt-[10px]'>
                <div className='w-[250px]'>
                  <p>LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color USB HQ</p>
                </div>
                <div className='font-bold'>2</div>
                <div className='font-bold'>$4,598.00</div>
              </div>
              {/* 4 */}
              <div className='flex justify-between font-["Montserrat"] font-normal text-[20px] border-b border-solid border-[#ccc] pb-[20px] mt-[10px]'>
                <div className='w-[250px]'>
                  <p>Console Game Stick HD Wireless Bluetooth Connect</p>
                </div>
                <div className='font-bold'>2</div>
                <div className='font-bold'>$218.00</div>
              </div>
              {/* 5 */}
              <div className='flex justify-between font-["Montserrat"] font-normal text-[20px] border-b border-solid border-[#ccc] pb-[20px] mt-[10px]'>
                <div className='w-[250px]'>
                  <p>Mini Tablet Pro 16 inch HD Pencil 128 GB System RAM 28</p>
                </div>
                <div className='font-bold'>1</div>
                <div className='font-bold'>$259.00</div>
              </div>
              {/* 6 */}
              <div className='flex justify-between font-["Montserrat"] font-normal text-[20px]  pb-[20px] mt-[10px]'>
                <div className='w-[250px]'>
                  <p>Shipping Fee</p>
                </div>
                {/* <div className='font-bold'>1</div> */}
                <div className='font-bold'>$10.00</div>
              </div>
                {/* total part */}
              <div className='bg-white rounded-[10px] p-6'>
                <div className='flex justify-between mb-[27px]'>
                  <p>Total</p>
                  <p>$4,999.00</p>
                </div>
                <Button text="Order Now" paddingY="16px" paddingX="190px"/>
              </div>
            </div>
          </div>
      </div>
    </Container>
  )
}

export default CheckoutPage