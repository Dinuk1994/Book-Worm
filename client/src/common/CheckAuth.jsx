/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom"

export const CheckAuth = ({isAuthenticate , user , children}) => {
    const location = useLocation();

    if(!isAuthenticate && !(location.pathname.includes('/login') || location.pathname.includes('/register'))){
        return <Navigate to="/auth/login" />
    }

    if(isAuthenticate && (location.pathname.includes('/login'))){
        if(user?.role === "admin"){
            return <Navigate to="/admin/dashboard" />
        }else if(user?.role === "user"){
            return <Navigate to="/home/landing" />
        }
    }

    if(isAuthenticate && user?.role !== "admin" && location.pathname.includes("/admin")){
        return <Navigate to="/home/landing" />
    }

    if(isAuthenticate && user?.role === "admin" && !location.pathname.includes("/admin")){
        return <Navigate to="/admin/dashboard" />
    }

    return<>{children}</>
}