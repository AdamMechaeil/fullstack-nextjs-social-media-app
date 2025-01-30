const Post = require("../models/posts");

exports.getAllPosts=async (req,res)=>{
    try {
        const posts=await Post.find();
        res.send({posts,msg:"All posts"})
    } catch (error) {
        console.log(error);
    }
}