const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"A tour must have a name"],
        unique:true,
    },
    ratingAverage:{
        type:Number,
        min:1,
        max:5,
        default:4.5
    },
    ratingQuantity:{
        type:Number,
        default:0,
    },
    price:{
        type:Number,
        required:[true,"A true must have Price"]
    },
    priceDiscount:Number,
    summary:{
        type:String,
        trim:true,
        required:true
    },
    difficulty:{
        type:String,
        required:[true,"A Tour Must have difficulty"]
    },
    maxGroupSize:{
        type:Number,
        required:true
    },
    duration:{
        type:Number,
        required:[true,"Tour must have duration"]
    },
    description:{
        type:String,
        trim:true
    },
    imageCover:{
        type:String,
        required:true
    },
    images:[String],
    createdAt:{
        type:Date,
        default:Date.now()
    },
})

//creating a model from the schema
const Tour = mongoose.model("Tour",tourSchema);

module.exports = Tour;