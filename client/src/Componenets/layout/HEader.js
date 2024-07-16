import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../../Pages/Contex/State';
function HEader() {
  const {auth,setAuth}=useAuth();
  const handleLogout=()=>{
    setAuth({
      ...auth,
      user:null,token:""
    })
    localStorage.removeItem('auth')
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NAVAS</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {
                !auth.user? (<>
                  <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
                </>):(<>
                  <li className="nav-item">
                <NavLink  onClick={handleLogout} className="nav-link"to="/login">Logout</NavLink>
              </li>
                </>)
              }
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HEader;
