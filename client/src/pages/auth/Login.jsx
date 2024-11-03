/* eslint-disable react/no-unescaped-entities */
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../api/auth/login";

const Login = () => {
  const[loginData ,setLoginData] = useState({
    userName : "",
    email : "",
    password : ""
  })

  const dispatch = useDispatch();


  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log(loginData);
    dispatch(login(loginData))
  }



  const navigate = useNavigate();
  return (
    <div className="p-8 mobile:p-2 mb-10">
      <div className="grid justify-center">
        <label  className="text-5xl font-semibold text-white mobile:text-gray-800 mobile:text-4xl" htmlFor="">Login</label>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-y-7 mt-7 px-10" action="">
        <div>
          <label className="text-white text-lg mobile:text-gray-800" htmlFor="">Enter Username</label>
          <label className="input mt-2 input-bordered flex items-center gap-2">
            <FaUser />
            <input value={loginData.userName} onChange={(e)=>setLoginData({...loginData,userName:e.target.value})} type="text" className="grow border-none focus:ring-0" placeholder="Username" />
          </label>
        </div>
        <div>
          <label className="text-white text-lg mobile:text-gray-800" htmlFor="">Enter Email</label>
          <label value={loginData.email} onChange={(e)=>setLoginData({...loginData,email : e.target.value})} className="input mt-2 input-bordered flex items-center gap-2">
            <MdEmail />
            <input type="text" className="grow border-none focus:ring-0" placeholder="Email" />
          </label>
        </div>
        <div>
          <label className="text-white text-lg mobile:text-gray-800" htmlFor="">Enter Password</label>
          <label className="input mt-2 input-bordered flex items-center gap-2">
            <FaUnlockAlt />
            <input value={loginData.password} onChange={(e)=>setLoginData({...loginData,password : e.target.value})} type="password" className="grow border-none focus:ring-0" placeholder="Password" />
          </label>
        </div>

        <label className="text-white" htmlFor="signin">Don't have an account? <a onClick={() => navigate("/auth/register")} className="hover:underline ml-2 text-lg hover:cursor-pointer text-yellow-500" >Register</a></label>

        <div >
          <button type="submit" className="btn btn-ghost text-white text-lg shadow-xl shadow-gray-800 bg-blue-400 hover:bg-blue-500 w-full">
            Login
          </button>

        </div>

      </form>
    </div>
  )
}

export default Login