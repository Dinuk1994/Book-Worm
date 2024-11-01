/* eslint-disable no-unused-vars */
import { Routes, Route, Navigate } from "react-router-dom"
import Auth from "./layouts/authLayout/Auth"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import AdminLayout from "./layouts/adminLayout/adminLayout"
import Dashboard from "./pages/admin/Dashboard"
import Books from "./pages/admin/Books"
import HomeLAyout from "./layouts/landingLayout/HomeLAyout"
import LandingPage from "./pages/home/LandingPage"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { checkAuth } from "./api/auth/checkAuth"
import { CheckAuth } from "./common/CheckAuth"

export default function App() {
    const { user, isAuthenticate, isLoading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch])

    console.log("Auth status:", isAuthenticate, "User role:", user?.role);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/auth/login" />} />

                <Route path="/auth" element={<CheckAuth isAuthenticate={isAuthenticate} user={user}>
                    <Auth />
                </CheckAuth>}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>

                <Route path="/admin" element={<CheckAuth isAuthenticate={isAuthenticate} user={user}>
                    <AdminLayout />
                </CheckAuth>}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="books" element={<Books />} />
                </Route>

                <Route path="/home" element={<CheckAuth isAuthenticate={isAuthenticate} user={user}>
                    <HomeLAyout />
                </CheckAuth>} >
                    <Route path="landing" element={<LandingPage />} />
                </Route>
            </Routes>
        </div>
    );
}
