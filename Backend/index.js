const express = require("express");
const app = express();
const cors = require("cors");
const cookieSession = require("cookie-session");
const dbConnect = require("./db");

const User = require("./Routes/User.routes");
const passport = require("passport");
const blogRouter = require("./Routes/blog.routes");
const authRoute = require("./Routes/Social.routes");
const uploadFile = require("./Routes/upload.routes");
require("./passport.js");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(
  cookieSession({
    name: "session",
    keys: ["blogBuddy"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/blog", blogRouter);
app.use("/file", uploadFile);
app.use("/user", User);
app.use("/auth", authRoute);

app.get("/", (req, res) => {
  const token1 = req.header("Authorization");
  console.log(token1);
  res.send("hello");
});
dbConnect();
app.listen(8080, () => {
  console.log("server started on port 8080");
});
