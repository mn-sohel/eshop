import React from 'react'

const Box = ({inputType, placeholder, type}) => {
  return (
    <>
        <label htmlFor="" className='font-["Montserrat"] font-semibold text-[20px]'>{inputType} <span className='text-[#ff624c]'>*</span></label> <br/>
        {type == "textarea"
        ?
        <textarea type="text" className='w-full py-[25px] px-8 border border-solid border-[#ddd] rounded-[10px] mt-[10px]' placeholder={placeholder} />
        :
        <input type="text" className='w-full py-[25px] px-8 border border-solid border-[#ddd] rounded-[10px] mt-[10px]' placeholder={placeholder} />
    }
    </>
  )
}

export default Box