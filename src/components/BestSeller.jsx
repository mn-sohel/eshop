import React from 'react'
import ProductLayout from './commonLayouts/ProductLayout'
import Container from './commonLayouts/Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from './Button';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const BestSeller = ({stock=false}) => {
  return (
    <div className='mt-[80px]'>
      <Container>
        <div className='flex justify-between'>
            <div className='max-w-[902px]'>
                <div className='flex justify-between mb-12'>
                    <div>
                        <h2 className='font-["Poppins"] font-semibold text-[36px]'>Best Seller</h2>
                    </div>
                    <div className='flex items-center gap-2 text-[#FF624C]'>
                        <p className='font-["Montserrat"] font-bold text-base'>View All </p>
                        <HiOutlineArrowLongRight />
                    </div>
                </div>
                <div className='flex gap-5 flex-wrap'>
                    <div className='max-w-[285px]'>
                        <ProductLayout 
                            img={"images/bestSellerImage.png"} 
                            percentTag={false} 
                            category="AUDIO" 
                            title="Wireless Bluetooth Speaker Portable Sou..." 
                            rating="4" 
                            totalRating="50" 
                            price="1,199.00" 
                            border={true} 
                            bg="transparent" 
                            stock={stock} 
                            stockAmount="505"
                        />
                    </div>
                    <div className='max-w-[285px]'>
                        <ProductLayout 
                            img={"images/bestSellerImage.png"} 
                            percentTag={true}
                            discountRetangle={true}
                            discountCircle={false}
                            percentage="30%"  
                            category="TABLET" 
                            title="Tablet Pro 128 GB HD RAM 8 GB i8 1080P 4K ..." 
                            rating="4" 
                            totalRating="50" 
                            price="129.00" 
                            border={true} 
                            bg="transparent" 
                            stock={stock} 
                            stockAmount="505"
                        />
                    </div>
                    <div className='max-w-[285px]'>
                        <ProductLayout 
                            img={"images/bestSellerImage.png"} 
                            percentTag={false} 
                            category="WATCH" 
                            title="Mobile Watch A Series GPS 7/144 45 mm Red..." 
                            rating="4" 
                            totalRating="50" 
                            price="999.00" 
                            border={true} 
                            bg="transparent" 
                            stock={stock} 
                            stockAmount="505"
                        />
                    </div>
                    <div className='max-w-[285px]'>
                        <ProductLayout 
                            img={"images/bestSellerImage.png"} 
                            percentTag={false} 
                            category="PHONE" 
                            title="LT Phone RAM 16/256 GB Rose Gold Guaran..." 
                            rating="4" 
                            totalRating="50"
                            price="999.00" 
                            border={true} 
                            bg="transparent" 
                            stock={stock} 
                            stockAmount="505"
                        />
                    </div>
                    <div className='max-w-[285px]'>
                        <ProductLayout 
                            img={"images/bestSellerImage.png"} 
                            percentTag={false} 
                            category="LAPTOP" 
                            title="Gaming Laptop ZDY 15.6 Inch 512 GB VGA ..." 
                            rating="4" 
                            totalRating="50" 
                            price="1659.00" 
                            border={true} 
                            bg="transparent" 
                            stock={stock} 
                            stockAmount="505"
                        />
                    </div>
                    <div className='max-w-[285px]'>
                        <ProductLayout 
                            img={"images/bestSellerImage.png"} 
                            percentTag={true}
                            discountRetangle={true}
                            discountCircle={false}
                            percentage="10%"   
                            category="HOME" 
                            title="Wash Machine 11 KG Front Loading Steam ..." 
                            rating="4" 
                            totalRating="50" 
                            price="5699.00" 
                            border={true} 
                            bg="transparent" 
                            stock={stock} 
                            stockAmount="505"
                        />
                    </div>
                
                </div>
            </div>
            <div>
                <img src="images/bestSellerImg.png" alt="best_seller" />
            </div>
        </div>
    
    </Container>
    </div>
  )
}

export default BestSeller