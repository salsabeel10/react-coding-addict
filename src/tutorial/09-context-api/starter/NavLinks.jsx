import React, { useState } from 'react'

import UserContainer from './UserContainer'

const NavLinks = () => {
   
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="/home">Home </a>
        </li>
        <li>
          <a href="/about"> About</a>
        </li>
      </ul>
      <UserContainer/>
    </div>
  )
}

export default NavLinks
