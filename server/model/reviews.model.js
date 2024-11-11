import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true
    },
    reviews: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            },
            message : {
                type : String,
                required : true
            }
         
        }
    ]
},{
    timestamps : true
})

const Review = mongoose.model("Review", reviewSchema)

export default Review;