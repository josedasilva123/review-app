import { Route, Routes } from "react-router-dom"
import { PublicRoutes } from "../components/PublicRoutes"
import { HomePage } from "../pages/HomePage"
import { RegisterPage } from "../pages/RegisterPage"

export const RoutesMain = () => {    
    return(
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/register" element={<PublicRoutes />}>
                <Route index element={<RegisterPage />} />
            </Route>            
        </Routes>
    )
}