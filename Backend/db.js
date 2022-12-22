require("dotenv").config();
const mongoose=require("mongoose");
const dbConnect=async ()=>{
    try {
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
    } catch (e) {
        console.log(e.message);
    }
}
module.exports=dbConnect;