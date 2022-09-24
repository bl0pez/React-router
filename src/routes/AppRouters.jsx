import { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import { PrivateRouters } from "../privado/routes/PrivateRouters"
import { PublicRouter } from "../publico/routes/PublicRouter"

export const AppRouters = () => {

  const { isLogin } = useContext(AuthContext);

  return (
    <>
    {
      isLogin ? <PrivateRouters /> : <PublicRouter />
    }
    </>
  )
}
