const { default: mongoose } = require("mongoose");

const userSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:String
    },
    phoneNo:{
        type:String
    },
    profilePicture:{
        type:String
    }
})

const User=mongoose.model("User",userSchema);
module.exports=User