const express = require("express");
const mongoose = require("mongoose")
const morgan = require("morgan")
const tourRouter = require('./routers/tourRoute.js')
const userRouter = require('./routers/userRoute.js')

const app = express();

//connection this app to atlas cluster
mongoose.connect("mongodb+srv://Roshan:dTxl4HVG8iwJvGar@cluster0.sfawiac.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true
}).then(con=>console.log("database connected successfully"))

// defining schema for the data

// const tourSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:[true,"A tour must have a name"],
//         unique:true,
//     },
//     rating:{
//         type:Number,
//         min:1,
//         max:5,
//         default:4.5
//     },
//     price:{
//         type:Number,
//         required:[true,"A true must have Price"]
//     },
// })

//creating a model from the schema
// const Tour = mongoose.model("Tour",tourSchema);

//creating document from the model
// const testTour = new Tour({
//     name:"The camp parker",
//     price:397
// })

//saving the document to the database
// testTour.save().then(doc=>console.log(doc)).catch(err=>console.log(err))

//1> middlewares

app.use(morgan('dev'));
app.use(express.json());


// ROUTES
app.use('/api/v1/tours',tourRouter)

app.use('/api/v1/users',userRouter);


app.listen(3000,()=>{
    console.log("server is listening at port 3000")
})