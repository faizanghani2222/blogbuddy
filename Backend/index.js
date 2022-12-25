const express = require('express')
const app = express()
const cors=require("cors");
const dbConnect=require("./db");
const User=require("./Routes/User.routes")
const blogRouter=require("./Routes/blog.routes");
const uploadFile=require("./Routes/upload.routes")
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors());
app.use("/blog",blogRouter);
app.use("/file",uploadFile);
app.use("/user",User)
app.get('/', (req, res) =>{
    const token1=req.header('Authorization')
  console.log(token1)
    res.send('hello')})
dbConnect();
app.listen(8080, () => {console.log('server started on port 8080')})