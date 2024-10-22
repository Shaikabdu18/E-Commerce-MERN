import express from "express"
import mongoose  from "mongoose";
import dotenv from "dotenv"
import authroutes from "./routes/authRoutes.js"


const app = express();
dotenv.config()
app.use(express.json());

//middleware
app.use("/api/auth",authroutes)




//Connect Mongodb
const connectDB= async()=>{
try {
  await mongoose.connect(process.env.DB_URL)
  console.log("MongoDB Connected Successfully")
  
} catch (error) {
  console.log("MongoDB Connection error:",error.messsage)
  
}
}
app.listen(8000,()=>{
  console.log("Server Starts at Port 8000")
  connectDB()
})