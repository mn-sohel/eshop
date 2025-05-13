import React from 'react'
import Container from '../commonLayouts/Container'
import Button from '../Button'

const FooterTop = () => {
  return (
    <Container>
        <div className='bg-[linear-gradient(90deg,rgba(244,244,244,1)29%,rgba(217,217,217,1)43%)] py-[114px] px-[100px] rounded-[25px]'>
            <h3 className='font-["Poppins"] font-semibold text-4xl'>Get Our Updates</h3>
            <p className='font-["Montserrat"] font-normal text-xl max-w-[475px] leading-[30px] mt-4 mb-8'>Browse our wide selection of electronics and find the perfect promo for you from newsletter.</p>
            <input className='w-[494px] bg-white border border-[#ccc] py-[18px] px-6 rounded-[10px] mb-4' type="text" placeholder='Enter your email address ...' />
            <br/>
            <Button text="Subscribe"/>
        </div>
    </Container>
    
  )
}

export default FooterTop