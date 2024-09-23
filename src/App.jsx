import React from 'react'
import Bottom from './components/Bottom'
import Changer from './components/Changer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='max-w-screen-xl mx-auto lg:h-screen lg:overflow-hidden'>
      <Navbar/>
      <Changer />
      <Bottom/>
      <div className='py-8 px-8 text-center'>
      Challenge by <a className='text-blue-700' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a className='text-blue-700' href="https://github.com/TejasMore477/Room-Homepage">Tejas More</a>.
    </div>
    </div>
  )
}

export default App