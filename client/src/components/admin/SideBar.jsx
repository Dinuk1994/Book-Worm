import { MdAdminPanelSettings } from "react-icons/md";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdManageHistory } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen text-center">
            <div className="h-6 bg-green-500"></div>
            <div className="flex pt-12 justify-center items-center text-blue-600">
                <MdAdminPanelSettings className="text-5xl" />
                <label className="text-3xl ml-1 font-semibold" htmlFor="">Panel Board</label>
            </div>
            <div className="flex justify-center">
                <div className="grid gap-y-6 mt-10 text-green-600 font-semibold">
                    <div onClick={() => navigate("/admin/dashboard")} className="btn btn-ghost flex gap-x-4 hover:bg-gray-500 justify-start items-center group">
                        <AiOutlineDashboard className="text-2xl group-hover:text-yellow-300" />
                        <label className="text-xl group-hover:text-yellow-300" htmlFor="">Dashboard</label>
                    </div>
                    <div onClick={() => navigate("/admin/books")} className="btn btn-ghost flex gap-x-4 hover:bg-gray-500 justify-start items-center group">
                        <MdManageHistory className="text-2xl group-hover:text-yellow-300" />
                        <label className="text-xl group-hover:text-yellow-300" htmlFor="">Manage</label>
                    </div>
                </div>
            </div>
            <div className="h-6 bg-green-500 mt-auto"></div>
        </div>
    );
}

export default SideBar;
