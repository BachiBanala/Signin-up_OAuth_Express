const JWT = require("jsonwebtoken");

module.exports = (req, res, next)=>{
    const token = req.cookies.accessToken;
    if(!token){
        return res.status(401).json({message:"NOT Authenticated"})
    }
    try{
        const user = JWT.verify(token, process.env.SECRET);
        req.user = user;
        next()
    }catch(err){
        return res.status(403).json({message: "Token is invalid or expired"})
    }
}

