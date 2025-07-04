import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Pagination = ({totalItems, itemsPerPage, currentPage, onPageChange}) => {

    let [active, setActive] = useState(1);

    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const maxPagesToShow = 7;
    const pages = []
    
    if(totalPages <= maxPagesToShow){
        for(let i = 0; i <= totalPages; i++){
            pages.push(i)
        }
    }else{
        const startPages = [1,2]
        const endPages = [totalPages- 1 , totalPages]
        const middlePages = [currentPage - 1, currentPage, currentPage + 1].filter((p) => (
            p>2 && p < totalPages-1
        ))

        const uniquePages = Array.from(new Set([...startPages, ...middlePages, ...endPages])).sort((a,b)=> a - b)

        for(let i = 0; i < uniquePages.length; i++){
            pages.push(uniquePages[i])

            if(i < uniquePages.length - 1 && uniquePages[i+1] - uniquePages[i] > 1){
                pages.push("...")
            }
        }
    }

    let handleClick = (number) => {
        onPageChange(number)
        setActive(number)
    }

  return (
    <div className='flex items-center justify-center p-4'>
        <button
            onClick={()=> handleClick(currentPage - 1)}
            disabled={currentPage === 1}
            className='cursor-pointer'
        >
            <FaAngleLeft />
        </button>

        {pages.map((number,index)=>(
            <button
                key={index}
                // onClick={()=> onPageChange(number)}
                onClick={()=>handleClick(number)}
                className={`px-3 py-1 mx-2 rounded disabled:opacity-50 ${active == number && "bg-[#FF624C] text-white"} hover:bg-[#FF624C] hover:text-white cursor-pointer`}
            >{number}</button>
        ))}
        
        <button
            onClick={()=> handleClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className='cursor-pointer'
        >
            <FaAngleRight />
        </button>
        <span className='numbers'>
            showing {currentPage * itemsPerPage} of {totalItems} resutlts
        </span>

    </div>
  )
}

export default Pagination