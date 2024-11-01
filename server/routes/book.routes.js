import express from "express";
import { addBook, getbooks } from "../controller/book.controller.js";

const bookRouter = express.Router();

bookRouter.post("/add-book",addBook)
bookRouter.get("/get-books",getbooks)

export default bookRouter