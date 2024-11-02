import express from "express";
import { addBook, deleteBook, getBookById, getbooks, updateBook } from "../controller/book.controller.js";

const bookRouter = express.Router();

bookRouter.post("/add-book",addBook)
bookRouter.get("/get-books",getbooks)
bookRouter.get("/get-book/:id",getBookById)
bookRouter.put("/update-book/:id",updateBook)
bookRouter.delete("/delete-book/:id",deleteBook)

export default bookRouter