import { Outlet } from "react-router-dom"
import UserNavbar from "../../components/user/UserNavbar"
import Footer from "../../components/common/Footer"


const HomeLAyout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header >
        <UserNavbar />
      </header>
      <main className="overflow-auto">
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default HomeLAyout