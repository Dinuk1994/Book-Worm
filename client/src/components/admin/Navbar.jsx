import { FaUserCircle } from "react-icons/fa";

import { useRef } from "react";
import LogoutConfirmModal from "./modals/LogoutConfirmModal";


const Navbar = () => {
    const logoutRef = useRef()

    const handleLogout = () => {
       logoutRef.current.showModal()
    }

    return (
        <div>
            <div className="navbar  bg-blue-500">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl text-yellow-300 font-bold">Book Worm - Administration</a>
                </div>
                <div className="flex-none">

                    <div className="dropdown dropdown-end  ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <FaUserCircle className="size-full p-1 text-yellow-100" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm relative z-30 dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a onClick={handleLogout}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <LogoutConfirmModal logOutModal={logoutRef}/>
        </div>
    )
}

export default Navbar