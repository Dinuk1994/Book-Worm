import mongoose from "mongoose";
import Review from "../model/reviews.model.js";
import Book from "../model/book.model.js";

export const addreview = async (req, res) => {
    try {
        const { bookId } = req.params;
        const { reviews } = req.body;

        const { userId, message } = reviews[0];

        const book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        let review = await Review.findOne({ bookId });

        if (!review) {
            review = new Review({
                bookId,
                reviews: [
                    {
                        userId: new mongoose.Types.ObjectId(userId),
                        message
                    }
                ]
            });
        } else {
            const existingReview = review.reviews.find(
                (rev) => rev.userId.toString() === userId
            );

            if (existingReview) {
                return res.status(400).json({ message: "Review already exists" });
            }

            review.reviews.push({
                userId: new mongoose.Types.ObjectId(userId),
                message
            });
        }

        await review.save();

        return res.status(200).json({ message: "Review added successfully" });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getReviews = async (req, res) => {
    try {
        const {bookId} = req.params;
        const review = await Review.findOne({bookId}).populate("reviews.userId");

      if (!review) {
            return res.status(200).json({ reviews: [] });
        }

        return res.status(200).json({ review });
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
