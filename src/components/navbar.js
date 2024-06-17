import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (

      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
            <li><a className="dropdown-item"  href='/'>All</a></li>
            <li><a className="dropdown-item"  href='/business'>Business</a></li>
            <li><a className="dropdown-item"  href='/entertainment'>Entertainment</a></li>
            <li><a className="dropdown-item"  href='/health'>Health</a></li>
            <li><a className="dropdown-item" href='/science' >Science</a></li>
            <li><a className="dropdown-item" href='/sports' >Sports</a></li>
            <li><a className="dropdown-item"  href='/tech'>Technology</a></li>

          </ul>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}
