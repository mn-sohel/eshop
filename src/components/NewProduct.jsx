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
            <ProductLayout 
              img={"images/newProductImg.png"} 
              percentTag={true}
              discountRetangle={true}
              discountCircle={false} 
              percentage="50%" 
              category="WATCH" 
              title="Orange Watch 12 High Quality Health Sensor..." 
              rating="5" 
              totalRating="120" 
              price="959.99" 
              border={true} 
              bg="transparent" 
              stock={stock} 
              stockAmount="505"
            />
            <ProductLayout 
              img={"images/newProductImg.png"} 
              percentTag={false} 
              category="TABLET" 
              title="Ultra Tablet Qwerty HD 10765 Series Low Pri..." 
              rating="5" 
              totalRating="100" 
              price="799.00" 
              border={true} 
              bg="transparent" 
              stock={stock} 
              stockAmount="260"
            />
            <ProductLayout 
              img={"images/newProductImg.png"} 
              percentTag={false} 
              category="AUDIO" 
              title="Ultra Tablet Qwerty HD 10765 Series Low Pri..." 
              rating="5" 
              totalRating="100" 
              price="799.00" 
              border={true} 
              bg="transparent" 
              stock={stock} 
              stockAmount="260"
            />
            
            {/* <ProductLayout 
              img={"images/newProductImg.png"} 
              percentTag={true} 
              category="AUDIO" 
              title="QuietComfort 45 Wireless Headphone ..." 
              rating="5" 
              totalRating="120" 
              price="329.99" 
              border={true} 
              bg="transparent" 
              stock={stock} 
              stockAmount="150"
            /> */}
            <ProductLayout 
              img={"images/newProductImg.png"} 
              percentTag={true}
              discountRetangle={true}
              discountCircle={false} 
              category="LAPTOP" 
              title="Surface Laptop 4 XPS 13 Plus 64GB i7 Touch ..." 
              rating="5" 
              totalRating="120" 
              price="2399.99" 
              border={true} 
              bg="transparent" 
              stock={stock} 
              stockAmount="520"
            />
            <ProductLayout 
              img={"images/newProductImg.png"} 
              percentTag={false} 
              category="CAMERA" 
              title="CamPro HERO10 Black Sleek Design 2023 4K ..." 
              rating="5" 
              totalRating="20" 
              price="1499.99" 
              border={true} 
              bg="transparent" 
              stock={stock} 
              stockAmount="250"
            />
        </div>
        <div className='flex justify-center mt-20'>
            <Button text="Load More" bg="transparent" border="1px solid #FF624C" color="#FF624C"/>
        </div>
   
    </Container>
    </div>
  )
}

export default NewProduct