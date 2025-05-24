import React from 'react'
import ProductLayout from './commonLayouts/ProductLayout'
import Container from './commonLayouts/Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

 function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  
  return (

  <div className={className} style={{ ...style, color:"#303030", fontSize:"20px", width:"40px", height:"40px", borderRadius:"50%", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid #303030" }} onClick={onClick}><FaAngleRight /></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (

    <div className={className} style={{ ...style, color:"#303030", fontSize:"20px", width:"40px", height:"40px", borderRadius:"50%", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid #303030" }} onClick={onClick}><FaAngleLeft /></div>
  );
}


const FeaturedProduct = ({stock=false}) => {

    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplay: true,
    autoplaySpeed: 1000,
  };
  return (

    <div className='mt-[80px]'>
      <Container>
        {/* <div className='flex gap-1'> */}
        <div className='flex justify-between mb-12'>
            <div>
              <h2 className='font-["Poppins"] font-semibold text-[36px]'>Featured Products</h2>
            </div>
            <div className='flex items-center gap-2 text-[#FF624C]'>
              <p className='font-["Montserrat"] font-bold text-base'>View All </p>
              <HiOutlineArrowLongRight />
            </div>
        </div>
        <Slider {...settings}>
            <ProductLayout 
              img={"images/productImage.png"} 
              percentTag={false} 
              category="PHONE" 
              title="JPhone 13 High Quality Value Buy Best Cam..." 
              rating="4" 
              totalRating="50" 
              price="999.00" 
              border={true} 
              bg="transparent" 
              stock={stock} 
              stockAmount="505"
            />
            <ProductLayout 
              img={"images/productImage.png"} 
              percentTag={true} 
              discountRetangle={true}
              discountCircle={false}
              percentage="50%" 
              category="AUDIO" 
              title="WH-1000XM4 Wireless Headphones High Qu..." 
              rating="3" 
              totalRating="120" 
              price="59" 
              border={true} 
              bg="transparent" 
              stock={stock} 
              stockAmount="260"
            />
            <ProductLayout 
              img={"images/productImage.png"} 
              percentTag={false} 
              category="LAPTOP" 
              title="S21 Laptop Ultra HD LED Screen Feature 2023 ..." 
              rating="5" 
              totalRating="100" 
              price="1199.00" 
              border={true} 
              bg="transparent" 
              stock={stock} 
              stockAmount="150"
            />
            <ProductLayout 
              img={"images/productImage.png"} 
              percentTag={false} category="CAMERA" 
              title="Mini Polaroid Camera for Girls with Flash Li..." 
              rating="1" 
              totalRating="70" 
              price="79.00" 
              border={true} 
              bg="transparent" 
              stock={stock} 
              stockAmount="520"
            />
            <ProductLayout 
              img={"images/productImage.png"} 
              percentTag={false} 
              category="TELEVISION" 
              title="AG OLED65CXPUA 4K Smart OLED TV New ..." 
              rating="2" totalRating="20" price="2799.00" 
              border={true} 
              bg="transparent" 
              stock={stock} 
              stockAmount="250"
            />
        </Slider>
        {/* </div> */}
    </Container>
    </div>
  )
}

export default FeaturedProduct