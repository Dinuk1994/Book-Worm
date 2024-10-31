/* eslint-disable react/no-unescaped-entities */
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  return (
    <div className="p-8 mobile:p-2 mb-10">
      <div className="grid justify-center">
        <label className="text-5xl font-semibold text-white mobile:text-gray-800" htmlFor="">Login</label>
      </div>
      <form className="grid gap-y-7 mt-7 px-10" action="">
        <div>
          <label className="text-white text-lg" htmlFor="">Enter Username</label>
          <label className="input mt-2 input-bordered flex items-center gap-2">
            <FaUser />
            <input type="text" className="grow" placeholder="Username" />
          </label>
        </div>
        <div>
          <label className="text-white text-lg" htmlFor="">Enter Email</label>
          <label className="input mt-2 input-bordered flex items-center gap-2">
            <MdEmail />
            <input type="text" className="grow" placeholder="Email" />
          </label>
        </div>
        <div>
          <label className="text-white text-lg" htmlFor="">Enter Password</label>
          <label className="input mt-2 input-bordered flex items-center gap-2">
            <FaUnlockAlt />
            <input type="password" className="grow" placeholder="Password" />
          </label>
        </div>

        <label className="text-white" htmlFor="signin">Don't have an account? <a onClick={() => navigate("/auth/register")} className="hover:underline ml-2 text-lg hover:cursor-pointer text-yellow-500" >Register</a></label>

        <div >
          <div className="btn btn-ghost text-white text-lg bg-blue-400 hover:bg-blue-500 w-full">
            Login
          </div>

        </div>

      </form>
    </div>
  )
}

export default Login