const mongoose=require("mongoose");
const blogSchema=new mongoose.Schema({
  // user:{type:mongoose.schema.ObjectId,ref:"user"},
  title:{type:String,required:true},
  image:{type:String},
  category:{type:String,required:true},
  content:{type:String,required:true},
  postedAt:{type:String,default:new Date().toISOString().split("T")[0]},
  likes:{type:Number,default:0},
  // comments:[{type:mongoose.schema.ObjectId,ref:"comment"}],
})
const Blog=mongoose.model("blog",blogSchema);
module.exports=Blog;