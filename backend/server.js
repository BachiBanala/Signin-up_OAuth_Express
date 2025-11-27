require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { authRouter, userRouter } = require("./routes");
const authMiddleware = require("./middleware/authMiddleware");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

let dbconnect="";
//db connections
const mongoConnect = async () => {
  try {
    dbconnect = await mongoose.connect(process.env.mongoURL);
    if(dbconnect){
        console.log("connected to mongodb atlas")
    }
  } catch (err) {
    console.log(err);
  }
};

mongoConnect()

app.use(cookieParser());
app.use("/auth", authRouter);
app.use("/user", authMiddleware, userRouter);

app.get("/", (req, res) => {
  res.send("hello ");
});

app.listen(3001, (req, res) => {
  console.log("listening 3001");
});
