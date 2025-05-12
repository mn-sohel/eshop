import React, { useState } from 'react'
import { FaAngleDown, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopRightBar = () => {
    const [selectedCountry, setSelectedCountry] =  useState(null);
    const [isOpen, setIsOpen] = useState(false);

      const countries = [
        { name: 'United State', value: 'US', flag: 'https://flagcdn.com/16x12/us.png' },
        { name: 'Canada', value: 'CA', flag: 'https://flagcdn.com/16x12/ca.png' },
        { name: 'United King', value: 'GB', flag: 'https://flagcdn.com/16x12/gb.png' },
        { name: 'Australia', value: 'AU', flag: 'https://flagcdn.com/16x12/au.png' },
        { name: 'Germany', value: 'DE', flag: 'https://flagcdn.com/16x12/de.png' },
        { name: 'France', value: 'FR', flag: 'https://flagcdn.com/16x12/fr.png' },
    ]

    const handleSelect = (country) => {
      setSelectedCountry(country)
      setIsOpen(false)
      
    }
  return (
    <div className='flex justify-end items-center gap-[49px]'>
        <div>
          <select 
            name="currency"
            >
                <option value="USD">USD</option>
                <option value="BDT">BDT</option>
                <option value="BDT">JPY</option>
             
            </select>
        </div>
        <div className='relative after:content-[""] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[-25px] after:top-[50%] after:-translate-y-1/2 before:content-[""] before:absolute before:w-[1px] before:h-[32px] before:bg-[#BFBFBF] before:left-[173px] before:top-[50%] before:-translate-y-1/2'>
        {/* <img src="https://flagcdn.com/16x12/us.png" />  */}
            <select 
            name="country"
            className='w-[150px] hidden' 
            value={selectedCountry?.value || ''} 
            onChange={(e) => {
              const country = countries.find((c)=> c.value === e.target.value)
              setSelectedCountry(country)
            }} 
            >
                {countries.map((country, index) => (
                  <option key={index} value={country.value}>{country.name}</option>
                ))}
            </select>

            {/* custom dropdown */}
            <div 
            className='w-[175px] p-2 cursor-pointer flex items-center'
            onClick={()=>setIsOpen(!isOpen)}
            >
              {selectedCountry ?
              <>
                <img src={selectedCountry?.flag} alt={selectedCountry?.name} className='w-5 h-4 mr-2' />
                <span className='mr-6'>{selectedCountry?.name}</span>
                <FaAngleDown />
              </>
              :
              <span className='gap-3 flex items-center'>Select a country <FaAngleDown /></span>
            }
            </div>
            {/* option list */}
            {isOpen && (
              <ul className='absolute w-full border border-gray-300 bg-white shadow-lg z-10'>
                {countries.map((country,index) => (
                  <li 
                  key={country.value}
                  className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'
                  onClick={()=>handleSelect(country)}
                  >
                    <img src={country?.flag} alt={country?.name} className='w-5 h-4 mr-2' />
                    {country.name}
                  </li>
                ))}
              </ul>
            )}
        </div>
        <div className='flex items-center gap-5'>
          <Link to={'#'}>
            <FaFacebookF />
          </Link>
          <Link to={'#'}>
            <FaTwitter />
          </Link>
          <Link to={'#'}>
            <FaInstagram />
          </Link>
        </div>
    </div>
  )
}

export default TopRightBar