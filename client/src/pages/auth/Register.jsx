/* eslint-disable react/no-unescaped-entities */
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../api/auth/signin";
const Register = () => {

  const dispatch = useDispatch();
  const[regData , setRegData] = useState({
    fullName : "",
    userName : "",
    email : "",
    password : ""
  })
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault()
    //console.log(regData)
    const success = await dispatch(signin(regData))

    if(signin.fulfilled.match(success)){
      navigate("/auth/login")
    }

  }
 
  return (
    <div>
      <div className="p-8 mobile:p-2 mb-10">
        <div className="grid justify-center">
          <label className="text-5xl font-semibold text-white mobile:text-gray-800 mobile:text-4xl" htmlFor="">Register</label>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-y-7 mt-7 px-10" action="">
        <div>
            <label className="text-white text-lg mobile:text-gray-800" htmlFor="">Enter Fullname</label>
            <label className="input mt-2 input-bordered flex items-center gap-2">
              <FaUser />
              <input name="fullName" value={regData.fullName} onChange={(e)=>setRegData({...regData,fullName : e.target.value})} type="text" className="grow border-none focus:ring-0" placeholder="Fullname" />
            </label>
          </div>
          <div>
            <label className="text-white text-lg mobile:text-gray-800" htmlFor="">Enter Username</label>
            <label className="input mt-2 input-bordered flex items-center gap-2">
              <FaUser />
              <input name="userName" value={regData.userName} onChange={(e)=>setRegData({...regData,userName : e.target.value})} type="text" className="grow border-none focus:ring-0" placeholder="Username" />
            </label>
          </div>
          <div>
            <label className="text-white text-lg mobile:text-gray-800" htmlFor="">Enter Email</label>
            <label className="input mt-2 input-bordered flex items-center gap-2">
              <MdEmail />
              <input name="email" value={regData.email} onChange={(e)=>setRegData({...regData,email : e.target.value})} type="text" className="grow border-none focus:ring-0" placeholder="Email" />
            </label>
          </div>
          <div>
            <label className="text-white text-lg mobile:text-gray-800" htmlFor="">Enter Password</label>
            <label className="input mt-2 input-bordered flex items-center gap-2">
              <FaUnlockAlt />
              <input name="password" value={regData.password} onChange={(e)=>setRegData({...regData,password : e.target.value})} type="password" className="grow border-none focus:ring-0" placeholder="Password" />
            </label>
          </div>

          <label className="text-white" htmlFor="signin">Don't have an account? <a onClick={() => navigate("/auth/login")} className="hover:underline ml-2 text-lg hover:cursor-pointer text-yellow-500" >Login</a></label>

          <div>
            <button type="submit" className="btn btn-ghost  text-white text-lg bg-blue-400 shadow-xl shadow-gray-800 hover:bg-blue-500 w-full">
              Register
            </button>

          </div>

        </form>
      </div>
    </div>
  )
}

export default Register