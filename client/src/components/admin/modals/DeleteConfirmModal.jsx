/* eslint-disable react/prop-types */
import { RiErrorWarningLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../../api/book/deleteBook";
import { getAllBooks } from "../../../api/book/getAllBooks";

const DeleteConfirmModal = ({ deleteModal, book }) => {

    const dispatch  = useDispatch();

    const handleDelete = () => {
        dispatch(deleteBook(book._id)).then(() => {
            setTimeout(() => {
                dispatch(getAllBooks());
            }, 1000);
        });
    }

    return (
        <div>
            <dialog ref={deleteModal} id="my_modal_3" className="modal  backdrop-blur-lg">
                <div className="modal-box bg-gray-600 bg-opacity-75">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="flex items-center gap-x-2">
                        <RiErrorWarningLine className="text-5xl text-red-500" />
                        <h3 className="font-bold text-lg text-white">Do you want to delete {book.title}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-x-5 mt-5">
                        <form method="dialog" className="col-span-1 w-full">
                            <button className="btn btn-ghost bg-blue-400 hover:bg-blue-500 text-white w-full ">No</button>
                        </form>
                        <div className="col-span-1">
                            <button onClick={handleDelete} className="btn btn-error text-white w-full ">Yes</button>
                        </div>

                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default DeleteConfirmModal