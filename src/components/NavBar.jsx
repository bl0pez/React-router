import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const NavBar = () => {

  const { logout } = useContext(AuthContext);

  return (
    <header className="header">
      <nav className="nav">
        <NavLink
          className={
            ({ isActive }) => isActive
              ? "active" : ""
          }
          to="/home"
        >Home
        </NavLink>
        <NavLink
          className={
            ({ isActive }) => isActive
              ? "active" : ""
          }
          to="/about"
        >About
        </NavLink>
        <button 
          className='btn-logout'
          onClick={logout}
        >
          Logout
        </button>
      </nav>
    </header>
  )
}
