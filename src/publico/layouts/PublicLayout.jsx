import { Outlet } from 'react-router-dom';

export const PublicLayout = () => {
  return (
    <div className="content-center">
        <h1>Rutas Publicas</h1>

        <Outlet />

    </div>
  )
}
