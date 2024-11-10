/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const ReviewModal = ({ reviewModal, book, user }) => {
    return (
        <div>
            <dialog ref={reviewModal} id="review_modal" className="modal backdrop-blur-md ">
                <div className="modal-box bg-gradient-to-r w-full tablet:min-w-[650px] mobile:min-w-40 min-w-[800px] opacity-95 bg-opacity-10 from-blue-500 to-blue-900 text-gray-100 rounded-lg shadow-2xl border border-gray-600 backdrop-filter backdrop-blur-sm p-6">
       
                    <form method="dialog" className="absolute right-4 top-4 mobile:right-1 mobile:top-1">
                        <button className="btn btn-circle bg-red-400 hover:bg-red-500 btn-ghost mobile:btn-sm text-white">
                            ✕
                        </button>
                    </form>
                    <div className="space-y-4">
                        <h3 className="text-2xl mobile:text-lg font-semibold text-center">
                            Share Your Thoughts on <span className="italic">{book?.title}</span>
                        </h3>

                        <label htmlFor="review-text" className="block mobile:text-sm text-lg font-medium">
                            Tell us something about the book:
                        </label>
                        
                        <textarea 
                            id="review-text" 
                            className="textarea textarea-bordered w-full h-32 p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Write your review here..."
                        ></textarea>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button 
                            type="submit" 
                            className="btn bg-blue-600 hover:bg-blue-700 mobile:text-sm text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
                        >
                            Submit Review
                        </button>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ReviewModal;
