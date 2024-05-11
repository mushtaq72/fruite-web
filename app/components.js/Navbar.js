
import React from 'react';


const Navbar = () => {
  return (
    <div >
      <nav className="navbar navbar-expand-lg pb-3 ">
  <div className='container'>
    <a className="navbar-brand" href="#"><img src='./images/logoo.png' className='img-fluid'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link "  href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="#" >About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" >contact us</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="px-2 search "   type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn1 px-3" type="submit">Search</button>
        
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
