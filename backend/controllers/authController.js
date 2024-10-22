import User from "../models/user.js"
import bcrypt from "bcrypt"
import JWT from "jsonwebtoken"


// Register API
export const Register = async(req,res)=>{
const {username,email,password} = req.body;
try {
  const userExists = await User.findOne({email:email.toLowerCase()})
  if (userExists) return res.status(400).json({msg:"User Already Exists"})
  const user = await User.create({
    username,
    email:email.toLowerCase(),
    password,
  })
  return res.status(201).json({msg:"User Registered Successfully"})
} catch (error) {
  return res.status(500).json({msg:error.message})
}
}

// Login API
export const Login = async(req,res)=>{
  const {email,password} = req.body;
  try {
    const user =await User.findOne({email:email.toLowerCase()}) 
    if(!user) return res.status(400).json({msg:"User is Not Registered"})
      const matchPassword = bcrypt.compare(password,user.password)
    if(!matchPassword) return res.status(400).json({msg:"Password is Incorrect"})
      const token = JWT.sign({id:user.id},process.env.JWT,{expiresIn:"5d"})
    return res.status(201).json({token})
  } catch (error) {
  return res.status(500).json({msg:error.message})
    
  }
}