/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getFavorite } from "../../api/favorite/getFavorite";
import DisplayBookCard from "../../components/common/DisplayBookCard";

const FavoritePage = ({ user }) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorite.favorite);


  useEffect(() => {
    dispatch(getFavorite(user?._id || user?.userId));
  }, [dispatch, user]);

  const favoriteBook = favorites.favorite
  console.log("favoriteBook", favoriteBook);



  return (
    <div className="bg-gray-950 h-full">
      <div className="flex justify-center pt-10">
        <label className="text-5xl mobile:text-3xl font-bold text-green-400" htmlFor="">Your Favorites</label>

      </div>
      <div className="mt-5 flex justify-center">
        <hr className="border-2 border-green-950 w-1/2 mobile:w-1/3" />
      </div>
      <div className="flex justify-center">
        <div className="grid relative w-full max-w-[1300px] h-full p-10 grid-cols-4 mobile:grid-cols-2 tablet:grid-cols-3 gap-y-10 mobile:gap-x-10">
          {
            Array.isArray(favoriteBook) && (favoriteBook.length > 0) ? (
              favorites.favorite.map((book) => (
                <DisplayBookCard key={book._id} user={user} book={book?.bookId} />
              ))
            ) : ("")
          }
        </div>
      </div>
    </div>
  )
}

export default FavoritePage