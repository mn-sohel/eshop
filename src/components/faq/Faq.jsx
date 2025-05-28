import React, { useState } from 'react'
import Container from '../commonLayouts/Container'
import ProductLayout from '../commonLayouts/ProductLayout'
import AccordionItem from './AccordionItem';
import Button from '../Button';

const Faq = () => {
    let [openIndex, setOpenIndex] = useState(null);

    let accordionData = [
        {
            title: "What payment methods do you accept?",
            content: "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history."
        },
        {
            title: "How long does the product shipping take?",
            content: "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history."
        },
        {
            title: "Do you offer international shipping?",
            content: "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history."
        },
        {
            title: "Can I track my order?",
            content: "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history."
        },
    ]
  return (
    <div className='mt-[80px] py-16' style={{background: "url('images/faqBg.png')"}}>
      <Container>
        <div className='flex justify-between items-end relative'>
            <div className='w-[902px]'>
                {accordionData.map((item, index) => (
                    <AccordionItem 
                        key={index}
                        title={item.title}
                        content={item.content}
                        onToggle={() => setOpenIndex(openIndex === index ? null : index )}
                        isOpen={openIndex === index}
                    />
                ))}
            </div>
            <div className=''>
                <h2 className='max-w-[306px] font-["Poppins"] font-semibold text-4xl text-[#303030]'>Frequently Asked Questions</h2>
                <p className='max-w-[392px] font-["Montserrat"] font-normal text-xl text-[#303030] mt-6 mb-16'>Questions that get asked the most by our clients. Get any burning questions?</p>
                <Button text={"Ask A Question"} paddingY="16px" paddingX="40px"/>
            </div>
        </div>
    
    </Container>
    </div>
  )
}

export default Faq