// import { login, logout, signUp } from "../controller/authController"
const express = require("express")
const JWT = require("jsonwebtoken")
const router = express.Router()
const {login, logout, signUp} = require("../controller/authController")



router.post("/login", login)

router.get("/logout", logout)

router.post("/signup",signUp)

module.exports = router;