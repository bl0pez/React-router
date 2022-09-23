import { PrivateRouters } from "../privado/routes/PrivateRouters"
import { PublicRouter } from "../publico/routes/PublicRouter"

export const AppRouters = () => {
  return (
    <>
    
      {/* <PublicRouter /> */}

      <PrivateRouters />
    
    </>
  )
}
