const express=require("express")
const app=express.Router()
const CLIENT_URL="http://localhost:3000/"
const passport=require("passport")
app.get("/google",passport.authenticate("google",{scope:["profile"]}))
app.get("/google/callback",passport.authenticate("google",{
    successRedirect:CLIENT_URL,
    failureRedirect:CLIENT_URL+"/signin"
}))
module.exports=app