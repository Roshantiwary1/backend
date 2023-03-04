const mongoose = require("mongoose")
const fs = require('fs')
const Tour = require("../../model/tourModel.js")

//connection this app to atlas cluster
mongoose.connect("mongodb+srv://Roshan:dTxl4HVG8iwJvGar@cluster0.sfawiac.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true
}).then(con=>console.log("database connected successfully"))

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`,'utf-8'))

//IMPORTING DATA FROM TOUR-SIMPLE.JS AND SENDING IT TO DATABASE
const importData =async()=>{
    try{
    await Tour.create(tours)
    console.log("data successfully added")
    process.exit()
    }catch(err){
        console.log(err)
    }
}

//DELETE THE EXISTING DATA FROM THE DATABASE
const deleteData=async()=>{
    try{
        await Tour.deleteMany();
        console.log("data successfully deleted")
        process.exit()
    }catch(err){
        console.log(err)
    }
}

if(process.argv[2]==='--delete'){
deleteData()
}

if(process.argv[2]==='--import'){
importData()
}