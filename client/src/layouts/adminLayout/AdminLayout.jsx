import { Outlet } from "react-router-dom"
import Navbar from "../../components/admin/Navbar"
import SideBar from "../../components/admin/SideBar"

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-11 h-screen">
      <div className="col-span-2 h-full overflow-hidden bg-base-300 shadow-2xl shadow-gray-700">
        <SideBar />
      </div>
      <div className="col-span-9 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-grow overflow-auto bg-gray-500  text-white">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout