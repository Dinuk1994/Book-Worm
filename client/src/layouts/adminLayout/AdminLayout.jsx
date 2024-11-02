import { Outlet } from "react-router-dom"
import Navbar from "../../components/admin/Navbar"
import SideBar from "../../components/admin/SideBar"

const AdminLayout = () => {
  return (
    <div>
      <div className="grid grid-cols-11">
        <div className="col-span-2 h-screen bg-cover bg-base-300 shadow-2xl shadow-gray-700 relative z-10" >
            <SideBar/>
        </div>
        <div className="col-span-9 overflow-hidden ">
          <div >
            <Navbar />
          </div>
          <main className="h-full text-white bg-gray-400 p-5" >
            <Outlet />
          </main>
        </div>
      </div>

    </div>
  )
}

export default AdminLayout