import Book from "../model/book.model.js";
import Favorite from "../model/favourite.model.js";


export const addFavorite = async (req, res) => {
  try {
    const { userId, bookId } = req.body;

    let userFavorites = await Favorite.findOne({ userId });

    if (userFavorites) {
    
      const isBookAlreadyFavorited = userFavorites.favorite.some(
        (fav) => fav.bookId.toString() === bookId
      );

      if (isBookAlreadyFavorited) {
        return res.status(400).json({ message: "Book already in favorites" });
      }

      userFavorites.favorite.push({ bookId });
      await userFavorites.save();

      return res.status(200).json({ message: "Book added to favorites" });
    }

    userFavorites = new Favorite({
      userId,
      favorite: [{ bookId }]
    });

    await userFavorites.save();
    return res.status(200).json({ message: "Favorite list created and book added" });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



export const getAllFavorites = async (req, res) => {
  try {
    const { userId } = req.params;
    const userFavourite = await Favorite.findOne({ userId }).populate('favorite.bookId');

    if (!userFavourite) {
      return res.status(404).json({ message: "Favorite list not found" })
    }

    return res.status(200).json({ favorite: userFavourite.favorite });
    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const removeFavorite = async (req, res) => {
  try {
    const{userId,bookId} = req.body

    const userFavorites = await Favorite.findOne({userId})
    userFavorites.favorite = userFavorites.favorite.filter((fav)=> fav.bookId.toString() !== bookId)
    await userFavorites.save()
    return res.status(200).json({message:"Book removed from favorites"})
    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


