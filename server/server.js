import express from "express"
import connectToDB from "./db/connectToDB.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())

app.listen(PORT,()=>{
    connectToDB();
    console.log(`Server running on port ${PORT}`)
})


