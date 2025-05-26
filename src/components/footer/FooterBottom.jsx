import React from 'react'
import Container from '../commonLayouts/Container'
import { Link } from 'react-router-dom'
import { IoCall, IoLocationSharp } from 'react-icons/io5'
import { MdOutlineMail } from 'react-icons/md'

const FooterBottom = () => {
  return (
    <div className='mt-20'>
      <Container>
        <div className='flex border-b border-[#BFBFBF] pb-20'>
            <div className='mr-[167px]'>
              <img src="images/logo.png" alt="logo" />
              <ul className='mt-[158px] flex flex-col gap-3'>
                <li className='relative pl-[30px]'>
                  <div className='absolute top-[5px] left-0'>
                    <IoCall className='text-xl text-[#303030]'/>
                  </div>
                  <Link to="tel:01256952">+1 (555) 123-4567</Link>
                </li>
                <li className='relative pl-[30px]'>
                  <div className='absolute top-[5px] left-0'>
                    <MdOutlineMail className='text-xl text-[#303030]'/> 
                  </div>
                  <Link to="mailto:information@eshop.com">information@eshop.com</Link>
                </li>
                <li className='relative pl-[30px]'>
                  <div className='absolute top-[5px] left-0'>
                    <IoLocationSharp className='text-xl text-[#303030]'/>
                  </div>
                  <Link to="https://maps.app.goo.gl/EX96cdL6htA2pWJA7" target='_blank'>123 Main Street, Suite 105, Anytown USA</Link>
                </li>
              </ul>
            </div>
            <div className='mr-[96px]'>
              <h4 className='font-["Poppins"] font-semibold text-xl'>Links</h4>
              <ul className='mt-6 flex flex-col gap-3'>
                <Link to={"#"}>Products List</Link>
                <Link to={"#"}>Order Tracking</Link>
                <Link to={"#"}>Products Guide</Link>
                <Link to={"#"}>Shopping Cart</Link>
                <Link to={"#"}>Tech Blog</Link>
              </ul>
            </div>
            <div className='mr-[96px]'>
              <h4 className='font-["Poppins"] font-semibold text-xl'>Supports</h4>
              <ul className='mt-6 flex flex-col gap-3'>
                <Link to={"#"}>About Us</Link>
                <Link to={"#"}>Privacy Policy</Link>
                <Link to={"#"}>Return Policy</Link>
                <Link to={"#"}>Help Centre</Link>
                <Link to={"#"}>Store Locations</Link>
                <Link to={"#"}>Careers</Link>
              </ul>
            </div>
            <div className='mr-[80px]'>
              <h4 className='font-["Poppins"] font-semibold text-xl'>Categories</h4>
              <ul className='mt-6 flex flex-col gap-3'>
                <Link to={"#"}>Computers & Tablets</Link>
                <Link to={"#"}>Mobile Phones & Accessories</Link>
                <Link to={"#"}>TV & Home Theater</Link>
                <Link to={"#"}>Audio & Headphones</Link>
                <Link to={"#"}>Cameras & Camcorders</Link>
                <Link to={"#"}>Gaming Equipment</Link>
                <Link to={"#"}>Home Appliances</Link>
              </ul>
            </div>
            <div>
              <h4 className='font-["Poppins"] font-semibold text-xl mb-6'>Payments</h4>
              <img src="images/payment.png" alt="logo" />
              <h4 className='mt-[73px] font-["Poppins"] font-semibold text-xl'>Follow Us</h4>
              <ul className='mt-6 flex flex-col gap-3'>
                <Link to={"#"}>Twitter</Link>
                <Link to={"#"}>Instagram</Link>
                <Link to={"#"}>Facebook</Link>
              </ul>
            </div>
        </div>
        {/* <div className=''></div> */}
         <div className='flex justify-between mb-27 mt-2 font-["Montserrat"] font-normal text-sm text-[#303030]'>
          <div>
            <span className='font-["Montserrat"] text-[14px] text-[#303030] leading-5 font-normal'>Copyright © 2023 E-Shop. All Rights Reserved.</span>
          </div>

          <div className='flex gap-5 items-center'>
            <h5>Privacy Policy</h5>
            <h5 className='relative after:content-[""] after:bg-[#bfbfbf] after:absolute after:w-[1px] after:h-[16px] after:left-[-10px] after:top-[55%] after:-translate-[50%] before:content-[""] before:bg-[#bfbfbf] before:absolute before:w-[1px] before:h-[16px] before:right-[-10px] before:top-[55%] before:-translate-[50%]'>Terms & Condition</h5>
            <h5>Sitemap</h5>
          </div>
        </div>

      </Container>
    </div>
  )
}

export default FooterBottom