const express = require("express");
const fs = require("fs");
const app = express();

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))
//JSon.parse is to convert json into javascript object
//json.stingify is to convert javascript object to json format

app.use(express.json());

app.get("/api/v1/tours",(req,res)=>{
    res.status(200).json({
        status:"success",
        results:tours.length,
        data:{
            tours,
        }
    })
})

app.post("/api/v1/tours",(req,res)=>{
    // console.log(req.body);
    const newId = tours[tours.length-1].id + 1;
    const newTour = Object.assign({id:newId} , req.body) 
    //Object.assign add new object newTour to existing object tours 

    tours.push(newTour);

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err=>{
        res.status(201).json({
            status:"success",
            data:{
                tour:newTour
            }
        })
    })

})

app.get("/api/v1/tours/:id",(req,res)=>{
    // console.log(req.params);

    if(req.params.id*1 > tours.length){
        res.status(404).json({
            status:"fail",
            message:"invalid ID"
        })
    }

    const tour = tours.find(el=>el.id===req.params.id*1); //string multiplied by number gives a number
    
    res.status(200).json({
        status:"success",
        data:{
            tour,
        }
    })
    
})

app.listen(3000,()=>{
    console.log("server is listening at port 3000")
})