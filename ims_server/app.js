// Basic Lib Import
const express =require('express');
const router =require('./src/routes/api');
const app= new express();
const bodyParser =require('body-parser');

// Security Middleware Lib Import
const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');

// Database Lib Import
const mongoose =require('mongoose');

// Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


// Body Parser Implement
app.use(bodyParser.json())

// Request Rate Limit
const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

// Mongo DB Database Connection
// let URI="mongodb+srv://<username>:<password>@get-rest-project.ywa4b.mongodb.net/inventoryDB?retryWrites=true&w=majority";
//let URI="mongodb+srv://get-rest-user:Rest123@get-rest-project.ywa4b.mongodb.net/inventoryDB?retryWrites=true&w=majority";
let URI = "mongodb+srv://foysalahamed049:UJmYsv13hFen1muI@cluster6.pjqpz.mongodb.net/inventoryDB";
// let OPTION={user:'get-rest-user',pass:'Rest123',autoIndex:true}
// mongoose.connect(URI,OPTION,(error)=>{
    mongoose.connect(URI,(error)=>{
    console.log("Connection Success")
    console.log(error)
})


// Routing Implement
app.use("/api/v1",router)

// Undefined Route Implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})


module.exports=app;
















