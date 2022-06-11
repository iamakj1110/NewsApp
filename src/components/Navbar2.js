import React from 'react'
import { Link } from 'react-router-dom'

import './nav.css'
export default function Navbar2() {
    return (
        <div >
            <nav className="navbar  navbar-expand-lg navbar-light bg-light">
              
            <Link className="navbar-brand" to="/">
    <img  src="https://banner2.cleanpng.com/20171127/fad/monkey-cartoon-png-clipart-image-5a1bcfc6097a07.5053172615117721020388.jpg" width="70" height="70" alt=""/>
  </Link>
 
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
    <ul className="navbar-nav">
    
      <li className="nav-item">
        <Link className="nav-link "  activeClassName="active" to="/business">Business</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" activeClassName="active" to="/entertainment">Entertainment</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" activeClassName="active" to="/general">General</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" activeClassName="active" to="/health">Health</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" activeClassName="active" to="/science">Science</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" activeClassName="active" to="/sports">Sports</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" activeClassName="active" to="/technology">Technology</Link>
      </li>
     
    </ul>
  </div>
</nav>
        </div>
    )
}
