import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-blue-300">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl text-green-700 font-bold">Book Worm - Administration</a>
                </div>
                <div className="flex-none">

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <FaUserCircle className="size-full p-1 text-yellow-600" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar