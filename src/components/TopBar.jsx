import React from 'react'
import '../styles/TopBar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faUser} from '@fortawesome/free-solid-svg-icons'
export default function TopBar() {
  return (
    <div className='topbar'>
   <div className="navbar">
   <div className="logo">
         News
       </div>
       <div className="icons">
          <FontAwesomeIcon icon={faMagnifyingGlass} className='fonticon' size="xl"/>
          <FontAwesomeIcon icon={faUser}            className='fonticon'     />
       </div>
   </div>
    </div>
  )
}
