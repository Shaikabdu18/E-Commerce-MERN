import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        mongoose.connect(process.env.mongo)
        console.log("MongoDB Connected Successfully")
    } catch (error) {
        console.log("MongoDB connection Error",error.message);
        
    }
}

export default connectDB