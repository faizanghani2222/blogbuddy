require("dotenv").config();
const mongoose=require("mongoose");
const dbConnect=async ()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/BlogBuddy", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
    } catch (e) {
        console.log(e.message);
    }
}
module.exports=dbConnect;