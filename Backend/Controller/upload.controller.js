require("dotenv").config();
const multer=require("multer");
const {GridFsStorage}=require("multer-gridfs-storage");
const storage=new GridFsStorage({
    url:process.env.DATABASE,
    file:(req,file)=>{
        const match = ["image/png","image/jpeg"];
        if(match.indexOf(file.mimetype)===-1){
            const filename=`blogBuddy-${file.originalname}`
            return filename;
        }
        return {
            bucketName:"photos",
            filename:`blogBuddy-${file.originalname}`
        }
    }
})
module.exports=multer({storage});