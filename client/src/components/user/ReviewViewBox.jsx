/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

const ReviewViewBox = ({review}) => {
   

  return (
    <div className="w-full px-4 py-4 shadow-2xl shadow-black border-2 border-blue-500 rounded-lg">
        <div className="grid">
            <label className="text-sm  font-semibold italic" htmlFor="">{review?.userId?.userName}</label>
            <p className="text-sm mt-2 italic">" {review?.message} "</p>
        </div>
    </div>
  )
}

export default ReviewViewBox