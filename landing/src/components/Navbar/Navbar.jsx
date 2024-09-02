import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar col-xl|xxl'>
      {/* <h1>Be the First to Grow with, </h1> */}
      <img src={Logo} alt='' className='logo' />
      

      
      {/* <button className='wireframe-button .col-sm|md|lg|xl|xxl' onClick={event =>{
        console.log('button clicked');
      }}>
        <div className='label'>
          Join the Waitlist
        </div>
      </button> */}
    
    </div>
  )
}

export default Navbar
