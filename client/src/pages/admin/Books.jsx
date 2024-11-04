
import { useSelector } from "react-redux";
import AddBookDrawer from "../../components/admin/AddBookDrawer";
import DisplayBookCard from "../../components/common/DisplayBookCard";
import { useEffect } from "react";


const Books = () => {

    const user = useSelector((state) => state.auth.user)

    useEffect(() => {
    }, [user])

    return (
        <div className=" pb-24">
            <div className="relative z-10">
                <AddBookDrawer />
            </div>
            <div className="grid p-10 grid-cols-4 gap-y-7  h-screen overflow-auto">
                <div className="col-span-1 ">
                    <DisplayBookCard user={user} />
                </div>
                <div className="col-span-1 ">
                    <DisplayBookCard user={user} />
                </div>
                <div className="col-span-1 ">
                    <DisplayBookCard user={user} />
                </div>
                <div className="col-span-1 ">
                    <DisplayBookCard user={user} />
                </div>
                <div className="col-span-1 ">
                    <DisplayBookCard user={user} />
                </div>
                <div className="col-span-1 ">
                    <DisplayBookCard />
                </div>  <div className="col-span-1 ">
                    <DisplayBookCard user={user} />
                </div>

            </div>
        </div>
    );

};

export default Books;
