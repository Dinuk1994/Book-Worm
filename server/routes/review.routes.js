import express from "express";
import { addreview, getReviews} from "../controller/review.controller.js";

const reviewRouter = express.Router();

reviewRouter.post("/addReview/:bookId",addreview)
reviewRouter.get("/getReview/:bookId",getReviews)

export default reviewRouter