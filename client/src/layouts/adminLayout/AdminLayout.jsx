import { Outlet } from "react-router-dom"
import Navbar from "../../components/admin/Navbar"
import SideBar from "../../components/admin/SideBar"

const AdminLayout = () => {
  return (
    <div>
      <div className="grid grid-cols-11 h-screen ">
        <div className="col-span-2   bg-cover bg-base-300 shadow-2xl max-h-screen shadow-gray-700 relative z-10" >
            <SideBar/>
        </div>
        <div className="col-span-9 relative z-20 overflow-hidden ">
          <div >
            <Navbar />
          </div>
          <main className=" text-white bg-gray-500 p-5" >
            <Outlet />
          </main>
        </div>
      </div>

    </div>
  )
}

export default AdminLayout