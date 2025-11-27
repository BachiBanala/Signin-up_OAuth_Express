const JWT = require("jsonwebtoken")
const login = async(req, res)=>{
    const {username, password} = req.body;
    //check user exits 
    //if yes generate jwt token
    const accessToken = JWT.sign({username, password}, process.env.SECRET) 
    res.cookie("accessToken", accessToken)  
    res.send({username, password, accessToken})
}

const logout = async(req, res)=>{
    res.clearCookie("accessToken")
    res.send("logged out")
}

const signUp = async (req, res)=>{
    const {username, password, email, confirmPassword} = req.body;
    console.log({username, password, email, confirmPassword})
    res.send({username, password, email, confirmPassword})
}

module.exports = { login, logout, signUp}


