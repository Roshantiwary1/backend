const express = require("express");
const fs = require("fs");
const app = express();

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))
//JSon.parse is to convert json into javascript object
//json.stingify is to convert javascript object to json format

app.get("/api/v1/tours",(req,res)=>{
    res.status(200).json({
        status:"success",
        results:tours.length,
        data:{
            tours,
        }
    })
})

app.listen(3000,()=>{
    console.log("server is listening at port 3000")
})