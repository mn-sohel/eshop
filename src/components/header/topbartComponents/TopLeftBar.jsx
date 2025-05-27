import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import LocationIcon from '../../../icons/LocationIcon'
import PhoneIcon from '../../../icons/PhoneIcon'

const TopLeftBar = () => {
  return (
     <div className='flex items-center gap-[50px] relative after:content-[""] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[61%] after:top-[50%] after:-translate-y-1/2'>
        <Link to="https://maps.app.goo.gl/JPxftAdbRVY8srcz8" target='_blank' className='flex items-center gap-2'>
          <LocationIcon/>
          123 Main Street, Anytown USA
        </Link>
        <Link to="tel:01256952" className='flex items-center gap-2'>
          <PhoneIcon/>
          +1 (555) 123-4567
        </Link>
    </div>
)
}

export default TopLeftBar