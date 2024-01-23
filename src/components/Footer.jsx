import React from 'react'
import '../styles/Footer.css'
export default function Footer() {
  return (
    <div className='footer'>
        <div className="left-sec">
          <div className='links'>
          <a href="">About</a>
           <a href="">Terms & conditions</a>
           <a href="">Privacy Policy</a>
          </div>
          <div className="copyright">
          Copyright © 2020, Reliance industries Limited. All rights reserved
          </div>
          </div> 
          <div className="right-sec">
              <div>FIND US HERE</div>
               <div className='icons'>
                  <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="facebook" />
                  <img src="https://cdn-icons-png.flaticon.com/128/3670/3670125.png" alt="insta" />
                  <img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="twitter" />
               </div>
          </div>
    </div>
  )
}
