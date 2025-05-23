import React from 'react'
import ProductLayout from './commonLayouts/ProductLayout'
import Container from './commonLayouts/Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from './Button';


const NewProduct = ({stock=false}) => {

  return (

    <div className='mt-[80px]'>
      <Container>
  
        <div className='flex justify-between mb-12'>
            <div>
              <h2 className='font-["Poppins"] font-semibold text-[36px]'>New Products</h2>
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
        <div className='flex gap-1'>
            <ProductLayout percentTag={false} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="4" totalRating="50" price="999.00" border={true} bg="transparent" stock={stock} stockAmount="505"/>
            <ProductLayout percentTag={true} category="AUDIO" title="WH-1000XM4 Wireless Headphones High Qu..." rating="3" totalRating="120" price="59" border={true} bg="transparent" stock={stock} stockAmount="260"/>
            <ProductLayout percentTag={false} category="LAPTOP" title="S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating="5" totalRating="100" price="1199.00" border={true} bg="transparent" stock={stock} stockAmount="150"/>
            <ProductLayout percentTag={false} category="CAMERA" title="Mini Polaroid Camera for Girls with Flash Li..." rating="1" totalRating="70" price="79.00" border={true} bg="transparent" stock={stock} stockAmount="520"/>
            <ProductLayout percentTag={false} category="TELEVISION" title="AG OLED65CXPUA 4K Smart OLED TV New ..." rating="2" totalRating="20" price="2799.00" border={true} bg="transparent" stock={stock} stockAmount="250"/>
        </div>
        <div className='flex justify-center mt-20'>
            <Button text="Load More" bg="transparent" border="1px solid #FF624C" color="#FF624C"/>
        </div>
   
    </Container>
    </div>
  )
}

export default NewProduct