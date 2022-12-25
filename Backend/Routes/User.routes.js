const express = require("express");
const UserModal = require("../Model/User.Schema");
const app = express.Router();

app.use(express.json());
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

app.post("/signup", async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ message: "Password din't match", error: true });
  } else {
    try {
      const hashedPassword = bcrypt.hashSync(password);
      const user = new UserModal({ username, email, password: hashedPassword });
      await user.save();
      res
        .status(200)
        .json({ message: "Account created successfully!", user: user });
    } catch (e) {
      res.status(404).json({ message: "Somthing went wrong!", error: true });
    }
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
 
  let existUser;
  try {
    existUser = await UserModal.findOne({ email });
  } catch (err) {
    return console.log("err");
  }
  if (!existUser) {
    return res
      .status(404)
      .json({ message: "could not find user by this credential", error: true });
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existUser.password);
  if (!isPasswordCorrect) {
    return res
      .status(400)
      .json({ message: "Invalid Credentials", error: true });
  }
  const token = jwt.sign({
    username: existUser.username,
    id: existUser._id,
  },require('crypto').randomBytes(16).toString('hex')
  );

  return res.status(200).json({
    message: "Login sucessful",
    error: false,

    user: {
      username: existUser.username,
      email: existUser.email,
      token,
    },
  });
});

module.exports = app;
