import React from 'react'
import logo from '/src/assets/images/logo.svg'

function Navbar() {
  const links = ['Home','Shop','About','Contact']
  return (
    <div className='flex fixed bg-transparent w-full sm:py-10 sm:px-10 py-7 px-8 items-center justify-start gap-12 md:bg-transparent'>
      <img src={logo} alt="logo" />
      <div className='sm:flex hidden text-white items-center justify-start gap-6'>
      {links.map((link,index)=>(
        <p key={index} className='text-sm hover:border-b-[2px] border-white ease-in-out cursor-pointer h-6'>{link}</p>
      ))}
      </div>
    </div>
  )
}

export default Navbar