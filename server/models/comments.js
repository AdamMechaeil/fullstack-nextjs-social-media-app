const { default: mongoose } = require("mongoose");

const commentsSchema=mongoose.Schema({
    creatorId:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    }
})

const User=mongoose.model("User",commentsSchema);
module.exports=User