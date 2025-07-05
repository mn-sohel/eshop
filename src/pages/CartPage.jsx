import React from 'react'
import Container from '../components/commonLayouts/Container'
import Counter from '../components/Counter'
import Button from '../components/Button'
import HeadPhoneIcon from '../icons/HeadPhoneIcon'
import SecureIcon from '../icons/SecureIcon'
import ShippingIcon from '../icons/ShippingIcon'
import TransparentIcon from '../icons/TransparentIcon'

const CartPage = () => {
  return (
    <>
        <Container>
        <div className='flex bg-[#ddd] py-8 px-14 rounded-[15px]'>
            <span className='w-[40%]'>Product</span>
            <span className='w-[20%]'>Price</span>
            <span className='w-[20%]'>QTY</span>
            <span className='w-[20%]'>Total</span>
        </div>
        {/* 1 */}
        <div className='flex py-8 px-14 rounded-[15px]'>
            <div className='w-[55%] flex gap-[62px]'>
                <img className='w-[237px] h-[214px] object-cover' src="images/banner.png" alt="" />
                <div>
                    <p className='font-["Montserrat"] font-normal text-[14px]'>L A P T O P</p>
                    <h3 className='font-["Poppins"] font-semibold text-[20px] mt-4 mb-11 w-[314px]'>2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD</h3>
                    <p className='font-["Montserrat"] font-normal text-[16px]'><b className='font-bold'>Variant</b>Space Gray</p>
                </div>
            </div>
            <span className='w-[15%] font-["Poppins"] font-semibold text-[20px]'>$1,659.00</span>
            <span className='w-[15%]'>
                <Counter/>
            </span>
            <span className='w-[15%] font-["Poppins"] font-semibold text-[20px]'>$1,659.00</span>
        </div>
        {/* 2 */}
        <div className='flex py-8 px-14 rounded-[15px]'>
            <div className='w-[55%] flex gap-[62px]'>
                <img className='w-[237px] h-[214px] object-cover' src="images/banner.png" alt="" />
                <div>
                    <p className='font-["Montserrat"] font-normal text-[14px]'>W A T C H</p>
                    <h3 className='font-["Poppins"] font-semibold text-[20px] mt-4 mb-11 w-[314px]'>Mobile Watch A Series GPS 7/144 45 mm Red Rubber Band</h3>
                    <p className='font-["Montserrat"] font-normal text-[16px]'><b className='font-bold'>Variant</b>Fiery Red</p>
                </div>
            </div>
            <span className='w-[15%] font-["Poppins"] font-semibold text-[20px]'>$1,659.00</span>
            <span className='w-[15%]'>
                <Counter/>
            </span>
            <span className='w-[15%] font-["Poppins"] font-semibold text-[20px]'>$1,659.00</span>
        </div>
        {/* 3 */}
        <div className='flex py-8 px-14 rounded-[15px]'>
            <div className='w-[55%] flex gap-[62px]'>
                <img className='w-[237px] h-[214px] object-cover' src="images/banner.png" alt="" />
                <div>
                    <p className='font-["Montserrat"] font-normal text-[14px]'>T E L E V I S I O N</p>
                    <h3 className='font-["Poppins"] font-semibold text-[20px] mt-4 mb-11 w-[314px]'>LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color USB HQ</h3>
                    <p className='font-["Montserrat"] font-normal text-[16px]'><b className='font-bold'>Variant</b>Jet Black</p>
                </div>
            </div>
            <span className='w-[15%] font-["Poppins"] font-semibold text-[20px]'>$1,659.00</span>
            <span className='w-[15%]'>
                <Counter/>
            </span>
            <span className='w-[15%] font-["Poppins"] font-semibold text-[20px]'>$1,659.00</span>
        </div>
        {/* 4 */}
        <div className='flex py-8 px-14 rounded-[15px]'>
            <div className='w-[55%] flex gap-[62px]'>
                <img className='w-[237px] h-[214px] object-cover' src="images/banner.png" alt="" />
                <div>
                    <p className='font-["Montserrat"] font-normal text-[14px]'>G A M I N G</p>
                    <h3 className='font-["Poppins"] font-semibold text-[20px] mt-4 mb-11 w-[314px]'>Console Game Stick HD Wireless Bluetooth Connect</h3>
                    <p className='font-["Montserrat"] font-normal text-[16px]'><b className='font-bold'>Variant</b>White</p>
                </div>
            </div>
            <span className='w-[15%] font-["Poppins"] font-semibold text-[20px]'>$1,659.00</span>
            <span className='w-[15%]'>
                <Counter/>
            </span>
            <span className='w-[15%] font-["Poppins"] font-semibold text-[20px]'>$1,659.00</span>
        </div>
        {/* 5 */}
        <div className='flex py-8 px-14 rounded-[15px]'>
            <div className='w-[55%] flex gap-[62px]'>
                <img className='w-[237px] h-[214px] object-cover' src="images/banner.png" alt="" />
                <div>
                    <p className='font-["Montserrat"] font-normal text-[14px]'>T A B L E T</p>
                    <h3 className='font-["Poppins"] font-semibold text-[20px] mt-4 mb-11 w-[314px]'>Mini Tablet Pro 16 inch HD Pencil 128 GB System RAM 28</h3>
                    <p className='font-["Montserrat"] font-normal text-[16px]'><b className='font-bold'>Variant</b>Space Gray (with Case)</p>
                </div>
            </div>
            <span className='w-[15%] font-["Poppins"] font-semibold text-[20px]'>$1,659.00</span>
            <span className='w-[15%]'>
                <Counter/>
            </span>
            <span className='w-[15%] font-["Poppins"] font-semibold text-[20px]'>$1,659.00</span>
        </div>
        <div className='flex justify-end mb-25 items-center'>
            <h4 className='font-["Poppins"] font-semibold text-[20px] mr-14'>Continue Shopping</h4>
            <Button text={"Update Cart"} paddingY="16px" paddingX="50px"/>
        </div>
        {/* facility topic */}
        <div className='relative flex justify-between items-center my-20'>
                <div className='flex items-center gap-6'>
                    <div>
                        <HeadPhoneIcon/>
                    </div>
                    <div>
                        <h6 className='font-["Montserrat"] font-bold text-base'>Responsive</h6>
                        <p className='font-["Montserrat"] font-normal text-base'>Customer service available 24/7</p>
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <div>
                        <SecureIcon/>
                    </div>
                    <div>
                        <h6 className='font-["Montserrat"] font-bold text-base'>Secure</h6>
                        <p className='font-["Montserrat"] font-normal text-base'>Certified marketplace since 2017</p>
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <div>
                        <ShippingIcon />
                    </div>
                    <div>
                        <h6 className='font-["Montserrat"] font-bold text-base'>Shipping</h6>
                        <p className='font-["Montserrat"] font-normal text-base'>Free, fast, and reliable worldwide</p>
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <div>
                        <TransparentIcon />
                    </div>
                    <div>
                        <h6 className='font-["Montserrat"] font-bold text-base'>Transparent</h6>
                        <p className='font-["Montserrat"] font-normal text-base'>Hassle-free return policy</p>
                    </div>
                </div>
            </div>
    </Container>
    <div className='absolute top-465 left-0 w-full border-1 border-solid border-[#ddd]'></div>
    </>
  )
}

export default CartPage