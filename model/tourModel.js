const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"A tour must have a name"],
        unique:true,
    },
    rating:{
        type:Number,
        min:1,
        max:5,
        default:4.5
    },
    price:{
        type:Number,
        required:[true,"A true must have Price"]
    },
})

//creating a model from the schema
const Tour = mongoose.model("Tour",tourSchema);

module.export = Tour;