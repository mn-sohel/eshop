import React, { useEffect, useState } from 'react'
import ProductLayout from './commonLayouts/ProductLayout'
import Container from './commonLayouts/Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from './Button';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrowIcon from '../icons/NextArrowIcon';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  
  return (
  <div 
    className={className} 
    style={{ 
      ...style, 
      color:"#303030", 
      fontSize:"20px", 
      width:"72px", 
      height:"72px", 
      borderRadius:"50%", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      border: "1px solid #303030" 
    }} 
    onClick={onClick}
    >
      <NextArrowIcon/>
  </div>
  );
}


const SpringSale = () => {
  
    const [timerLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const saleEndDate = new Date('Jun 31, 2025 05:35 PM +06').getTime();
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
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1000,
    nextArrow: <SampleNextArrow />,
    pauseOnHover: true,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="bg-[#F4F4F4] py-16 mt-20">
      <Container>
        <div className='flex justify-between gap-32 relative'>
            <div className="mt-43">
                <h2 className='font-["Poppins"] font-bold text-[56px] leading-17'>Spring Sale</h2>
                <div>
              <div className="font-['Poppins'] font-semibold leading-[46px] text-4xl text-[#FF624C] flex gap-6 text-center pt-10 pb-18 ">
                <p>
                  <span>{timerLeft.days <= 9 ? `0${timerLeft.days}` : timerLeft.days}</span>
                  <span className="text-[#303030] font-['Montserrat'] font-normal text-base leading-6 block ">
                    Days
                  </span>
                </p>
                :
                <p>
                  <span>{timerLeft.hours <= 9 ? `0${timerLeft.hours}` : timerLeft.hours}</span>
                  <span className="text-[#303030] font-['Montserrat'] font-normal text-base leading-6 block ">
                    Hours
                  </span>
                </p>
                :
                <p>
                  <span>{timerLeft.minutes <= 9 ? `0${timerLeft.minutes}` : timerLeft.minutes}</span>
                  <span className="text-[#303030] font-['Montserrat'] font-normal text-base leading-6 block ">
                    Minutes
                  </span>
                </p>
                :
                <p>
                  <span>{timerLeft.seconds <= 9 ? `0${timerLeft.seconds}` : timerLeft.seconds}</span>
                  <span className="text-[#303030] font-['Montserrat'] font-normal text-base leading-6 block ">
                    Seconds
                  </span>
                </p>
              </div>
            </div>
            <div>
                <Button text={"Shop Now"}  paddingY="16px" paddingX="40px" size="20px"/>
            </div>
            </div>
            <div className='max-w-[992px] mr-10 '> 
              <Slider {...settings} className='springGap'>
                {/* {
                  springSaleData.map((item,index) => (

                  ))
                } */}
                  <ProductLayout
                    className = "hover:!bg-[#fff]" 
                    img={"images/springBox.png"}
                    hoverBorderColor={"hover:border-transparent"} 
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
                    hoverBorderColor={"hover:border-transparent"}  
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
                    hoverBorderColor={"hover:border-transparent"} 
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
                      hoverBorderColor={"hover:border-transparent"} 
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
                    hoverBorderColor={"hover:border-transparent"} 
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
            <div className=" absolute bottom-0 left-0 ">
              < img src="./images/springSaleShape.svg" alt="" />
            </div>
            
        </div>
    
    </Container>
    </div>
  )
}

export default SpringSale