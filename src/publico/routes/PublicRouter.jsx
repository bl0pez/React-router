import { Navigate, Route, Routes } from "react-router-dom"
import { PublicLayout } from "../layouts/PublicLayout"
import { Login } from "../pages/Login"

export const PublicRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<PublicLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Route>
    </Routes>
  )
}
