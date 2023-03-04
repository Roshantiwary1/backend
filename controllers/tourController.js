// const fs = require("fs");
const Tour = require("../model/tourModel.js")

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))
//JSon.parse is to convert json into javascript object
//json.stingify is to convert javascript object to json format

exports.getAllTours = async(req,res)=>{

    const tours = await Tour.find();
    res.status(200).json({
        status:"success",
        results:tours.length,
        data:{
            tours,
        }
    })
}

 exports.getTour =async (req,res)=>{
    // console.log(req.params);

    const tour = await Tour.findById(req.params.id);
    
    res.status(200).json({
        status:"success",
        data:{
            tour,
        }
    })
    
}

exports.createTour =async (req,res)=>{
    
    try{
        // console.log(req.body);

    // const newTour = new Tour({})
    // newTour.save();

   const newTour = await Tour.create(req.body)
    res.status(201).json({
       status:"success",
       data:{
           tour:newTour
       }
   })
  }catch(err){
   res.status(400).json({
    staus:"fail",
    message:err
   })
   console.log(err)
  }
}

exports.updateTour = async(req,res)=>{
    try{
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
            runValidators:true
        })

        res.status(200).json({
            staus:"success",
            result:{
                tour,
            }
        })
    }catch(err){
        res.staus(404).json({
           staus:fail,
            message:err,
        })
    }
}
exports.deleteTour = async(req,res)=>{
    try{
        await Tour.findByIdAndDelete(req.params.id)

        res.status(204).json({
            staus:"success",
        })
    }catch(err){
        console.log(err)
        res.staus(404).json({
           staus:fail,
            message:err,
        })
    }
}