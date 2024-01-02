import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/apiError.js";
import {User} from "../models/user.models.js";

const registerUser=asyncHandler(async(req,res)=>{
    //Get user from frontend
    //Validation-not empty
    //Check if user already exists:username,email
    //Check for images,check for avatar
    //Upload them to cloudinary,avatar
    //create user object - create entry in db
    //remove password and refresh token field from response
    //Check for user creation
    // return response or error
    const {fullName,email,username,password}=req.body;
    console.log('email:',email)

    if(
        [fullName,email,username,password].some((field)=>(
            field?.trim()===""
        ))
    ){
        throw new ApiError(400,"All fields are required!!");
    }

    const existedUser=User.findOne({
        $or:[{username},{email}]
    })

    if(existedUser){
        throw new ApiError(409,"User with email or username exists!!");
    }    
})

export {registerUser}