import React from 'react'

export const Herosection = () => {
  return (
    <>
    <img src="src\assets\Rectangle 90.png" alt="hero image" className='heroimg' />
    <h1 className='herotitle'>Laura Smith</h1>
    <h2 className='herodesc'>Frontend Developer</h2>
    <p className='herowebsite'>laurasmith.website</p>
    <div className='btndiv'>
        <button className='buttonn'> <span> <img src="src\assets\Mail.png" alt="Email icon" /></span>Email </button>
        <button className='buttonn' style={{backgroundColor:"#5093E2", color:"white"}}> <span> <img src="src\assets\linkedin.png" alt="LinkedIn icon" /></span>Linkdin </button>
    </div>
    </>
  )
}
        