import React, { useEffect, useRef, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FacebookIcon from '../../../icons/FacebookIcon';
import InstagramIcon from '../../../icons/InstagramIcon';
import TwitterIcon from '../../../icons/TwitterIcon';
import ArrowDownIcon from '../../../icons/ArrowDownIcon';

const TopRightBar = () => {
    const [selectedCountry, setSelectedCountry] =  useState(null);
    const [isOpenLanguage, setIsOpenLanguage] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState(null);
    const [isOpenCurrency, setIsOpenCurrency] = useState(false);
    
      const countryDrowdownRef = useRef(null);
      const currencyDrowdownRef = useRef(null);

        useEffect(() => {
          const handleClickOutSide = (event) => {
            if(countryDrowdownRef.current && !countryDrowdownRef.current.contains(event.target)){
              setIsOpenLanguage(false)
            }
            if(currencyDrowdownRef.current && !currencyDrowdownRef.current.contains(event.target)){
              setIsOpenCurrency(false)
            }
          }
          document.addEventListener('mousedown', handleClickOutSide)
          return () => {
            document.removeEventListener('mousedown', handleClickOutSide)
          }
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

     const currencies = [
        { name: "USD", code: "usd", symbol: "$" },
        { name: "BDT", code: "bdt", symbol: "৳" },
        { name: "EUR", code: "eur", symbol: "€" },
        { name: "GBP", code: "gbp", symbol: "£" },
        { name: "JPY", code: "jpy", symbol: "¥" },
        { name: "INR", code: "inr", symbol: "₹" },
        { name: "AUD", code: "aud", symbol: "A$" },
        { name: "CAD", code: "cad", symbol: "C$" },
    ]

    const handleSelect = (country) => {
      setSelectedCountry(country)
      setIsOpenLanguage(false) 
    }
    // const handleSelectCurrency = (currency) => {
    //   selectedCurrency(currency)
    //   setIsOpenCurrency(false)
    // }
  return (
    <div className='flex justify-end items-center gap-6'>
        <div
          ref={currencyDrowdownRef}
          className="flex items-center gap-2 cursor-pointer relative"
          onClick={() => setIsOpenCurrency(!isOpenCurrency)}
        >
          <select
            className='cursor-pointer hidden' 
            name="currency"
            value={selectedCurrency?.name }
            onChange={(e)=>{
              const currency = currencies.find((cu) => cu.code === e.target.value)
              setSelectedCurrency(currency)
            }}
            >
              {currencies.map((curr)=>(
                <option key={curr?.code} value={curr?.code}>
                  {curr?.name}
                </option>
              ))}
             
            </select>
          {/* custom dropdown for courrency */}
          { selectedCurrency ? (
            <>
              <span
              className="hover:text-[#FF624C] transition-all duration-150 ease-in-out"
              onClick={() => setIsOpenCurrency(true)}
              >
                {selectedCurrency?.name}

              </span>
            </>
          ) : (
            // setSelectedCurrency(currencies?.find((c) => c.code === "bdt"))
            setSelectedCurrency(currencies?.find((c) => c.code === "usd"))
          )}
          {/* option list for courrency */}
          {isOpenCurrency && (
            <ul
             className="absolute w-full bg-white shadow-2xl z-10 top-full leading-5 border-t-4 border-[#FF624C] "
             onClick={() => setIsOpenCurrency(false)}
            >
              {currencies.map((curr) => (
                <li
                key={curr?.code}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 hover:text-[#FF624C] cursor-pointer border-b border-b-gray-100 border-transparent hover:shadow-xl hover:border-r-[#FF624C] hover:border-l-[#FF624C] "
                onClick={() => {
                  console.log(curr);
                  
                  setSelectedCurrency(curr);
                  setIsOpenCurrency(false)
                }}
                >
                  <span>{curr?.name}</span>
                </li>
              ))}
            </ul>
          )}
          <ArrowDownIcon/>
        </div>
        <div 
        ref={countryDrowdownRef}
        className='relative after:content-[""] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[-10px] after:top-[50%]         after:-translate-y-1/2 before:content-[""] before:absolute before:w-[1px] before:h-[32px] before:bg-[#BFBFBF] before:left-[172px] before:top-[50%] before:-translate-y-1/2' 
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

            {/* custom dropdown for language or country */}
            <div 
              onClick={()=>setIsOpenLanguage(!isOpenLanguage)}
              className='w-[175px] p-2 cursor-pointer flex items-center justify-between'
              >
                {selectedCountry ?
                <>
                  <img src={selectedCountry?.flag} alt={selectedCountry?.name} className='w-5 h-4 mr-2' />
                  <span className='mr-6'>{selectedCountry?.name}</span>
                  <ArrowDownIcon />
                </>
                :
                <span className='gap-3 flex items-center'>Select a country <ArrowDownIcon /></span>
              }
            </div>
            {/* option list for language or country */}
            {isOpenLanguage && (
              <ul 
              className='absolute w-full border border-gray-300 bg-white shadow-lg z-10'>
                {countries.map((country) => (
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