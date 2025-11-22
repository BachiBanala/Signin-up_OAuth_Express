const express = require("express")
const JWT = require("jsonwebtoken")
const router = express.Router()

router.get("/user",(req, res)=>{
    try {
        const user = req.user;
        console.log("User from middleware:", user)
        res.json({ user })
    } catch(e) {
        console.log("JWT Error:", e.message)
        res.status(401).send({error: "Invalid or expired token"})
    }
})

module.exports = router; 