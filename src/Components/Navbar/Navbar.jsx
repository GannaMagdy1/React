import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return ( <>
 <nav className="navbar navbar-expand-lg  rounded-2 p-4">
  <div className="container">
    <NavLink className="navbar-brand text-white fw-bolder" to="/" >START FRAMEWORK</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link  text-white fw-bolder mx-1" aria-current="page" to="/about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bolder mx-1" to="/portfolio">PORTFOLIO</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link  text-white fw-bolder mx-1" to="/contact">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav> 

    </>
  )
}

export default Navbar