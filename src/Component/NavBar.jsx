import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        
            
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <h4 className='d-sm-inline-block d-lg-none '>Blog Category</h4>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="burger navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">
      <div className="navbar-nav fw-bolder">
           <Link to='/'>All</Link> 
           <Link to='/Fsd'>Full Stack Development</Link> 
           <Link to='/Datascience'>Data Science</Link> 
           <Link to='/Cyber'>Cyber Security</Link> 
           <Link to='/Career'>Career</Link> 
      </div>
    </div>
  </div>
</nav>






      
           
           
    );
};

export default NavBar;