import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'
import { IoCartOutline, IoShareSocialOutline } from 'react-icons/io5'

const ProductLayout = ({
    percentTag=false, 
    discountRetangle,
    discountCircle,
    percentage="20%", 
    category,
    title, 
    rating, 
    totalRating, 
    price, 
    border, 
    bg,
    stock, 
    stockAmount, 
    img
}) => {
    const [ratingValue, setRatingValue] = useState(new Array(+rating).fill(rating));
    // console.log(ratingValue);
    
  return (
    <div style={{background: bg}} className='border border-transparent hover:border-[#C3C3C3] duration-300 p-6 group rounded-lg'>
        <div className='relative'>
            <img className='w-full' src={img}  />
            {percentTag && (
                discountRetangle ? (
                <div className='bg-[#FF624C] py-[7px] px-5 absolute top-[-8px] right-[-9px] rounded-md font-["Montserrat"] font-bold text-base text-white'>          {percentage}
                </div>
                ) : discountCircle ? (
                    <div className="font-['Montserrat'] text-base text-white font-bold bg-[#FF624C] w-[100px] h-[100px] flex justify-center items-center rounded-full absolute right-[0] top-[0px]">{percentage}
                    </div>
                ) : null)}
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
            <p className='font-["Montserrat"] font-normal text-sm leading-5 uppercase tracking-[5px] mt-[46px] mb-4'>{category}</p>
            <h3 className='font-["Poppins"] font-semibold text-xl leading-[30px] group-hover:text-[#FF624C] group-hover:underline duration-300'>{title}</h3>
            <div className='flex items-center gap-2 text-[#FED550] mt-1 mb-6'>
                {ratingValue.map((item, index) => (
                    <FaStar key={index}/>
                ))}
                <span className='text-[#303030] font-["Montserrat"] font-normal text-base'> ( {totalRating} ) </span>
            </div>
            <p className='font-["Poppins"] font-semibold text-2xl leading-[30px]'>${price}</p>
            {stock && 
                <div className='relative w-full h-[30px] bg-[#ddd] rounded-[25px]'>
                <div className='w-1/2 h-[30px] bg-[#333] rounded-[25px]'></div>
                    <p className='absolute top-[50%] left-[47%] -translate-y-[50%] -translate-x-[48%] text-white font-["Montserrat"] font-bold text-sm'>
                    $ {stockAmount} AVAILABLE</p>
            </div>
            }
        </div>
    </div>
  )
}

export default ProductLayout