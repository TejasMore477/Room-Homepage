import React from 'react'
import rightArrow from '/src/assets/images/icon-angle-right.svg'
import leftArrow from '/src/assets/images/icon-angle-left.svg'

function Botton({handleNext, handlePrev}) {
  return (
    <div className='flex sm:static absolute bottom-[55%] z-50 items-center md:justify-start sm:justify-center justify-end w-full h-16'>
    <img
      src={leftArrow}
      alt="Previous"
      className='bg-black py-5 px-7 ease-in-out duration-500 hover:bg-very-dark-gray cursor-pointer border-r-[1px] border-dark-gray'
      onClick={handlePrev}
    />
    <img
      src={rightArrow}
      alt="Next"
      className='bg-black py-5 px-7 ease-in-out duration-500 hover:bg-very-dark-gray cursor-pointer'
      onClick={handleNext}
    />
  </div>
  )
}

export default Botton