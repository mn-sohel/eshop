import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const AccordionItem = ({title, content, onToggle, isOpen}) => {
  return (
    <div onClick={onToggle} className='mb-6 w-full p-3 text-left bg-white py-8 px-12 pl-28 rounded-[25px] font-["Poppins"] font-semibold text-[24px] relative'>
        <button>
            <div className={`w-[32px] h-[32px] rounded-full ${isOpen ? "bg-transparent border border-[#FF624C] !text-[#FF624C] rotate-[90deg]" : "bg-[#FF624C]"} text-[20px] flex items-center justify-center text-white mr-4 absolute top-8 left-12  duration-300`}>
                <FaAngleRight />   
            </div>
            {title}
        </button>
        {isOpen && 
            <div className='font-["Montserrat" font-normal text-base text-[#303030] mt-6'>
                {content}
            </div>
        }
    </div>
  )
}

export default AccordionItem