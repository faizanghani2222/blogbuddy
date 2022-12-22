const express = require('express')
const app = express()
const cors=require("cors");
const dbConnect=require("./db");
const blogRouter=require("./Routes/blog.routes");
const uploadFile=require("./Routes/upload.routes")
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors());
app.use("/blog",blogRouter);
app.use("/file",uploadFile);
app.get('/', (req, res) => res.send('hello'))
dbConnect();
app.listen(8080, () => {console.log('server started on port 8080')})