const { default: mongoose } = require("mongoose");

const postSchema=mongoose.Schema({
    creatorId:{
        type:String,
        required:true
    },
    caption:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    tags:{
        type:Array,
        default:[]
    },
    likes:{
        type:Array,
        default:[]
    },
    comments:{
        type:Array,
        default:[]
    }

})

const Post=mongoose.model("Post",postSchema);
module.exports=Post