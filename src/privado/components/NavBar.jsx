import { NavLink } from "react-router-dom"

export const NavBar = () => {
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
          className="btn-logout">
          Logout
        </button>
      </nav>
    </header>
  )
}
