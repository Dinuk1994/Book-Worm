
/* eslint-disable react/prop-types */

import { useRef } from "react";
import DetailBox from "./DetailBox";
import EditBook from "../admin/EditBook";

const DisplayBookCard = ({ user ,book}) => {

  const detailModalRef = useRef();
  const editmodalref = useRef();

  const openDetailModal = () => {
    if (user?.role === "admin") {
      editmodalref.current.showModal();
    }else{
      detailModalRef.current.showModal();
    }

  }
  

  return (
    <div className="grid justify-center">
      <div onClick={openDetailModal} className="relative h-72 w-56 border-8 rounded-lg hover:cursor-pointer border-blue-700 hover:shadow-2xl hover:shadow-blue-600 hover:scale-105 ease-in duration-300">
        <img className="h-full w-full" src={book?.coverImage} alt="" />

        <div className="absolute inset-0 bg-black bg-opacity-65 opacity-0 hover:opacity-100 transition-opacity duration-700  flex items-center justify-center">
          <span className="text-yellow-400 text-center font-semibold text-2xl">{book?.author}</span>
        </div>
      </div>
      <div className="text-start w-56 mt-1">
        <label htmlFor="">{book?.title}</label>
      </div>
      <DetailBox detailModal={detailModalRef} />
      <EditBook editModal={editmodalref} book={book}/>
    </div>
  );
};

export default DisplayBookCard;
