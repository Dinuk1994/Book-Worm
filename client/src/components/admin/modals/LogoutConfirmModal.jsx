/* eslint-disable react/prop-types */

import { RiErrorWarningLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { logout } from "../../../api/auth/logout";

const LogoutConfirmModal = ({logOutModal}) => {
    const dispatch  = useDispatch();

    const handleLogout = () => {
        setTimeout(() => {
          dispatch(logout())  
        }, 1000);
    }
    return (
        <div>
            <div>
                <dialog ref={logOutModal} id="my_modal_3" className="modal  backdrop-blur-lg">
                    <div className="modal-box bg-gray-600 bg-opacity-75">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div className="flex items-center gap-x-2">
                            <RiErrorWarningLine className="text-5xl text-red-500" />
                            <h3 className="font-bold text-lg text-white">Confirm Logout</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-x-5 mt-5">
                            <form method="dialog" className="col-span-1 w-full">
                                <button className="btn btn-ghost bg-blue-400 hover:bg-blue-500 text-white w-full ">No</button>
                            </form>
                            <div className="col-span-1">
                                <button onClick={handleLogout}  className="btn btn-error text-white w-full ">Yes</button>
                            </div>

                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    )
}

export default LogoutConfirmModal