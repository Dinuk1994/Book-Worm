import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    favorite: [
        {
            bookId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Book",
                required: true
            }
        }
    ]

}, {
    timestamps: true
})

const Favorite = mongoose.model("Favorite", favoriteSchema)

export default Favorite;