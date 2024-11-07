/* eslint-disable react/prop-types */
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../../../api/favorite/removeFavorite";
import { getFavorite } from "../../../api/favorite/getFavorite";

const FavoriteReomoveModal = ({removeFavModal, book, user, setIsFavorited}) => {

    const dispatch = useDispatch();

    const handleRemoveFavorite = async(e)=>{
        e.preventDefault();
        const removeData = {
            userId: user?._id || user?.userId,
            bookId: book?._id
        }
        await dispatch(removeFavorite({userId : user?._id || user?.userId, removeFavData :removeData })).then(()=>{
            dispatch(getFavorite(user?._id || user?.userId));
        });
        setIsFavorited(false);
        removeFavModal.current.close();
    }

    return (
        <div>
            <dialog ref={removeFavModal} id="my_modal_3" className="modal  backdrop-blur-lg">
                <div className="modal-box bg-gray-600 bg-opacity-75">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="flex items-center gap-x-2">
                        <BsFillQuestionCircleFill className="text-blue-500 size-6" />
                        <h3 className="font-bold text-lg text-white">Do you want to remove favorite <span className="text-orange-400">{book?.title}</span> ?</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-x-5 mt-5">
                        <form method="dialog" className="col-span-1 w-full">
                            <button className="btn btn-ghost bg-red-400 hover:bg-red-500 text-white w-full ">No</button>
                        </form>
                        <div className="col-span-1">
                            <button onClick={handleRemoveFavorite} className="btn btn-ghost bg-blue-400 hover:bg-blue-500 text-white w-full ">Yes</button>
                        </div>

                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default FavoriteReomoveModal