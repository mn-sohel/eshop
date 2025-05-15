import React from 'react'
import Container from '../commonLayouts/Container'
import { Link } from 'react-router-dom'

const FooterBottom = () => {
  return (
    <div className='mt-20'>
      <Container>
        <div className='flex'>
          <div className='mr-[167px]'>
             <img src="images/logo.png" alt="logo" />
             <ul className='mt-[158px] flex flex-col gap-3'>
              <Link to="tel:01256952">+1 (555) 123-4567</Link>
              <Link to="mailto:information@eshop.com">information@eshop.com</Link>
              <Link to="https://maps.app.goo.gl/EX96cdL6htA2pWJA7" target='_blank'>123 Main Street, Suite 105, Anytown USA</Link>
             </ul>
          </div>
          <div className='mr-[96px]'>
            <h4 className='font-["Poppins"] font-semibold text-xl'>Links</h4>
            <ul className='mt-6 flex flex-col gap-3'>
              <Link to={"#"}>Products List</Link>
              <Link to={"#"}>Order Tracking</Link>
              <Link to={"#"}>Products Guide</Link>
              <Link to={"#"}>Shopping Cart</Link>
              <Link to={"#"}>Tech Blog</Link>
             </ul>
          </div>
          <div className='mr-[96px]'>
            <h4 className='font-["Poppins"] font-semibold text-xl'>Supports</h4>
            <ul className='mt-6 flex flex-col gap-3'>
              <Link to={"#"}>About Us</Link>
              <Link to={"#"}>Privacy Policy</Link>
              <Link to={"#"}>Return Policy</Link>
              <Link to={"#"}>Help Centre</Link>
              <Link to={"#"}>Store Locations</Link>
              <Link to={"#"}>Careers</Link>
             </ul>
          </div>
          <div className='mr-[80px]'>
            <h4 className='font-["Poppins"] font-semibold text-xl'>Categories</h4>
            <ul className='mt-6 flex flex-col gap-3'>
              <Link to={"#"}>Computers & Tablets</Link>
              <Link to={"#"}>Mobile Phones & Accessories</Link>
              <Link to={"#"}>TV & Home Theater</Link>
              <Link to={"#"}>Audio & Headphones</Link>
              <Link to={"#"}>Cameras & Camcorders</Link>
              <Link to={"#"}>Gaming Equipment</Link>
              <Link to={"#"}>Home Appliances</Link>
             </ul>
          </div>
          <div>
             <h4 className='font-["Poppins"] font-semibold text-xl mb-6'>Payments</h4>
             <img src="images/payment.png" alt="logo" />
             <h4 className='mt-[73px] font-["Poppins"] font-semibold text-xl'>Follow Us</h4>
            <ul className='mt-6 flex flex-col gap-3'>
              <Link to={"#"}>Twitter</Link>
              <Link to={"#"}>Instagram</Link>
              <Link to={"#"}>Facebook</Link>
             </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FooterBottom