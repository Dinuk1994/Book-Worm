/* eslint-disable react/prop-types */
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../../api/favorite/addFavorite";
import { getFavorite } from "../../../api/favorite/getFavorite";

const FavoriteConfirmModal = ({ confirmFavModal, book, user }) => {

    const dispatch = useDispatch()

    const handleFavorite = async (e) => {
        e.preventDefault();
        const favoriteBook = {
            userId: user?._id || user?.userId,
            bookId: book?._id
        }
        await dispatch(addFavorite({ userId: user?._id || user?.userId, favData: favoriteBook })).then(() => {
            dispatch(getFavorite(user?._id || user?.userId));
        });
        console.log("favoriteBook", favoriteBook);
        confirmFavModal.current.close();
    }


    return (
        <div>
            <dialog ref={confirmFavModal} id="my_modal_3" className="modal  backdrop-blur-lg">
                <div className="modal-box bg-gray-600 bg-opacity-75">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="flex items-center gap-x-2">
                        <BsFillQuestionCircleFill className="text-blue-500 size-6" />
                        <h3 className="font-bold text-lg text-white">Do you want to favorite <span className="text-orange-400">{book?.title}</span> ?</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-x-5 mt-5">
                        <form method="dialog" className="col-span-1 w-full">
                            <button className="btn btn-ghost bg-red-400 hover:bg-red-500 text-white w-full ">No</button>
                        </form>
                        <div onClick={handleFavorite} className="col-span-1">
                            <button className="btn btn-ghost bg-blue-400 hover:bg-blue-500 text-white w-full ">Yes</button>
                        </div>

                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default FavoriteConfirmModal