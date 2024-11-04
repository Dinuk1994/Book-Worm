
import { useDispatch, useSelector } from "react-redux";
import AddBookDrawer from "../../components/admin/AddBookDrawer";
import DisplayBookCard from "../../components/common/DisplayBookCard";
import { useEffect } from "react";
import { getAllBooks } from "../../api/book/getAllBooks";


const Books = () => {
    const dispatch = useDispatch()

    const user = useSelector((state) => state.auth.user)
    const books  = useSelector((state) => state.book.books)

    useEffect(() => {
        dispatch(getAllBooks())
    }, [user,dispatch])

    console.log(books.books);

    

    return (
        <div className="">
            <div className="relative z-10">
                <AddBookDrawer />
            </div>
            <div className="grid p-10 grid-cols-4 mobile:grid-cols-2 gap-y-7 pb-48  h-screen overflow-auto">
                
                    {
                        Array.isArray(books.books) && books.books.length > 0 ? (
                            books.books.map((book ) => (
                                <DisplayBookCard key={book._id} user={user} title={book.title} image={book.coverImage} author={book.author}/>
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
