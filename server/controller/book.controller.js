import Book from "../model/book.model.js"

export const addBook = async (req, res) => {
    try {
        const { title, author, genre, description,publicationDate,pages, coverImage , pdfFile } = req.body
        if (!title || !author || !genre || !description || !publicationDate || !pages || !coverImage || !pdfFile) {
            return res.status(400).json({ message: "Please fill in all fields." })
        }

        const book = new Book({
            title,
            author,
            genre,
            description,
            publicationDate,
            pages,
            coverImage,
            pdfFile
        })

        await book.save()
        res.status(200).json({ message: "Book added successfully", book })
        
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export const getbooks = async(req,res)=>{
    try {
        const books = await Book.find()
        res.status(200).json({books})
      
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}