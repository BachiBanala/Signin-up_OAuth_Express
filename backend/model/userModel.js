const mongoose = require("mongoose")
const userSchema = new mongoose.Schema(
    { 
        name:{
            type: String,
            required: [true, "name missing"]
        },
        email:{
            type: String,
            unique: true,
            required: [true, "email is required"]
        },
        password:{
            type: String,
            requried: [true, "email is required"]
        }
}, { timestamps: true})

const User = mongoose.model("Users", userSchema);

export default User;