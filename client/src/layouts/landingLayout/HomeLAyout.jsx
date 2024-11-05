import { Outlet } from "react-router-dom"
import UserNavbar from "../../components/user/UserNavbar"

const HomeLAyout = () => {
  return (
    <div className="flex flex-col h-screen">
      <header >
        <UserNavbar />
      </header>
      <main className="overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default HomeLAyout