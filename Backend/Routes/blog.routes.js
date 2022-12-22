const express=require("express");
const { postBlogHandler, getBlogHandler, updateBlogHandler, deleteBlogHandler } = require("../Controller/blog.controller");
const app=express.Router();
app.post("/",async (req,res)=>{
    try {
       let response=await postBlogHandler(req.body);
       res.status(200).send(response); 
    } catch (e) {
        res.status(500).send({message:e.message,error:true});
    }
})
app.get("/",async (req,res)=>{
    try {
        let response=await getBlogHandler();
        res.status(200).send(response); 
    } catch (e) {
        res.status(500).send({message:e.message,error:true});
    }
})
app.patch("/:id",async (req,res)=>{
    try {
        let response=await updateBlogHandler(req.params.id);
        res.status(200).send(response); 
    } catch (e) {
        res.status(500).send({message:e.message,error:true});
    }
})
app.delete("/:id",async (req,res)=>{
    try {
        let response=await deleteBlogHandler(req.params.id);
        res.status(200).send(response); 
    } catch (e) {
        res.status(500).send({message:e.message,error:true});
    }
})
module.exports=app;
