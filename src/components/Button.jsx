import React from 'react'

const Button = ({text, bg="#FF624C", fontName="Montserrat", fontWeight="bold", size="xl", color="white", paddingY="16", paddingX="40", radius="10"}) => {
  return (
    <button 
    className={`bg-[${bg}] font-${fontName} font-${fontWeight}  text-${color} rounded-[${radius}px]`}
    style={{
        fontSize: "20px",
        padding: paddingY+"px" + " " + paddingX+"px"

    }}
    >{text}</button>
  )
}

export default Button

{/* <button 
    className={`bg-[${bg}] font-${fontName} font-${fontWeight} text-${size} text-${color} py-${paddingY} px-${paddingX} rounded-[${radius}px] `}
    style={{

    }}
    >{text}</button> */}