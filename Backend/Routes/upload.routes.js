const upload=require("../Controller/upload.controller");
require("dotenv").config();
const express=require("express");
const app=express.Router();
const Grid=require("gridfs-stream");
const mongoose=require("mongoose");

let gfs;
const conn=mongoose.createConnection(process.env.DATABASE);
conn.once("open",()=>{
    gfs=Grid(conn.db,mongoose.mongo);
    gfs.collection("photos");
})
app.post("/upload",upload.single("file"),(req,res)=>{
    let newfile=JSON.parse(JSON.stringify(req.file))
    if(!req.file)return res.send({message:"Select an Image",error:true});
    const imgUrl=`http://localhost:8080/file/${newfile.filename}`;
    return res.send({message:imgUrl,error:false})
})
app.get("/:filename",async (req,res)=>{
    try {
        const file=await gfs.files.findOne({filename:req.params.filename});
        const readStream=gfs.createReadStream(file.filename);
        readStream.pipe(res)
    } catch (error) {
    res.send("not found");
}
})
app.delete("/:filename",async (req,res)=>{
    try {
        await gfs.files.deleteOne({filename:req.params.filename});
        res.send("success");
    } catch (error) {
        res.send("An error occured")
    }
})
module.exports=app;