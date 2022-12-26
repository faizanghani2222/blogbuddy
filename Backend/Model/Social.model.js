const mongoose=require("mongoose")
const SocialSchema=new mongoose.Schema({
    username:{type:String,require:true},
    token:{type:String}
})

const SocialModal=mongoose.model("social",SocialSchema)
module.exports=SocialModal