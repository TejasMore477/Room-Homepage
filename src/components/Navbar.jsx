import React, { useState } from 'react'
import logo from '/src/assets/images/logo.svg'
import burger from '/src/assets/images/icon-hamburger.svg'
import Navlinks from './Navlinks';

function Navbar() {
  const links = ['Home','Shop','About','Contact'];
  const [navigation, setNavigation] = useState(false)

  return (
    <div className='flex fixed bg-transparent w-full sm:py-10 sm:px-10 py-7 px-8 items-center justify-start gap-12 md:bg-transparent'>

      <img onClick={()=>setNavigation(prev=>!prev)} className='sm:hidden' src={burger} alt="" />

      <img src={logo} className='sm:h-2  h-4' alt="logo" />
      <div className='sm:flex hidden text-white items-center justify-start gap-6'>
      {links.map((link,index)=>(
        <p key={index} className='text-sm hover:border-b-[2px] border-white ease-in-out cursor-pointer h-6'>{link}</p>
      ))}
      </div>
      
      <Navlinks links={links} navigation={navigation} setNavigation={setNavigation} />
    </div>
  )
}

export default Navbar