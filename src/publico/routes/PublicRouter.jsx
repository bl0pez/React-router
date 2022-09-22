import { Navigate, Route, Routes } from "react-router-dom"
import { PublicLayouts } from "../layouts/PublicLayouts"
import { Login } from "../pages/Login"

export const PublicRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<PublicLayouts />} >
                    <Route index element={<Login />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Route>
            </Routes>

        </>
    )
}
