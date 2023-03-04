const express = require("express");
const mongoose = require("mongoose")
const morgan = require("morgan")
const tourRouter = require('./routers/tourRoute.js')
const userRouter = require('./routers/userRoute.js')

const app = express();

mongoose.connect("mongodb+srv://Roshan:dTxl4HVG8iwJvGar@cluster0.sfawiac.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true
}).then(con=>console.log("database connected successfully"))


//1> middlewares

app.use(morgan('dev'));
app.use(express.json());


// ROUTES
app.use('/api/v1/tours',tourRouter)

app.use('/api/v1/users',userRouter);


app.listen(3000,()=>{
    console.log("server is listening at port 3000")
})