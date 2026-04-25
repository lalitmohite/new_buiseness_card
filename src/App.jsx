import { useState } from 'react'

import './App.css'
import { Herosection } from './components/Herosection'
import { Aboutsection } from './components/Aboutsection'
import { Footersec } from './components/Footersec'

function App() {

  return (
    <>
    <div className="mainbg">
      <div className='maincontent'>

      <Herosection />
      <Aboutsection />
      <Footersec />
      </div>

    </div>
    </>
  )
}

export default App
