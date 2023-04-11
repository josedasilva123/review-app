import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { RegisterPage } from "../pages/RegisterPage"

export const RoutesMain = () => {
    const [user, setUser] = useState(null);
    return(
        <Routes>
            <Route path="/" element={<HomePage user={user} setUser={setUser} />}/>
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
}