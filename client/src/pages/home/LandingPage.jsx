/* eslint-disable react/no-unescaped-entities */
import { useDispatch, useSelector } from "react-redux"
import { Banner } from "../../components/user/Banner"
import { useEffect, useState } from "react"
import { getAllBooks } from "../../api/book/getAllBooks"
import DisplayBookCard from "../../components/common/DisplayBookCard"

const LandingPage = () => {
  const dispatch = useDispatch()
  const [selectCategory, setSelectedCategory] = useState("All Categories")

  const books = useSelector((state) => state.book.books)

  const user = useSelector((state) => state.auth.user)

  useEffect(() => {
    dispatch(getAllBooks())
  }, [dispatch])

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
    : [];


  console.log(books)
  return (
    <div className="bg-gray-950 h-auto">
      <div className="flex justify-center pt-14">
        <div className="grid items-center text-center w-[1300px] mobile:w-[350px] tablet:w-[750px]">
          <label className="text-5xl font-semibold text-white  tablet:text-4xl mobile:text-2xl" htmlFor="">"Unlock adventures with every page."</label>
          <p className="text-gray-500 mt-5 text-lg mobile:text-gray-400 mobile:text-sm">Bookworm is your ultimate digital library, designed for book enthusiasts of all kinds. With a vast collection of genres, from timeless classics to modern bestsellers, Bookworm offers a seamless reading experience right at your fingertips. Dive into captivating stories, enrich your mind with informative reads, and explore new worlds with every page you turn. Whether you're seeking a gripping mystery, an inspiring biography, or a cozy romance, Bookworm has it all. Happy reading</p>
        </div>
      </div>
      <div className="pt-10 mobile:pt-10 flex justify-center">
        <Banner />
      </div>
      <div className="flex justify-center mt-2">
        <div className="grid grid-cols-12 mobile:grid-cols-1 mobile:w-[350px] w-[1300px] tablet:w-[750px]">
          <div className="col-span-4 mobile:hidden"></div>
          <div className="col-span-4 mobile:hidden"></div>
          <div className="col-span-4 mobile:col-span-1 flex justify-end">

            <select value={selectCategory} onChange={handleSelectCategory} className="select text-white bg-gray-600  mt-2 select-bordered w-full ">
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
      <div className="flex justify-center">
        <div className="grid relative w-[1300px] h-full p-10 m grid-cols-4 mobile:grid-cols-2 tablet:grid-cols-3 gap-y-10 mobile:gap-x-10 overflow-auto">
          {
            Array.isArray(filteredCategory) && filteredCategory.length > 0 ? (
              filteredCategory.map((book) => (
                <DisplayBookCard key={book._id} book={book} user={user} />
              ))
            ) : (
              <div className="text-white font-semibold">No Books Found</div>
            )
          }

        </div>
      </div>

    </div>
  )
}

export default LandingPage