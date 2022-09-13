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
          to="/"
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
      </nav>
    </header>
  )
}
