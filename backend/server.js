const express = require('express')
const app = express();
const cors = require('cors')
const {authRouter, userRouter} = require("./routes");

app.use(express.json())
app.use(cors({
    origin:"*", 
    credential:true
}))
app.use("/auth", authRouter)
app.use("/user", userRouter)

app.get('/', (req, res)=>{
    res.send("hello ")
})

app.listen(3001, (req, res)=>{
    console.log("listening 3001")
})

