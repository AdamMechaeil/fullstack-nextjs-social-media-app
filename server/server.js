const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser");
const morgan=require("morgan");
const dotenv=require("dotenv");
const connectDb = require("./config/connectDb");
const authRouter = require("./routes/authRoute");
dotenv.config({ path: './config/config.env' });
connectDb();
const app=express();
app.use(cors()); 
app.use(morgan("dev"));
app.use(bodyParser.json({
    limit:"300mb"
}))

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.use("/auth",authRouter)


app.listen(process.env.PORT,()=>{
    console.log("Server is running");
})
