import React, { useEffect, useRef, useState } from 'react'
import Container from '../commonLayouts/Container'
import { Link } from 'react-router-dom'
import { FaAngleDown, FaBars } from 'react-icons/fa'
import { PiHandWavingBold } from 'react-icons/pi'

const BottomBar = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const drowdownRef1 = useRef(null);
  const drowdownRef2 = useRef(null);

  // useEffect(() => {
  //   const handleClickOutSide1 = (event) => {
  //     if(drowdownRef1.current && !drowdownRef1.current.contains(event.target)){
  //       setIsDropdownOpen1(false)
  //     }
  //     }
  //   document.addEventListener('mousedown', handleClickOutSide1)
  // },[])

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if(drowdownRef1.current && !drowdownRef1.current.contains(event.target)){
        setIsDropdownOpen1(false)
      }
      if(drowdownRef2.current && !drowdownRef2.current.contains(event.target)){
        setIsDropdownOpen2(false)
      }
      }
    document.addEventListener('mousedown', handleClickOutSide)
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide)
    }
  },[])

  const handleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1)
  }
  const handleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2)
  }

  return (
    <div className='bg-[#FF624C]'>
      <Container>
        <div className='flex justify-between items-center py-6'>
          <div>
            <ul className='flex items-center gap-[80px] font-["Montserrat"] font-bold text-base leading-6 text-white'>
                <li className='relative' ref={drowdownRef1}>
                  {/* <button><FaBars />All Categories</button> */}
                  <button onClick={handleDropdown1} className='flex items-center gap-4 cursor-pointer'><FaBars />All Categories</button>
                  {isDropdownOpen1 && (
                    <div className='absolute z-10 mt-2 w-48 bg-white rounded shadow-lg'>
                      <ul className='py-2 font-["Montserrat"] font-normal text-base leading-6 text-black'>
                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Product 1</li>
                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Product 2</li>
                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Product 3</li>
                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Product 4</li>
                      </ul>
                    </div>
                  )}
                </li>
                <li className='relative' ref={drowdownRef2}>
                  {/* <button>Products <FaAngleDown /></button> */}
                  <button onClick={handleDropdown2} className='flex items-center gap-4 cursor-pointer'>Products <FaAngleDown /></button>
                  {isDropdownOpen2 && (
                    <div className='absolute z-10 mt-2 w-48 bg-white rounded shadow-lg'>
                      <ul className='py-2 font-["Montserrat"] font-normal text-base leading-6 text-black'>
                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Product 5</li>
                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Product 6</li>
                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Product 7</li>
                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Product 8</li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                    <Link to={"/blog"}>Blog</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
            </ul>
          </div>
           <div>
            <ul className='flex items-center gap-[80px] font-["Montserrat"] font-bold text-base leading-6 text-white'>
                <li>
                  <Link className='flex items-center gap-x-4' to={"#"}>LIMITED SALE <PiHandWavingBold /></Link>
                </li>
                
                <li>
                    <Link to={"#"}>Best Seller</Link>
                </li>
                <li>
                    <Link to={"#"}>New Arrival</Link>
                </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default BottomBar