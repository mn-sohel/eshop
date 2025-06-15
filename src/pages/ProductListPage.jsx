import React, { useState } from 'react'
import Container from '../components/commonLayouts/Container'

const ProductListPage = () => {
  let [minValue, setMinValue] = useState(0);
  let [maxValue, setMaxValue] = useState(1000);

  const updateSlider = (type, value) => {
    if(type == 'min'){
        const newMin = Math.min(parseInt(value), maxValue)
        setMinValue(newMin)
    }else{
        const newMax = Math.max(parseInt(value), minValue)
        setMaxValue(newMax)
    }
  }

  const minPercent = (minValue / 1000) * 100
  const maxPercent = (maxValue / 1000) * 100


  return (
    <Container>
      <div className='flex'>
        <div className='w-[355px] bg-[#F4F4F4] rounded-[25px] p-12'>
          <h3 className='font-["Montserrat"] font-bold text-xl'>Price</h3>
          <div className='w-full mt-12'>
            <div className='flex justify-between mb-5'>
              <span>Min: ${minValue}</span>
              <span>Max: ${maxValue}</span>
            </div>
            <div className='relative w-full h-[2px] bg-[#E8E8E8] rounded'>
              <div 
                className='absolute h-full bg-red-500 rounded'
                style={{left: `${minPercent}%`, width: `${maxPercent - minPercent}%`}}
                ></div>
              <input 
                type="range"
                min="0"
                max="1000" 
                value={minValue}
                step="10"
                onChange={(e)=> updateSlider('min',e.target.value)}
                className='absolute w-full h-[2px] bg-transparent pointer-events-none appearance-none'
                style={{zIndex: 2}}
              />
              <input 
                type="range"
                min="0"
                max="1000" 
                value={maxValue}
                step="10"
                onChange={(e)=> updateSlider('max',e.target.value)}
                className='absolute w-full h-[2px] bg-transparent pointer-events-none appearance-none'
                style={{zIndex: 2}}
              />
            </div>
          </div>
        </div>
        <div className='w-[80%]'>jghghgg</div>
      </div>
    </Container>
  )
}

export default ProductListPage