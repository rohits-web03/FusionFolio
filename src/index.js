// require("dotenv").config({path:"./env"})
// import dotenv from "dotenv";
// dotenv.config({
//     path:"./env"
// })

import connectDB from "./db/index.js";
import { app } from "./app.js";

const port=process.env.PORT || 8000;

connectDB().then(()=>{
    app.on("error",(error)=>{
        console.error("Error for Express: ",error);
        throw error;
    })
    app.listen(port,()=>{
        console.log(`Server running on port ${port}`)
    })
})
.catch(err=>{
    console.log("MongoDB connection failed!!!!",err);
})





/*
import express from "express"
const app=express();

(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.error("Error: ",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error: ",error);
        throw error;
    }
})()
*/