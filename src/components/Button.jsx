import React from 'react'

const Button = ({text, bg="#FF624C", fontName="Montserrat", fontWeight="bold", size="xl", color="white", paddingY="20px", paddingX="20px", radius="10", border="none"}) => {
  return (
    <button 
      className={`bg-[${bg}] font-${fontName} font-${fontWeight}  text-${color} rounded-[${radius}px]`}
      style={{
        backgroundColor: bg,
        fontFamily: fontName,
        fontWeight: fontWeight,
        fontSize: size,
        color: color,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        borderRadius: `${radius}px`,
        border: border,
        cursor: "pointer"
    }}>{text}</button>
  )
}

export default Button

{/* <button 
  className={`bg-[${bg}] font-${fontName} font-${fontWeight} text-${size} text-${color} py-${paddingY} px-${paddingX} rounded-[${radius}px] `}
  style={{
    
  }}
  >{text}</button> */}
  // padding: paddingY+"px" + " " + paddingX+"px"