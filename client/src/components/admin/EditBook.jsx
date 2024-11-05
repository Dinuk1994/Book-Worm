/* eslint-disable react/prop-types */

import { useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { updateBook } from "../../api/book/updateBook";
import { getAllBooks } from "../../api/book/getAllBooks";
import { toast } from "react-toastify";
import DeleteConfirmModal from "./modals/DeleteConfirmModal";


const EditBook = ({ editModal, book }) => {
    const [title, setTitle] = useState(book?.title);
    const [author, setAuthor] = useState(book?.author)
    const [images, setImages] = useState(book?.coverImage)
    const [description, setDescription] = useState(book?.description)
    const [newImages, setNewImages] = useState([]);
    const [genre, setGenre] = useState(book?.genre)
    const [pages, setPages] = useState(book?.pages)
    const [date, setDate] = useState(book?.publicationDate)

    const dispatch = useDispatch();
    const deleteModalref  = useRef();

    const handleImageChange = (e) => {
        const files = e.target.files;
        setNewImages(files);

        if (files && files.length > 0) {
            const imageUrl = URL.createObjectURL(files[0]);
            setImages(imageUrl);
        }
    };


    const closeModal = () => {
        editModal.current.close()
    }

    const ImageUpload = async () => {
        try {
            const formData = new FormData();
            formData.append("file", newImages[0]);
            formData.append("upload_preset", "Book-Worm-Images");
            formData.append("folder", "book_worm_images");

            const ImageUploadres = await fetch("https://api.cloudinary.com/v1_1/doyd9gnzc/image/upload", {
                method: "POST",
                body: formData
            })
            const data = await ImageUploadres.json();
            const imageUrl = data.url;
            console.log("imageUrl", imageUrl);

            return imageUrl


        } catch (error) {
            toast.error(error.message)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newImages.length > 0) {

            try {
                const imageUploadUrl = await ImageUpload();
                if (imageUploadUrl) {
                    const updatedData = {
                        title,
                        author,
                        genre,
                        description,
                        publicationDate: date,
                        pages,
                        coverImage: imageUploadUrl, 
                        pdfFile: book?.pdfFile,
                    };
                    console.log(book?._id, updatedData);
    
                    dispatch(updateBook({ bookId: book?._id, updatedData })).then(() => {
                        dispatch(getAllBooks());
                    });
                }
            } catch (error) {
                toast.error(error.message);
            }
        } else {
            
            const updatedData = {
                title,
                author,
                genre,
                description,
                publicationDate: date,
                pages,
                coverImage: images, 
                pdfFile: book?.pdfFile,
            };
            console.log(book?._id, updatedData);
      
            dispatch(updateBook({ bookId: book?._id, updatedData })).then(() => {
                dispatch(getAllBooks());
            });
        }
    };

    const handleDeleteBookModal =() => {
        deleteModalref.current.showModal()     
    }
    


    return (
        <div>
            <div >
                <dialog ref={editModal} id="my_modal_3" className="modal backdrop-blur-sm">
                    <div className="modal-box h-full w-full bg-blue-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100">
                        <form onSubmit={handleSubmit} method="dialog">
                            <button type="button" onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <div className="flex justify-center">
                                <h3 className="font-semibold text-2xl ">Edit Book</h3>
                            </div>

                            <div className="mt-4 grid gap-y-3 t">
                                <button type="button" className="btn btn-ghost w-full bg-green-400 hover:bg-green-500" onClick={() => window.open(book?.pdfFile, "_blank")}>
                                    View Book
                                </button>
                                <div className="grid gap-y-3">
                                    <label htmlFor="">Edit Book Title</label>
                                    <input name="title" onChange={(e) => setTitle(e.target.value)} value={title} type="text" className="input input-bordered w-full text-gray-900" />
                                </div>
                                <div className="grid gap-y-3">
                                    <label htmlFor="">Edit Book author</label>
                                    <input name="author" value={author} onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Book Author" className="input input-bordered w-full text-gray-700" />
                                </div>
                                <div className="grid gap-y-3">
                                    <label htmlFor="">Edit Book Description</label>
                                    <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="textarea textarea-bordered text-gray-700" placeholder="Description"></textarea>
                                </div>
                                <div className="grid grid-cols-2 gap-x-5">
                                    <div className="col-span-1 ">
                                        <label htmlFor="">Edit Pages</label>
                                        <input type="number" name="author" value={pages} onChange={(e) => setPages(e.target.value)} className="input mt-2 input-bordered w-full text-gray-700" />
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="">Edit Pages</label>
                                        <input type="date" name="author" value={date} onChange={(e) => setDate(e.target.value)} className="input mt-2 input-bordered w-full text-gray-700" />
                                    </div>


                                </div>
                                <div className="grid">
                                    <label htmlFor="">Edit Book Genre</label>
                                    <select value={genre} onChange={(e) => setGenre(e.target.value)} className="select text-gray-800 mt-2 select-bordered w-full ">
                                        <option disabled value="">Select category</option>
                                        <option value="Fiction">Fiction</option>
                                        <option value="Non-Fiction">Non-Fiction</option>
                                        <option value="Children’s Literature">Children’s Literature</option>
                                        <option value="Poetry">Poetry</option>
                                        <option value="Drama">Drama</option>
                                        <option value="Graphic Novels and Comics">Graphic Novels and Comics</option>
                                        <option value="Essays and Anthologies">Essays and Anthologies</option>
                                    </select>
                                </div>
                                <div className="grid gap-y-3">
                                    <label htmlFor="">Edit Image</label>
                                    <input placeholder="Upload Image" type="file" multiple accept="image/*" onChange={handleImageChange} className="file-input file-input-bordered text-gray-800 w-full mobile:w-full" />
                                </div>
                                <data className="flex justify-center" value="">
                                    {images && (
                                        <img className="w-40" src={images} alt="Book Cover" />
                                    )}
                                </data>
                            </div>
                            <button type="submit" className="btn btn-ghost w-full mt-5 bg-blue-400 hover:bg-blue-500">
                                Update Book
                            </button>
                            <button onClick={handleDeleteBookModal} type="button" className="btn btn-ghost w-full mt-5 bg-red-400 hover:bg-red-500">
                                Delete Book
                            </button>
                        </form>

                    </div>
                </dialog>
            </div>
            <DeleteConfirmModal deleteModal={deleteModalref} book={book}/>
        </div>
    )
}
export default EditBook