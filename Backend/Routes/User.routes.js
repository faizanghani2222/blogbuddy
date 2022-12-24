const express=require("express")
const UserModel=require("../Model/User.Schema")
const app=express.Router()
app.use(express.json())
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const mongoose=require("mongoose")

app.post("/user",async(req,res)=>{
    const {username,email,password,confirmPassword}=req.body;
    if(password!==confirmPassword){
        return res.status(400).send("Password din't match")
    }else{
            try{

                const hashedPassword=bcrypt.hashSync(password)
                const user=new UserModel({username,email,password:hashedPassword})
                await user.save()
                
            }catch(e){

            }
    }
})

module.exports=app
