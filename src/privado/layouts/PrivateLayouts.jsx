import { Outlet } from "react-router-dom"
import { NavBar } from "../../components/NavBar"

export const PrivateLayouts = () => {
  return (
    <>

      <NavBar />

      <div className="container">
        <h1>Rutas Privadas</h1>

        <Outlet />
      </div>

    </>
  )
}
