import React from 'react'
import Container from './commonLayouts/Container'
import HeadPhoneIcon from '../icons/HeadPhoneIcon'
import SecureIcon from '../icons/SecureIcon'
import ShippingIcon from '../icons/ShippingIcon'
import TransparentIcon from '../icons/TransparentIcon'

const Facility = () => {
  return (
    <div className='mb-20'>
        <Container>
            <div className='flex justify-between items-center'>
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
                        <ShippingIcon  />
                    </div>
                    <div>
                        <h6 className='font-["Montserrat"] font-bold text-base'>Shipping</h6>
                        <p className='font-["Montserrat"] font-normal text-base'>Free, fast, and reliable worldwide</p>
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <div>
                        <TransparentIcon/>
                    </div>
                    <div>
                        <h6 className='font-["Montserrat"] font-bold text-base'>Transparent</h6>
                        <p className='font-["Montserrat"] font-normal text-base'>Hassle-free return policy</p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Facility