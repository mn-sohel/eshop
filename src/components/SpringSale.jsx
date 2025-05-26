import React, { useEffect, useState } from 'react'
import ProductLayout from './commonLayouts/ProductLayout'
import Container from './commonLayouts/Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from './Button';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

// const springSaleData = [
//   {
//     img={"images/springBox.png"}, 
//     percentTag={true}, 
//     discountRetangle={false}
//     discountCircle={true}
//     percentage="10%" 
//     category="TELEVISION" 
//     title="LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color Enhancer USB ..." 
//     rating="5" 
//     totalRating="100" 
//     price="4599.00" 
//     border={true} 
//     // bg="transparent" 
//     // bg={"#EAEAEA"} 
//     bg={"#fff"} 
//     stock={true} 
//     stockAmount="50"
//     padding={"p-10"}
//   }
// ]


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

const SpringSale = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const saleEndDate = new Date('May 30, 2025 10:00 PM +06').getTime();
        const now = new Date().getTime();
        const difference = saleEndDate - now;
        // console.log(difference);

        if(difference < 0) {
            return {Days: 0, Hours: 0, Minutes: 0, Seconds: 0 };
        }
        return {
            days: Math.floor(difference/ (1000 * 60 * 60 * 24 )),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60 )),
            minutes: Math.floor((difference % (1000 * 60 * 60 )) / (1000 * 60 )),
            seconds: Math.floor((difference % (1000 * 60 ) / 1000 ))
        }
    }
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft)
        },1000)
        return () => clearInterval(timer);
    },[])


    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    // autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className='mt-[80px]' style={{background: "url('images/springBg.png')"}}>
      <Container>
        <div className='flex justify-between items-center pt-16 pb-16'>
            <div>
                <h2 className='font-["Poppins"] font-bold text-[56px] leading-17'>Spring Sale</h2>
                <div className='text-[#FF624C] font-["Poppins"] font-semibold text-[36px] leading-[46px] flex gap-[38px] mt-8'>
                    <span>{timeLeft.days}</span> : <span>{timeLeft.hours}</span> : <span>{timeLeft.minutes}</span> : <span>{timeLeft.seconds}</span> 
                </div>
                <div className='font-["Montserrat"] font-normal text-base leading-6 flex gap-[58px] mb-18'>
                    <span>Days</span><span>Hours</span><span>Minutes</span><span>Seconds</span> 
                </div>
                <Button text={"Shop Now"}/>
            </div>
            <div className='max-w-[902px]'>
              <Slider {...settings} className='springGap'>
                {/* {
                  springSaleData.map((item,index) => (

                  ))
                } */}
                  <ProductLayout
                    className = "hover:!bg-[#fff]"
                    img={"images/springBox.png"} 
                    percentTag={true} 
                    discountRetangle={false}
                    discountCircle={true}
                    percentage="10%" 
                    category="TELEVISION" 
                    title="LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color Enhancer USB ..." 
                    rating="5" 
                    totalRating="100" 
                    price="4599.00" 
                    border={true} 
                    bg="#EAEAEA" 
                    stock={true} 
                    stockAmount="50"
                    padding={"p-10"}
                    />
                  <ProductLayout 
                  className = "hover:!bg-[#fff]"
                    img={"images/springBox.png"} 
                    percentTag={true} 
                    discountRetangle={false}
                    discountCircle={true}
                    percentage="50%" 
                    category="CAMERA" 
                    title="VBI Mini 2 Fly More Combo Drone Sjrc F22S 4K Pro Ptz 5 Km Version Alpha ..." 
                    rating="5" 
                    totalRating="100" 
                    price="819.00" 
                    border={true}  
                    bg="#EAEAEA"
                    stock={true} 
                    stockAmount="LIMITED STOCK"
                    padding={"p-10"}
                    />
                  <ProductLayout 
                    className = "hover:!bg-[#fff]"
                    img={"images/springBox.png"} 
                    percentTag={false} 
                    category="LAPTOP" 
                    title="LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color Enhancer USB ..." 
                    rating="5" 
                    totalRating="100" 
                    price="1199.00" 
                    border={true}  
                    bg="#EAEAEA"
                    stock={true} 
                    stockAmount="50"
                    padding={"p-10"}
                  />
                  <ProductLayout 
                    className = "hover:!bg-[#fff]"
                    img={"images/springBox.png"} 
                    percentTag={false} category="CAMERA" 
                    title="VBI Mini 2 Fly More Combo Drone Sjrc F22S 4K Pro Ptz 5 Km Version Alpha ..." 
                    rating="1" 
                    totalRating="70" 
                    price="79.00" 
                    border={true}  
                    bg="#EAEAEA"
                    stock={true} 
                    stockAmount="LIMITED STOCK"
                    padding={"p-10"}
                    />
                  <ProductLayout 
                  className = "hover:!bg-[#fff]"
                  img={"images/springBox.png"} 
                  percentTag={false} 
                  category="TELEVISION"  
                  title="LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color Enhancer USB ..." 
                  rating="2" totalRating="20" 
                  price="2799.00" 
                  border={true}  
                  bg="#EAEAEA"
                  stock={true} 
                  stockAmount="50"
                  padding={"p-10"}
                  />
              </Slider>
            </div>
            
        </div>
    
    </Container>
    </div>
  )
}

export default SpringSale