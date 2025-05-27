import React, { useEffect, useRef, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FacebookIcon from '../../../icons/FacebookIcon';
import InstagramIcon from '../../../icons/InstagramIcon';
import TwitterIcon from '../../../icons/TwitterIcon';
import ArrowDownIcon from '../../../icons/ArrowDownIcon';

const TopRightBar = () => {
    const [selectedCountry, setSelectedCountry] =  useState(null);
    const [isOpen, setIsOpen] = useState(false);
     const [selectedCurrency, setSelectedCurrency] = useState("USD");
    
      const countryDrowdownRef = useRef(null);

        useEffect(() => {
          const handleClickOutSide = (event) => {
            if(countryDrowdownRef.current && !countryDrowdownRef.current.contains(event.target)){
              setIsOpen(false)
            }
          }
          document.addEventListener('mousedown', handleClickOutSide)
          // return () => {
          //   document.removeEventListener('mousedown', handleClickOutSide)
          // }
        },[])
      

      const countries = [
        { name: "Spain", value: "es" , flag: "https://flagcdn.com/16x12/es.png" },
        { name: "Germany", value: "de" , flag: "https://flagcdn.com/16x12/de.png" },
        { name: "France", value: "fr" , flag: "https://flagcdn.com/16x12/fr.png" },
        { name: "United State", value: "us" , flag: "https://flagcdn.com/16x12/us.png" },
        { name: "Italy", value: "it" , flag: "https://flagcdn.com/16x12/it.png" },
        { name: "Portugal", value: "pt" , flag: "https://flagcdn.com/16x12/pt.png" },
        { name: "Netherlands", value: "nl" , flag: "https://flagcdn.com/16x12/nl.png" },
        { name: "Sweden", value: "se" , flag: "https://flagcdn.com/16x12/se.png" },
        { name: "Norway", value: "no" , flag: "https://flagcdn.com/16x12/no.png" },
        { name: "Denmark", value: "dk" , flag: "https://flagcdn.com/16x12/dk.png" },
        { name: "Bangladesh", value: "bd" , flag: "https://flagcdn.com/16x12/bd.png" },
        { name: "India", value: "in" , flag: "https://flagcdn.com/16x12/in.png" },
        { name: "Pakistan", value: "pk" , flag: "https://flagcdn.com/16x12/pk.png" },
        { name: "Nepal", value: "np" , flag: "https://flagcdn.com/16x12/np.png" },
        { name: "Bhutan", value: "bt" , flag: "https://flagcdn.com/16x12/bt.png" },
        { name: "Sri Lanka", value: "lk" , flag: "https://flagcdn.com/16x12/lk.png" },
        { name: "Maldives", value: "mv" , flag: "https://flagcdn.com/16x12/mv.png" },
            
       
    ];

     const currency = [
        { name: "USD", value: "USD" },
        { name: "BDT", value: "BDT" },
        { name: "EUR", value: "EUR" },
        { name: "GBP", value: "GBP" },
        { name: "INR", value: "INR" },
        { name: "JPY", value: "JPY" },
        { name: "AUD", value: "AUD" },
        { name: "CAD", value: "CAD" }
    ]

    const handleSelect = (country) => {
      setSelectedCountry(country)
      setIsOpen(false)
      
    }
  return (
    <div className='flex justify-end items-center gap-x-6'>
        <div>
          <select
            className='cursor-pointer' 
            name="currency"
            value={selectedCurrency}
            onChange={(e)=>{
              const currency = e.target.value
              setSelectedCurrency(currency)
            }}
            >
              {currency.map((cur, index)=>(
                <option key={index} value={cur.value}>{cur.name}</option>
              ))}
             
            </select>
        </div>
        <div className='relative after:content-[""] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[-10px] after:top-[50%]         after:-translate-y-1/2 before:content-[""] before:absolute before:w-[1px] before:h-[32px] before:bg-[#BFBFBF] before:left-[172px] before:top-[50%] before:-translate-y-1/2' ref={countryDrowdownRef}
        >
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
              onClick={()=>setIsOpen(!isOpen)}
              className='w-[175px] p-2 cursor-pointer flex items-center'
              >
                {selectedCountry ?
                <>
                  <img src={selectedCountry?.flag} alt={selectedCountry?.name} className='w-5 h-4 mr-2' />
                  <span className='mr-6'>{selectedCountry?.name}</span>
                  <ArrowDownIcon/>
                </>
                :
                <span className='gap-3 flex items-center'>Select a country <ArrowDownIcon /></span>
              }
            </div>
            {/* option list */}
            {isOpen && (
              <ul 
              className='absolute w-full border border-gray-300 bg-white shadow-lg z-10'>
                {countries.map((country) => (
                  <li 
                    onClick={()=>handleSelect(country)}
                    
                    key={country.value}
                    className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'
                    >
                      <img src={country?.flag} alt={country?.name} className='w-5 h-4 mr-2' />
                      {country.name}
                  </li>
                ))}
              </ul>
            )}
        </div>
        <div className='flex items-center gap-6'>
          <Link to={'#'}>
            <FacebookIcon/>
          </Link>
          <Link to={'#'}>
            <TwitterIcon/>
          </Link>
          <Link to={'#'}>
            <InstagramIcon/>
          </Link>
        </div>
    </div>
  )
}

export default TopRightBar