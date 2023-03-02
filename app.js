const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.status(200).json({message:"hello from the server" , app:"natour"})
})

app.post("/",(req,res)=>{
    res.send("you can post to this end point")
})

app.listen(3000,()=>{
    console.log("server is listening at port 3000")
})