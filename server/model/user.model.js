import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },
    userName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ["admin", "user"],
        default : "user"
    }

},{
    timestamps : true
})

const user =  mongoose.model("User", userSchema)

export default user;
