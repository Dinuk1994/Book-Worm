/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import { UploadImage } from "./UploadImage"
import { toast } from "react-toastify";
import { Spinner } from "flowbite-react";
import { updateBook } from "../../../../server/controller/book.controller";
const AddBookDrawer = ({ onPdfUpload }) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pdfFile, setPdfFile] = useState(null);
    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        genre: "",
        description: "",
        publicationDate: "",
        pages: "",
        coverImage: [],
        pdfFile: null
    });

    const handleUpload = async () => {
        try {
          
            const pdfData = new FormData();
            pdfData.append("file", pdfFile);
            pdfData.append("upload_preset", "Book-Worm-Pdf");
            pdfData.append("folder", "book_worm_pdfs");
    
            const pdfResponse = await fetch("https://api.cloudinary.com/v1_1/doyd9gnzc/raw/upload", {
                method: "POST",
                body: pdfData
            });
            const pdfDataUrl = await pdfResponse.json();
            const pdfUrl = pdfDataUrl.url;
    
            const imageData = new FormData();
            imageData.append("file", images[0]);
            imageData.append("upload_preset", "Book-Worm-Images");
            imageData.append("folder", "book_worm_images");
    
            const imageResponse = await fetch("https://api.cloudinary.com/v1_1/doyd9gnzc/image/upload", {
                method: "POST",
                body: imageData
            });
            const imageDataUrl = await imageResponse.json();
            const imageUrl = imageDataUrl.url;
    
            console.log("pdfUrl", pdfUrl);
            console.log("imageUrl", imageUrl);
    
            
            return { pdfFile: pdfUrl, coverImage: imageUrl };
        } catch (error) {
            toast.error(error.message);
            return null;
        }
    };
    
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const uploadData = await handleUpload();
    
        if (uploadData) {
            const updatedBookData = { ...bookData, ...uploadData };
            setBookData(updatedBookData);
            console.log("updatedBookData", updatedBookData);
    
     
        } else {
            console.log("Error occurred during file upload.");
        }
    
        setLoading(false);
    };
    



    return (
        <div>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <label htmlFor="my-drawer-4" className="btn btn-ghost bg-green-500 w-full shadow-lg shadow-gray-700  text-lg hover:bg-green-600 text-white">Add Book</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu  text-base-content min-h-screen tablet:w-[800px] mobile:w-[450px]  w-[1200px] p-4 h-auto bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100
">
                        <div>
                            <div className="w-full">
                                <div className="flex justify-end">
                                    <label htmlFor="my-drawer-4" className="btn btn-ghost bg-red-400 text-white hover:bg-red-600 cursor-pointer">
                                        Close
                                    </label>
                                </div>
                            </div>


                            <div className="grid p-5 gap-y-5">
                                <label className="text-3xl font-semibold text-white mobile:text-gray-800 mobile:text-4xl" htmlFor="">Add Book</label>
                                <div>
                                    <label className="text-white text-lg ml-2 mt-5 mobile:text-gray-800" htmlFor="">Book Title</label>
                                    <label className="input mt-2  flex items-center gap-2">
                                        <input value={bookData?.title} onChange={(e) => setBookData({ ...bookData, title: e.target.value })} type="text" className="grow border-none focus:ring-0" placeholder="Book Title" />
                                    </label>
                                </div>
                                <div className="grid grid-cols-2 gap-x-5">
                                    <div className="col-span-1">
                                        <div>
                                            <label className="text-white text-lg ml-2 mobile:text-gray-800" htmlFor="">Aurthor Name</label>
                                            <label className="input mt-2 input-bordered flex items-center gap-2">
                                                <input value={bookData?.author} onChange={(e) => setBookData({ ...bookData, author: e.target.value })} type="text" className="grow border-none focus:ring-0" placeholder="Aurthor name" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <div className="grid">
                                            <label className="text-white text-lg ml-2 mobile:text-gray-800" htmlFor="">Select Genre</label>
                                            <select value={bookData?.genre} onChange={(e) => setBookData({ ...bookData, genre: e.target.value })} className="select mt-2 select-bordered w-full ">
                                                <option disabled >Select category</option>
                                                <option >Fiction</option>
                                                <option>Non-Fiction</option>
                                                <option>Children’s Literature</option>
                                                <option>Poetry</option>
                                                <option>Drama</option>
                                                <option>Graphic Novels and Comics</option>
                                                <option>Essays and Anthologies</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <div className="grid">
                                        <label className="text-white text-lg ml-2 mt-5 mobile:text-gray-800" htmlFor="">Description</label>
                                        <textarea value={bookData?.description} onChange={(e) => setBookData({ ...bookData, description: e.target.value })} className="textarea textarea-bordered mt-2" placeholder="Description"></textarea>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-x-5">
                                    <div className="col-span-1">
                                        <label className="text-white text-lg ml-2 mobile:text-gray-800" htmlFor="">Publication Date</label>
                                        <label className="input mt-2 input-bordered flex items-center gap-2">
                                            <input type="date" value={bookData?.publicationDate} onChange={(e) => setBookData({ ...bookData, publicationDate: e.target.value })} className="grow border-none focus:ring-0" placeholder="" />
                                        </label>
                                    </div>
                                    <div className="col-span-1">
                                        <label className="text-white text-lg ml-2 mobile:text-gray-800" htmlFor="">Pages</label>
                                        <label className="input mt-2 input-bordered flex items-center gap-2">
                                            <input type="number" value={bookData?.pages} onChange={(e) => setBookData({ ...bookData, pages: e.target.value })} className="grow border-none focus:ring-0" placeholder="Pages" />
                                        </label>

                                    </div>

                                </div>
                                <div className="grid grid-cols-2 gap-x-5">
                                    <div className="col-span-1">
                                        <label className="text-white text-lg ml-2 mt-5 mobile:text-gray-800" htmlFor="">Add Cover Image</label>
                                        <div className="mt-3">
                                            <UploadImage setImages={setImages} resetImages={false} />

                                        </div>
                                    </div>
                                    <div className="grid col-span-1 h-[168px]">
                                        <label className="text-white text-lg  mobile:text-gray-800" htmlFor="">Add Pdf Book</label>
                                        <input type="file" accept="application/pdf" onChange={(e) => setPdfFile(e.target.files[0])} className="file-input -mt-14 file-input-bordered w-full h-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <button onClick={handleSubmit} className="btn btn-ghost w-full bg-blue-500 ">
                                <span className={`${loading ? 'loading loading-spinner' : ''}`}>Add Book</span>
                            </button>
                        </div>
                    </ul>
                </div>

            </div >

        </div >
    )
}

export default AddBookDrawer