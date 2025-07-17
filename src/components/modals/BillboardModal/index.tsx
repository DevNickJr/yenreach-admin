"use client"
import Button from 'src/components/Button'
import React from 'react'
import ErrorImg from "src/assets/success.png"

interface IProps {
    setIsOpen: React.Dispatch<React.SetStateAction<string>>
    isOpen: string
    // onClick: () => void
    confirm: ({ startDate, endDate }: { startDate: string; endDate: string }) => void
}


const BillboardModal = ({ isOpen, setIsOpen, confirm }: IProps) => {
    const [startDate, setStartDate] = React.useState("")
    const [endDate, setEndDate] = React.useState("")
    
    React.useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'unset'
        }
      }, [isOpen])
      
    const closeModal = () => {
        setIsOpen("")
        document.body.style.overflow = 'unset'
    }
    
    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          if (e.target === e.currentTarget) {
              closeModal()
          }
    }
    
       
    return (
        <>
        {
            isOpen &&
                <div onClick={handleOutsideClick} className='fixed top-0 left-0 z-30 max-h-screen min-h-screen p-4 py-40 overflow-hidden md:p-8 md:py-40 bg-black/50 h-[100vh] w-[100vw]'>
                    <div className="flex flex-col items-center w-full max-w-lg gap-5 p-4 py-8 pt-6 mx-auto overflow-hidden bg-white rounded-md md:rounded-xl">
                        <div className='w-12 h-1 bg-[#D9D9D9] rounded-full'></div>
                        <h2 className='text-xl font-bold text-black mb-4'>Add business to billboard</h2>
                        <div className="flex gap-2">
                            <div className='flex flex-col gap-1 text-sm'>
                                <label htmlFor="startDate" className='text-black'>Start Date</label>
                                <input type="date" id="startDate" className='w-full py-3 px-4 border border-[#D9D9D9] rounded-md' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                            </div>
                            <div className='flex flex-col gap-1 text-sm'>
                                <label htmlFor="endDate" className='text-black'>End Date</label>
                                <input type="date" id="endDate" className='w-full py-3 px-4 border border-[#D9D9D9] rounded-md' value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex">
                            <Button variant='default' outlined className='w-full px-8 md:px-12 text-sm py-2 md:py-3.5 rounded-r-none text-black' onClick={() => setIsOpen("")} >
                                Cancel
                            </Button>
                            <Button 
                                disabled={!startDate || !endDate}
                                variant='default' 
                                className='w-full px-8 md:px-12 text-sm py-2 rounded-l-none md:py-3.5 disabled:cursor-not-allowed' onClick={() => {
                                if (startDate && endDate) {
                                    confirm({
                                        startDate,
                                        endDate
                                    })
                                }
                            }} >
                                Confirm
                            </Button>
                        </div>
                    </div>
                </div>
        }
        </>
    )
}

export default BillboardModal