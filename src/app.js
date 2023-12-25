import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))   //Handle data from forms

app.use(express.urlencoded({extended:true,limit:"16kb"}))   //Handle data that comes from URl

app.use(express.static("public"))  //To store assets(images,favicon,etc) in our server so that other files can access it

app.use(cookieParser())  //To perform crud operations on cookies on client's browser

export {app};