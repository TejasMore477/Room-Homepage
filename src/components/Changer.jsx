import React, { useState } from 'react'
import imageUrl1 from '/src/assets/images/desktop-image-hero-1.jpg'
import imageUrl2 from '/src/assets/images/desktop-image-hero-2.jpg'
import imageUrl3 from '/src/assets/images/desktop-image-hero-3.jpg'

import rightArrow from '/src/assets/images/icon-angle-right.svg'
import leftArrow from '/src/assets/images/icon-angle-left.svg'
import Arrow from '/src/assets/images/icon-arrow.svg'

function Changer() {
  const obj = [
    {
      imageUrl:imageUrl1, 
      Title:'Discover innovative ways to decorate', 
      desc:"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
      imageUrl:imageUrl2, 
      Title:'We are available all across the globe', 
      desc:"With stores all over the world, it's easy for you to find furniture for your home or place of business.  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our  store locator. Any questions? Don't hesitate to contact us today."
    },
    {
      imageUrl:imageUrl3, 
      Title:'Manufactured with the best materials', 
      desc:'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? obj.length - 1 : prev - 1));
  }
  
  const handleNext = () => {
    setCurrentIndex(prev => (prev === obj.length - 1 ? 0 : prev + 1));
  }
  
  const [ data, setData ] = useState(obj)
  const [ currentIndex, setCurrentIndex ] = useState(0)

  return (
    <div className='grid grid-cols-[60%,40%] h-[70vh]'>
      <img src={data[currentIndex].imageUrl} className=' h-full w-full object-cover object-center'></img>
      <div className='flex flex-col justify-between'>
        <div className='py-24 px-20 '>
          <h1 className='pb-4 text-[2.3vw] font-bold leading-none text-Black'>{data[currentIndex].Title}</h1>
          <p className='text-Dark-Gray h-48'>{data[currentIndex].desc}</p>
          <h2 className='text-md font-semibold leading-none tracking-[1rem] uppercase flex hover:text-Very-Dark-Gray cursor-pointer'>Shop now 
            <span>
              <img src={Arrow} alt="" />
            </span>
          </h2>
        </div>
        <div className='flex items-center justify-start w-full h-16'>
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
      </div>
    </div>
  )
}

export default Changer