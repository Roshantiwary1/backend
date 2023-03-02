const express = require("express");
const morgan = require("morgan")
const tourRouter = require('./routers/tourRoute.js')
const userRouter = require('./routers/userRoute.js')

const app = express();

//1> middlewares

app.use(morgan('dev'));
app.use(express.json());


// ROUTES
app.use('/api/v1/tours',tourRouter)

app.use('/api/v1/users',userRouter);


app.listen(3000,()=>{
    console.log("server is listening at port 3000")
})