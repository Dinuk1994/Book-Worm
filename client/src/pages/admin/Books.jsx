
import { useDispatch, useSelector } from "react-redux";
import AddBookDrawer from "../../components/admin/AddBookDrawer";
import DisplayBookCard from "../../components/common/DisplayBookCard";
import { useEffect, useState } from "react";
import { getAllBooks } from "../../api/book/getAllBooks";


const Books = () => {
    const [selectCategory, setSelectedCategory] = useState("All Categories")

    const dispatch = useDispatch()

    const user = useSelector((state) => state.auth.user)
    const books = useSelector((state) => state.book.books)

    useEffect(() => {
        dispatch(getAllBooks())
    }, [user, dispatch])

    console.log(books.books);

    const handleSelectCategory = (e) => {
        e.preventDefault();
        setSelectedCategory(e.target.value)
    }

    const filteredCategory = Array.isArray(books?.books) ?
        books?.books.filter((book) => {
            if (selectCategory === "All Categories" || "") {
                return true
            }
            return book.genre === selectCategory
        })
    :[];

    

    return (
        <div className="grid ">
            <div className="fixed pt-5 bg-opacity-80 bg-black opacity-100  pb-7 grid grid-cols-3 gap-x-5  items-center px-10 z-10 rounded-md bg-clip-padding backdrop-filter">
                <div className="col-span-2 mt-5 ">
                    <label htmlFor=""></label>
                    <div className="mt-3">
                        <AddBookDrawer />
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="">
                        <label htmlFor="">Select Book Category</label>
                        <select value={selectCategory} onChange={handleSelectCategory} className="select text-gray-800 mt-2 select-bordered w-full ">
                            <option value="All Categories">All Categories</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Non-Fiction">Non-Fiction</option>
                            <option value="Children’s Literature">Children’s Literature</option>
                            <option value="Poetry">Poetry</option>
                            <option value="Drama">Drama</option>
                            <option value="Graphic Novels and Comics">Graphic Novels and Comics</option>
                            <option value="Essays and Anthologies">Essays and Anthologies</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid relative pt-40 h-auto p-10 m grid-cols-4 mobile:grid-cols-2 tablet:grid-cols-3 gap-y-7 overflow-auto">

                {
                    Array.isArray(filteredCategory) && filteredCategory.length > 0 ? (
                        filteredCategory.map((book) => (
                            <DisplayBookCard key={book._id} book={book} user={user} />
                        ))
                    ) : (
                        <div>No Books Found</div>
                    )
                }

            </div>
        </div>
    );

};

export default Books;
