const express = require("express")

const router = express.Router()

router.post("/login", (req, res)=>{
    const {username, password} = req.body;
    console.log({username, password})
    res.send({username, password})
})

router.post("/signup",(req, res)=>{
    const {username, password, email, confirmPassword} = req.body;
    console.log({username, password, email, confirmPassword})
    res.send({username, password, email, confirmPassword})
})

module.exports = router;