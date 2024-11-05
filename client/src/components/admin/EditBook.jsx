/* eslint-disable react/prop-types */

import { useState } from "react"


const EditBook = ({ editModal, book }) => {
    const [title, setTitle] = useState(book?.title);
    const [author, setAuthor] = useState(book?.author)
    const [images, setImages] = useState(book?.coverImage)
    const [description, setDescription] = useState(book?.description)
    const [newImages, setNewImages] = useState([]);
    const [genre, setGenre] = useState(book?.genre)

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedData = {
            title,
            author,
            description,
            coverImage: newImages[0],
        }
        console.log(updatedData);

    }



    return (
        <div>
            <div >
                <dialog ref={editModal} id="my_modal_3" className="modal backdrop-blur-sm">
                    <div className="modal-box h-full w-full bg-blue-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100">
                        <form onSubmit={handleSubmit} method="dialog">
                            <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <div className="flex justify-center">
                                <h3 className="font-semibold text-2xl ">Edit Book</h3>
                            </div>

                            <div className="mt-4 grid gap-y-3 t">
                                <button className="btn btn-ghost w-full bg-green-400 hover:bg-green-500"  onClick={() => window.open(book?.pdfFile, "_blank")}> 
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
                            <button  className="btn btn-ghost w-full mt-5 bg-red-400 hover:bg-red-500">
                                Delete Book
                            </button>
                        </form>

                    </div>
                </dialog>
            </div>
        </div>
    )
}
export default EditBook