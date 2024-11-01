import express from "express"
import connectToDB from "./db/connectToDB.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.routes.js"
import cors from "cors"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors({
    origin: "http://localhost:5173",
    methods : ["GET","POST","PUT","DELETE"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-control",
        "Expires",
        "Prigma"
    ],
    credentials : true
    
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRouter)

app.listen(PORT,()=>{
    connectToDB();
    console.log(`Server running on port ${PORT}`)
})


