import Book from "../model/book.model.js"

export const addBook = async (req, res) => {
    try {
        const { title, author, genre, description, publicationDate, pages, coverImage, pdfFile } = req.body
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


export const getbooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).json({ books })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        if (!book) {
            return res.status(404).json({ message: "Book not found" })
        }
        res.status(200).json({ book })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        if (!book) {
            return res.status(404).json({ message: "Book not found" })
        }
        book.title = req.body.title
        book.author = req.body.author
        book.genre = req.body.genre
        book.description = req.body.description
        book.publicationDate = req.body.publicationDate
        book.pages = req.body.pages
        book.coverImage = req.body.coverImage
        book.pdfFile = req.body.pdfFile
        await book.save()
        res.status(200).json({ message: "Book updated successfully", book })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteBook = async (req, res) => {
    try {
        const bookId = await Book.findById(req.params.id)
        const book = await Book.findByIdAndDelete(bookId)
        if (!book) {
            return res.status(404).json({ message: "Book not found" })
        }
        res.status(200).json({ message: "Book deleted successfully" })
        
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}