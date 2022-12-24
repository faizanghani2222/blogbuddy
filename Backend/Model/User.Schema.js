const {Schema,model}=require("mongoose")
const UserSchema=new Schema({
    useranme:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    confirmPassword:{type:String,require:true,}
})

const UserModel=model("user",UserSchema)
module.exports=UserModel