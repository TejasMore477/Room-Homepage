import React from 'react'
import imageB1 from '/src/assets/images/image-about-dark.jpg'
import imageB2 from '/src/assets/images/image-about-light.jpg'

function Bottom() {
  return (
    <div className='grid  grid-cols-[25%,50%,25%] w-full h-[30vh]'>
        <img src={imageB1} className='w-full h-[30vh] object-cover object-center'></img>
        <div className='py-16 px-12'>
            <h3 className='text-xl font-bold uppercase leading-none pb-4 tracking-[0.5rem] text-Black'>About our furniture</h3>
            <p className='text-Very-Dark-Gray'> Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>
        <img src={imageB2} className='w-full h-[30vh] object-cover object-center' alt="" />
    </div>
  )
}

export default Bottom