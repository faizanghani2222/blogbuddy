const express=require("express")
const UserModal=require("../Model/User.Schema")
const app=express.Router()
const mongoose=require("mongoose")
app.use(express.json())
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")


app.post("/",async(req,res)=>{
    const {username,email,password,confirmPassword}=req.body;
    console.log(username,email,password,confirmPassword)
    if(password!==confirmPassword){
        return res.status(400).send("Password din't match")
    }else{
            try{

                const hashedPassword=bcrypt.hashSync(password)
                const user=new UserModal({username,email,password:hashedPassword})
                await user.save()
                res.status(200).json({message:"Account created successfully!",user:user})
                
            }catch(e){
                res.status(404).json({message:"Somthing went wrong!",error:true})
            }
    }
})

module.exports=app
