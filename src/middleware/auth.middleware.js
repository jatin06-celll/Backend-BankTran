const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const { } = require("dotenv")   



async function authMiddleware(req, res, next){

    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]

    if(!token){
        return res.status(401).json({
            message : "Unauthorized access, No token received",
        })
    }

    try{

        const decode = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findById(decode.id)

        if (!user) {
            return res.status(401).json({
                message: "User not found or unauthorized",
            })
        }

        req.user = user 

        return next()

    }catch(err){
        return res.status(401).json({
            message : "Invalid token",
        })  
    }
}


module.exports = {
    authMiddleware
}