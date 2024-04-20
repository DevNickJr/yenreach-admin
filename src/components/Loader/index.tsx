"use client"
import { LineWave } from 'react-loader-spinner'


const Loader = () => {
    
  

    
    

  return (
      <div className='backdrop-blur-[1px] bg-black/30 fixed top-0 left-0 w-full h-full z-50'>
          <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
          <LineWave
            visible={true}
            height="100"
            width="100"
            color='#089C4C'
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass=""
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
          />
          </div>
      </div>
  )
}

export default Loader