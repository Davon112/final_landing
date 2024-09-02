import React from 'react'
import './Footer.css'
import background from '../../assets/download (5).png'

const Footer = () => {
  return (
   <div className='sticky-top'>
    <div className='join col-sm|md|lg|xl|xxl'>
            {/* <h1 className='text-center text-black'>Be the First to Grow with Savvy!</h1> */}
            {/* <h4 className='text-center text-black'>Join the waitlist to get notified when Savvy is ready to download.</h4>
            <h4 className='text-center text-black'>Enter your name and email to be among the first to start your journey to financial confidence and growth.</h4> */}
            <div className="form-floating col-sm|md|lg|xl|xxl">
              <input type="name" className="form-control form-control-lg border-5 bg-light col-sm|md|lg|xl|xxl"  placeholder="Name" />
              
              <label for="Name">Name</label><br />

        <div className="form-floating mb-3 col-sm|md|lg|xl|xxl ">
  <input type="email" className="form-control form-control-lg border-5 bg-light col-sm|md|lg|xl|xxl"  placeholder="name@example.com" />
  <label for="Email">Email address</label>
</div>

  <button className='button col-sm|md|lg|xl|xxl' onClick={event =>{
        console.log('button clicked');
      }}>
        <div className='label col-sm|md|lg|xl|xxl'>
          Join the Waitlist
        </div>
      </button>
      </div>
</div>
   </div>
  )
}

export default Footer