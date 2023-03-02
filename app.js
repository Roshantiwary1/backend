const express = require("express");
const fs = require("fs");
const morgan = require("morgan")
const app = express();

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))
//JSon.parse is to convert json into javascript object
//json.stingify is to convert javascript object to json format

//1> middlewares

app.use(morgan('dev'));
app.use(express.json());

//2> route handlers

const getAllTours = (req,res)=>{
    res.status(200).json({
        status:"success",
        results:tours.length,
        data:{
            tours,
        }
    })
}

const getTour = (req,res)=>{
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
    
}

const createTour = (req,res)=>{
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

}

const getAllUser = (req,res)=>{
    res.status(500).json({
        status:"error",
        message:"this is not implemented yet"
    })
}
const getUser = (req,res)=>{
    res.status(500).json({
        status:"error",
        message:"this is not implemented yet"
    })
}
const createUser = (req,res)=>{
    res.status(500).json({
        status:"error",
        message:"this is not implemented yet"
    })
}
const updateUser = (req,res)=>{
    res.status(500).json({
        status:"error",
        message:"this is not implemented yet"
    })
}
const deleteUser = (req,res)=>{
    res.status(500).json({
        status:"error",
        message:"this is not implemented yet"
    })
}

// ROUTES
const tourRouter = express.Router()
app.use('/api/v1/tours',tourRouter)

const userRouter = express.Router()
app.use('/api/v1/users',userRouter);

tourRouter.route('/').get(getAllTours).post(createTour)
tourRouter.route('/:id').get(getTour)

userRouter.route('/').get(getAllUser).post(createUser);
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)


app.listen(3000,()=>{
    console.log("server is listening at port 3000")
})