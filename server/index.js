import express from "express"
import dotenv from "dotenv"




import connectDB from "./config.js/DB.js"


// Config
dotenv.config()
const app = express()

// Middlewares



app.use("/play",(req,res,next)=>{
    res.send("Let's Starts Fire 🔥")
})








const Port = process.env.port || 7777;

app.listen(Port,()=>{
    connectDB()
    console.log(`Server Running on Port ${Port}`);
    
})