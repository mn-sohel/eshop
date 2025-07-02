import React from 'react'
import { FaCheck } from 'react-icons/fa'

const CustomCheckBox = ({text}) => {
  return (
    <div>
        <label className='flex items-center'>
        <input hidden className='targetinput' type="checkbox" />
        <div className='customcheck flex justify-center items-center text-white mr-3'>
            <span>
                <FaCheck className='text-[10px]'/>
            </span>
        </div>
            {text}
        </label>
    </div>
  )
}

export default CustomCheckBox