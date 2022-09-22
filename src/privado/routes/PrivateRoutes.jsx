import { Navigate, Route, Routes } from "react-router-dom"

import { PrivateLayouts } from "../layouts/PrivateLayouts"
import { About } from "../pages/About"
import { Home } from "../pages/Home"


export const PrivateRoutes = () => {
  return (
    <>
    
    <Routes>
        <Route path="/*" element={<PrivateLayouts />} >
                <Route path="about" element={<About />} />
                <Route path="home" element={<Home />} />
        <Route path="/*" element={<Navigate to="/home" />} />
        </Route>
    </Routes>
    
    </>
  )
}
