import React from 'react'
import logo from '/src/assets/images/logo.svg'

function Navbar() {
  const links = ['Home','Shop','About','Contact']
  return (
    <div className='flex fixed bg-transparent w-full py-10 px-10 items-center justify-start gap-12'>
      <img src={logo} alt="logo" />
      <div className='flex text-white items-center justify-start gap-6'>
      {links.map((link,index)=>(
        <p key={index} className='text-sm hover:border-b-[2px] border-white ease-in-out cursor-pointer h-6'>{link}</p>
      ))}
      </div>
    </div>
  )
}

export default Navbar