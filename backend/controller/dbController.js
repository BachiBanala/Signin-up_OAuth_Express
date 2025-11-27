import User from "../model/userModel";

export const createUser = async(req, res)=>{
    const user = req.body;
    try{
        const res = await User.create(user)
        res.status(201).json(user)
    }catch(err){
        res.status(400).json({error: err.message })
    }
}

export const getUser = async(req, res)=>{
    const username = req.body;
    try{
        const data = await User.find({username: username})
    }catch(err){

    }
}

export const delUser = async(req, res)=>{

}

export const listAllUsers = async(req, res)=>{
    
}