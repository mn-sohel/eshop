import React from 'react'

const Button = ({text, bg="#FF624C", fontName="Montserrat", fontWeight="bold", size="xl", color="white", paddingY="4", paddingX="10", radius="10"}) => {
  return (
    <button className={`bg-[${bg}] font-${fontName} font-${fontWeight} text-${size} text-${color} py-${paddingY} px-${paddingX} rounded-[${radius}px] `}>{text}</button>
  )
}

export default Button