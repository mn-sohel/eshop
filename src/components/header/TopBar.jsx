import React from 'react'
import Container from '../commonLayouts/Container'
import { Link } from 'react-router-dom'
import { IoLocationOutline } from 'react-icons/io5'
import { BsTelephone } from 'react-icons/bs'

const TopBar = () => {
  return (
    <div className='border-b border-[#BFBFBF] border-slolid py-[22px]'>
        <Container>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-[50px] font-["Montserrat"] font-normal text-sm relative after:content-[""] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[61%] after:top-[50%] after:-translate-y-1/2'>
                    <Link to="https://maps.app.goo.gl/JPxftAdbRVY8srcz8" target='_blank' className='flex items-center gap-2'><IoLocationOutline />123 Main Street, Anytown USA</Link>
                    <Link to="tel:01256952" className='flex items-center gap-2'><BsTelephone />+1 (555) 123-4567</Link>
                </div>
                <div>right</div>
            </div>
        </Container>
    </div>
  )
}

export default TopBar