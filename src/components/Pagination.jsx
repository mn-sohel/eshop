import React from 'react'

const Pagination = ({totalItems, itemsPerPage, currentPage, onPageChange}) => {

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


    // const pagesToShowBeforeAfter = 3

    // let startPage = Math.max(1, currentPage - pagesToShowBeforeAfter)
    // let endPage = Math.min(totalPages, currentPage + pagesToShowBeforeAfter)

    // if(endPage - startPage + 1 < maxPagesToShow){
    //     if(startPage > 1){
    //         startPage = Math.max(1, endPage - maxPagesToShow + 1)
    //     }
    //     endPage = Math.min(totalPages, startPage + maxPagesToShow - 1)
    // }

    // const pageNumbers = []
    // for(let i = startPage; i <= endPage; i++){
    //     pageNumbers.push(i)
    // }


  return (
    <div className='flex items-center justify-center p-4'>
        <button
            onClick={()=> onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className='px-3 py-1 rounded bg-gray-300 disabled:opacity-50 hover:bg-gray-500 cursor-pointer'
        >
            &lt;
        </button>

        {pages.map((number,index)=>(
            <button
                key={index}
                onClick={()=> onPageChange(number)}
                className='px-3 py-1 mx-2 rounded bg-gray-300 disabled:opacity-50 hover:bg-gray-500 cursor-pointer'
            >{number}</button>
        ))}
        
        <button
            onClick={()=> onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className='px-3 py-1 rounded bg-gray-300 disabled:opacity-50 hover:bg-gray-500 cursor-pointer'
        >
            &gt;
        </button>
        <span>
            showing {currentPage * itemsPerPage} of {totalItems} resutlts
        </span>

    </div>
  )
}

export default Pagination