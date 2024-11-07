
/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import DetailBox from "./DetailBox";
import EditBook from "../admin/EditBook";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getFavorite } from "../../api/favorite/getFavorite";
import FavoriteConfirmModal from "../user/modals/FavoriteConfirmModal";
import FavoriteReomoveModal from "../user/modals/FavoriteReomoveModal";

const DisplayBookCard = ({ user, book }) => {

  const detailModalRef = useRef();
  const editmodalref = useRef();
  const [isFavorited, setIsFavorited] = useState(false);
  const dispatch = useDispatch();
  const favConfirmRef = useRef()
  const favRemoveRef = useRef()

  const favorites = useSelector((state) => state.favorite.favorite);

  const openDetailModal = () => {
    if (user?.role === "admin") {
      editmodalref.current.showModal();
    } else {
      detailModalRef.current.showModal();
    }

  }

  const openConfirmFavModal = ()=>{
    favConfirmRef.current.showModal()
  }

  const openRemoveFavModal = ()=>{
    favRemoveRef.current.showModal()
  }

  const handleFavorite = (e) => {
    e.stopPropagation();
    if (!isFavorited) {
      openConfirmFavModal();
    } else if( isFavorited) {
      openRemoveFavModal();
    }
  };

  useEffect(() => {
    if (user?.userId) {
      dispatch(getFavorite(user.userId));
    }
  }, [dispatch, user?.userId]);

  useEffect(() => {
    if (Array.isArray(favorites.favorite)) {
      setIsFavorited(favorites.favorite.some((fav) => fav.bookId._id === book._id));
    }
  }, [favorites, book._id]);
  


  return (
    <div className="grid justify-center ">
      <div onClick={openDetailModal} className="relative h-72 mb-5  w-56 mobile:w-40 mobile:h-56 border-8 mobile:border-4 rounded-lg hover:cursor-pointer border-blue-700 hover:shadow-2xl hover:shadow-blue-600 hover:scale-105 ease-in duration-300">
        {user?.role === "user" && (
          <button
            onClick={handleFavorite}
            className="absolute z-20 top-0 right-0 mr-3 mt-3"
          >
            <FaHeart className={`size-6 outline-1 hover:text-orange-600 outline-black ${isFavorited ? "text-yellow-600" : "text-gray-200"}`} />
          </button>
        )}
        <img className="h-full w-full" src={book?.coverImage} alt="" />

        <div className="absolute inset-0 bg-black bg-opacity-65 opacity-0 hover:opacity-100 transition-opacity duration-700  flex items-center justify-center">
          <span className="text-yellow-400 text-center font-semibold text-2xl">{book?.author}</span>
        </div>
        <div className="text-start w-56 mt-3">
          <label className="text-gray-300 font-semibold" htmlFor="">{book?.title}</label>
        </div>
      </div>

      <DetailBox detailModal={detailModalRef} book={book} />
      <EditBook editModal={editmodalref} book={book} />
      <FavoriteConfirmModal confirmFavModal={favConfirmRef} book={book} user={user}/>
      <FavoriteReomoveModal removeFavModal={favRemoveRef} book={book} user={user} setIsFavorited={setIsFavorited}/>
    </div>
  );
};

export default DisplayBookCard;
