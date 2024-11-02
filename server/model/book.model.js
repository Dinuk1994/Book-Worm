import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    publicationDate: {
        type: Date,
        required: true,
    },
    pages: {
        type: Number,
        required: true,
    },
    coverImage: {
        type: String, 
        required: true,
    },
    pdfFile: {
        type: String, 
        required: true,
    },
 
},{
    timestamps: true
});


const Book = mongoose.model("Book", bookSchema);

export default Book;
