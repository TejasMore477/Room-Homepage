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
    </div>
  )
}

export default App