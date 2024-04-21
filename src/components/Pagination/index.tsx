import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import paginate from 'src/utils/paginate'

interface IPagination<T> {
  num_per_page: number
  page: number
  total: number
  handlePageChange: (a: any) => void
  data: T[]
}

const Pagination = <T,>({ page=1, num_per_page=40, data=[], handlePageChange, total }: IPagination<T>) => {
  const pag = paginate({ num_per_page, data, total })

  const handleNext = () => {
    if (page < pag.pages) {
      handlePageChange(page+1)
    }
  }

  const handlePrev = () => {
    if (page > 1) {
      handlePageChange(page-1)
    }
  }
  
  return (
    <>
    {total > 0 &&  
        <div className="flex flex-wrap items-center justify-center my-6 text-sm w-fit">
            <MdChevronLeft onClick={handlePrev} size={"1.5rem"} className='cursor-pointer' />
            {[...Array(pag?.pages).keys()]?.map((page_num) => 
            <span key={page_num+1} onClick={() => handlePageChange(page_num+1)} className={`${page===page_num+1 && "border-b"} mx-2 font-medium cursor-pointer ${page === (page_num+1) && "text-green-500"}`}>{page_num + 1}</span>
            )}
            <MdChevronRight onClick={handleNext} size={"1.5rem"} className='cursor-pointer' />
        </div>
    }
    </>
  )
}

export default Pagination


// const Pagination = ({ page=1, num_per_page=40, data=[], handlePageChange, total }) => {
//   return (
//     <>
//     {total > 0 &&  
//         <div className="flex flex-wrap items-center justify-center my-6 text-sm w-fit">
//             <MdChevronLeft size={"1.5rem"} />
//             {[...Array(paginate({page, num_per_page, data})?.pages).keys()]?.map((page_num) => 
//             <span key={page_num+1} onClick={() => handlePageChange(page_num+1)} className={`${page===page_num+1 && "border-b"} mx-2 font-medium cursor-pointer`}>{page_num + 1}</span>
//             )}
//             <MdChevronRight size={"1.5rem"} />
//         </div>
//     }
//     </>
//   )
// }

// export default Pagination