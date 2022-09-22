import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { PrivateRoutes } from '../privado/routes/PrivateRoutes';
import { PublicRouter } from '../publico/routes/PublicRouter';

export const AppRouters = () => {

  const { isLogin } = useContext(AuthContext);

  return (
    <>
      {
        isLogin
        ?
        (<PrivateRoutes />)
        :
        (<PublicRouter />)
      }
    
    </>
  )
}
