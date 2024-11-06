import Logo from "../../assets/Logo.png"
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
const UserNavbar = () => {
  const user = useSelector((state) => state.auth.user)

  return (
    <div className="bg-gray-700 h-16">
      <div className="grid grid-cols-12 tablet:grid-cols-7 mobile:grid-cols-3 h-full ">
        <div className="flex col-span-3 mobile:col-span-2 tablet:col-span-3 h-full items-center mobile:justify-start">
          <img className="w-24 mobile:w-20 mobile:mt-0 " src={Logo} alt="" />
          <label className="font-semibold mobile:text-sm text-xl tablet:text-base text-green-400" htmlFor="">Dive into a world of words</label>
        </div>
        <div className="col-span-5 tablet:hidden mobile:hidden">

        </div>
        <div className="flex col-span-4 mobile:hidden tablet:col-span-4 text-gray-400 items-center gap-x-6">
          <button className="btn btn-ghost hover:text-gray-100" htmlFor="">Home</button>
          <button className="btn btn-ghost hover:text-gray-100" htmlFor="">Bookmarks</button>
          <button className="btn btn-ghost hover:text-gray-100" htmlFor="">Favorites</button>
          <button className="btn btn-ghost hover:text-gray-100" htmlFor="">{user?.userName}</button>
        </div>
        <div className="mobile:col-span-1 tablet:hidden  laptop:hidden desktop:hidden flex items-center">
          <div className="flex w-full justify-end pr-5">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
                <FaUserCircle className="size-full mobile:size-10 p-1" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm bg-gray-700 text-gray-300 dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a>{user?.userName}</a></li>
                <li><a>Bookmarks</a></li>
                <li><a>Suggestions</a></li>
                <li><a>Logout</a></li>
                <li><a>Settings</a></li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default UserNavbar