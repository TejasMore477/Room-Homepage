import React from 'react'
import imageB1 from '/src/assets/images/image-about-dark.jpg'
import imageB2 from '/src/assets/images/image-about-light.jpg'

function Bottom() {
  return (
    <div className='grid md:grid-cols-[25%,50%,25%] w-full lg:h-[30vh] md:h-[40vh] mt-3'>
        <img src={imageB1} className='w-full lg:h-[30vh] md:h-[40vh] object-cover object-center'></img>
        <div className='xl:py-16 lg:py-8 xl:px-12 lg:px-10 md:py-10 md:px-8 sm:py-16 py-10 px-8'>
            <h3 className='sm:text-xl text-lg font-bold uppercase leading-none pb-4 sm:tracking-[0.5rem] tracking-[0.3rem] text-Black'>About our furniture</h3>
            <p className='text-Very-Dark-Gray xl:text-base'> Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>
        <img src={imageB2} className='w-full lg:h-[30vh] md:h-[40vh] object-cover object-center' alt="" />
    </div>
  )
}

export default Bottom