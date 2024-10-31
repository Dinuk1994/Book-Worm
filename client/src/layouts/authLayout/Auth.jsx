/* eslint-disable react/no-unescaped-entities */
import { Outlet } from "react-router-dom"
import AuthImage from "../../assets/auth.png"

const Auth = () => {
    return (
        <div className="relative overflow-hidden min-h-screen">
            <div className="bg-cover bg-center inset-0 absolute" style={{ backgroundImage: `url(${AuthImage})`, filter: "blur(5px)" }}></div>

            <div className="grid grid-cols-12 mobile:grid-cols-1 m-5 mobile:m-3 ">
                <div className="grid col-span-5 w-full items-center h-screen order-1 mobile:order-2">
                    <div className=" h-auto  z-10 mobile:-mt-52">
                        <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
                            <Outlet />
                        </div>
                    </div>
                </div>

                <div className="col-span-7 mt-40 mobile:mt-2 order-2 mobile:order-1 z-10  items-center">
                    <div className="flex justify-center">
                        <label className="text-[90px] font-bold text-blue-400 mobile:text-[60px]" htmlFor="">Book Worm</label>
                    </div>
                    <div className="flex justify-center mt-8  px-8">
                        <label className="text-xl font-bold text-black text-center mobile:text-lg" htmlFor="">"Reading opens doors to new worlds and ideas, helping us grow and see life from different perspectives. It’s a simple yet powerful way to connect with knowledge and stories beyond our own experiences."</label>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Auth