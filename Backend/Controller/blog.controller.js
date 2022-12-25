const Blog = require("../Model/blog.model");

async function postBlogHandler(data){
   console.log(data);
   await Blog.create(data);
   return {message:"Posted",error:false};
}
async function getBlogHandler(){
   let blog=await Blog.find();
   return {message:blog,error:false};
}
async function updateBlogHandler(id){
   await Blog.findByIdAndUpdate(id);
   return {message:"Updated",error:false};
}
async function deleteBlogHandler(id){
   await Blog.findByIdAndDelete(id);
   return {message:"Deleted",error:false};
}
module.exports={postBlogHandler,getBlogHandler,updateBlogHandler,deleteBlogHandler}