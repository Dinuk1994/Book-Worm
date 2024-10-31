import { Routes, Route, Navigate } from "react-router-dom"
import Auth from "./layouts/authLayout/Auth"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import AdminLayout from "./layouts/adminLayout/adminLayout"
import Dashboard from "./pages/admin/Dashboard"
import Books from "./pages/admin/Books"
import HomeLAyout from "./layouts/landingLayout/HomeLAyout"
import LandingPage from "./pages/home/LandingPage"
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />

        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="books" element={<Books/>}/>
        </Route>

        <Route path="/home" element={<HomeLAyout/>} >
          <Route path="landing" element={<LandingPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}