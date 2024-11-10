/* eslint-disable react/prop-types */

import { useRef } from "react"
import ReviewModal from "./ReviewModal"
import ReviewViewBox from "../user/ReviewViewBox";

const DetailBox = ({ detailModal, book, user }) => {
    const reviewModalRef = useRef();

    const openReviewModal = () => {
        reviewModalRef.current.showModal()
        detailModal.current.close()
    }

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
                            <div className="grid grid-cols-2 mt-4 j">
                                <label className="text-yellow-300 mobile:text-xs font-semibold flex justify-start" htmlFor="">
                                    {book?.publicationDate ? book.publicationDate.toString().split("T")[0] : "Publication date not available"}
                                </label>

                                <div className="col-span-1 flex justify-end">
                                    <label className="text-yellow-300 mobile:text-xs font-semibold" htmlFor="">{book?.pages} Pages</label>
                                </div>

                            </div>
                            <div className="mt-5">
                                <label className="mobile:text-xs" htmlFor="">{book?.description}</label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-8">
                        <button onClick={() => window.open(book?.pdfFile, "_blank")} className="btn btn-ghost shadow-xl shadow-black w-full bg-green-400 hover:bg-green-500 text-white">
                            View Book
                        </button>
                    </div>
                    <div className="w-full mt-8">
                        <button onClick={openReviewModal} className="btn btn-ghost shadow-xl shadow-black w-full bg-yellow-400 hover:bg-yellow-500 text-white">
                            Add a Review
                        </button>
                    </div>
                    <div className="grid">
                        <div className="mt-8">
                            <hr className="border-2 border-gray-600" />
                        </div>
                        <div className="flex mt-2 justify-center">
                            <label className="text-xl italic font-semibold" htmlFor="">Book Reviews</label>
                        </div>
                        <div className="mt-6 grid gap-y-6">
                            <ReviewViewBox/>
                            <ReviewViewBox/>
                            <ReviewViewBox/>
                            <ReviewViewBox/>
                        </div>
                    </div>

                </div>
            </dialog>
            <ReviewModal reviewModal={reviewModalRef} book={book} user={user} />
        </div>
    )
}

export default DetailBox