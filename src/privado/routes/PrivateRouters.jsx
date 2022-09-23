import { Navigate, Route, Routes } from "react-router-dom"
import { PrivateLayout } from "../layouts/PrivateLayout"
import { About } from "../pages/About"
import { Home } from "../pages/Home"

export const PrivateRouters = () => {
  return (
    <Routes>
        <Route path="/*" element={<PrivateLayout />}>
            <Route path="about" element={<About />} />
            <Route path="home" element={<Home />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Route>
    </Routes>
  )
}
