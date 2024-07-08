import { Navigate, Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth/pages"
import { HerosRoutes } from "../heroes"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="/*" element={<HerosRoutes />}/>
            <Route path="*" element={<Navigate to='/heros' />}/>
        </Routes>
    </>
  )
}
