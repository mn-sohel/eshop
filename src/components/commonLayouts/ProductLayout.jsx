import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'
import { IoCartOutline, IoShareSocialOutline } from 'react-icons/io5'

const ProductLayout = () => {
  return (
    <div className='border border-transparent hover:border-[#C3C3C3] duration-300 p-6 group rounded-lg'>
        <div className='relative'>
            <img src="images/productImage.png" alt="product_image" />
            <div className='bg-[#FF624C] py-[7px] px-5 absolute top-[-8px] right-[-9px] rounded-md font-["Montserrat"] font-bold text-base text-white'>50%</div>
            <div className='flex items-center absolute bottom-[6px] left-[47%] translate-x-[-50%] gap-5 scale-0 group-hover:scale-100 duration-300'>
                <div className='w-[50px] h-[50px] rounded-full bg-white border border-[#FF624C] flex items-center justify-center text-[25px] text-[#FF624C] hover:bg-[#FF624C] hover:text-white duration-300 cursor-pointer'>
                    <IoCartOutline />
                </div>
                <div className='w-[50px] h-[50px] rounded-full bg-white border border-[#FF624C] flex items-center justify-center text-[25px] text-[#FF624C] hover:bg-[#FF624C] hover:text-white duration-300 cursor-pointer'>
                    <CiHeart />
                </div>
                <div className='w-[50px] h-[50px] rounded-full bg-white border border-[#FF624C] flex items-center justify-center text-[25px] text-[#FF624C] hover:bg-[#FF624C] hover:text-white duration-300 cursor-pointer'>
                    <IoShareSocialOutline />
                </div>
            </div>
        </div>
        <div>
            <p className='font-["Montserrat"] font-normal text-sm leading-5 uppercase tracking-[5px] mt-[46px] mb-4'>PHONE</p>
            <h3 className='font-["Poppins"] font-semibold text-xl leading-[30px] group-hover:text-[#FF624C] group-hover:underline duration-300'>S21 Laptop Ultra HD LED Screen Feature 2023...</h3>
            <div className='flex items-center gap-2 text-[#FED550] mt-1 mb-6'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className='text-[#303030] font-["Montserrat"] font-normal text-base'> ( 100 ) </span>
            </div>
            <p className='font-["Poppins"] font-semibold text-2xl leading-[30px]'>$1,199.00</p>
        </div>
    </div>
  )
}

export default ProductLayout