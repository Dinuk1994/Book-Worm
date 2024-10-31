import { Routes, Route, Navigate } from "react-router-dom"
import Auth from "./layouts/authLayout/Auth"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  )
}