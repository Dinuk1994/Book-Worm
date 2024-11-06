import express from "express";
import { addFavorite, getAllFavorites, removeFavorite } from "../controller/favourite.controller.js";


const favoriteRouter  = express.Router();

favoriteRouter.post("/add/:userId",addFavorite)
favoriteRouter.get("/get/:userId",getAllFavorites)
favoriteRouter.delete("/remove/:userId",removeFavorite)

export default favoriteRouter;

