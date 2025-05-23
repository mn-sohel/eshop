import React from 'react'
import ProductLayout from './commonLayouts/ProductLayout'
import Container from './commonLayouts/Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from './Button';

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
                <p className='text-[#303030]'>Sort By</p>
                <select name="sort_product" className='font-["Montserrat"] font-bold text-base'>
                    <option value="USD">USD</option>
                    <option value="BDT">BDT</option>
                    <option value="JPY">JPY</option>
                </select>
                </div>
                </div>
                <div className='flex gap-5 flex-wrap'>
                    <div className='max-w-[285px]'>
                        <ProductLayout percentTag={false} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="4" totalRating="50" price="999.00" border={true} bg="transparent" stock={stock} stockAmount="505"/>
                    </div>
                    <div className='max-w-[285px]'>
                        <ProductLayout percentTag={false} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="4" totalRating="50" price="999.00" border={true} bg="transparent" stock={stock} stockAmount="505"/>
                    </div>
                    <div className='max-w-[285px]'>
                        <ProductLayout percentTag={false} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="4" totalRating="50" price="999.00" border={true} bg="transparent" stock={stock} stockAmount="505"/>
                    </div>
                    <div className='max-w-[285px]'>
                        <ProductLayout percentTag={false} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="4" totalRating="50" price="999.00" border={true} bg="transparent" stock={stock} stockAmount="505"/>
                    </div>
                    <div className='max-w-[285px]'>
                        <ProductLayout percentTag={false} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="4" totalRating="50" price="999.00" border={true} bg="transparent" stock={stock} stockAmount="505"/>
                    </div>
                    <div className='max-w-[285px]'>
                        <ProductLayout percentTag={false} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="4" totalRating="50" price="999.00" border={true} bg="transparent" stock={stock} stockAmount="505"/>
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