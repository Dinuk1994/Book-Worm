/* eslint-disable react/prop-types */

const DetailBox = ({ detailModal, book }) => {
    return (
        <div >
            <dialog ref={detailModal} id="my_modal_3" className="modal backdrop-blur-md">
                <div className="modal-box bg-gray-600 text-gray-300 h-full w-full mobile:w-[350px] mobile:h-auto tablet:h-auto bg-brown-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <div className="flex justify-center">
                        <div className="grid text-center ">
                            <label className="font-bold text-4xl mobile:text-2xl ">{book?.title}</label>
                            <div className="flex justify-center">
                                <img className="w-48 mobile:w-36 mt-6 border-4 border-green-600 shadow-2xl shadow-black-600" src={book?.coverImage} alt="" />
                            </div>
                            <div className="mt-5">
                                <label className="mobile:text-xs" htmlFor="">{book?.description}</label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-8">
                        <button  onClick={() => window.open(book?.pdfFile, "_blank")} className="btn btn-ghost shadow-xl shadow-black w-full bg-green-400 hover:bg-green-500 text-white">
                            View Book
                        </button>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default DetailBox