import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';

const Navbar = () => {
  let history = useHistory();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    history.push("./login");
  }
  let location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" to="/">iNotePad</Link>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/" ? "active":""}`} to="/">Home <span className="sr-only">(current)</span></Link>
          </li>

          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/about" ? "active":""}`} to="/about">About</Link>
          </li>

        </ul>
        
        {!localStorage.getItem('token')?<form className="form-inline my-2 my-lg-0">
          <Link className='btn btn-primary mx-1' to='/login' role='button'>Login</Link>
          <Link className='btn btn-primary mx-1' to='/signup' role='button'>Sign Up</Link>
        </form>: <button className="btn btn-primary" onClick={handleLogout}>LogOut</button>}
      </div>
    </nav>
  )
}

export default Navbar;
