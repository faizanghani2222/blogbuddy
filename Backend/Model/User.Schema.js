const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    confirmPassword:{type:String,require:true,}
})

const UserModal=mongoose.model("user",UserSchema)
module.exports=UserModal