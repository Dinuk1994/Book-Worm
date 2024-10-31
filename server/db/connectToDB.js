import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log("Database Connected");

    } catch (error) {
        console.log("Error Connecting Database",error);
    }
}

export default connectToDB