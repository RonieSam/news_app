import React from 'react'
import {Link} from "react-router-dom"
const NavBar =()=>{

    return (

      <div>
        <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category 
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item"  to='/'>All</Link></li>
            <li><Link className="dropdown-item"  to='/business'>Business</Link></li>
            <li><Link className="dropdown-item"  to='/entertainment'>Entertainment</Link></li>
            <li><Link className="dropdown-item"  to='/health'>Health</Link></li>
            <li><Link className="dropdown-item" to='/science' >Science</Link></li>
            <li><Link className="dropdown-item" to='/sports' >Sports</Link></li>
            <li><Link className="dropdown-item"  to='/technology'>Technology</Link></li>

          </ul>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  
}
export default NavBar