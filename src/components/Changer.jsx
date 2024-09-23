import React, { useState } from 'react'
import imageUrl1 from '/src/assets/images/desktop-image-hero-1.jpg'
import imageUrl2 from '/src/assets/images/desktop-image-hero-2.jpg'
import imageUrl3 from '/src/assets/images/desktop-image-hero-3.jpg'

import Arrow from '/src/assets/images/icon-arrow.svg'
import Botton from './Botton'

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
    <div className='grid md:grid-cols-[60%,40%] sm:grid-row-[50vh,50vh] lg:h-[70vh] md:h-[60vh] h-[95vh]'>
      <img src={data[currentIndex].imageUrl} className='md:h-full sm:h-[50vh] h-[45vh] w-full object-cover object-center'></img>
      <div className='flex flex-col justify-between sm:h-[40vh] h-[50vh]'>
        <div className='lg:pt-24 lg:px-20 md:pt-12 md:px-10 sm:pt-8 sm:px-10 px-8 py-6'>
          <h1 className='pb-4 lg:text-[2.3vw] md:text-[2.7vw] sm:text-[5vw] font-bold leading-none text-Black'>{data[currentIndex].Title}</h1>
          <p className='text-Dark-Gray lg:h-56 md:h-64 sm:h-32 h-56'>{data[currentIndex].desc}</p>
          <h2 className='lg:text-md font-semibold leading-none lg:tracking-[1rem] md:tracking-widest tracking-[1rem] uppercase flex hover:text-Very-Dark-Gray cursor-pointer'>Shop now 
            <span>
              <img src={Arrow} alt="" />
            </span>
          </h2>
        </div>
        <Botton handleNext={handleNext} handlePrev={handlePrev}/>
      </div>
    </div>
  )
}

export default Changer