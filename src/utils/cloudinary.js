import fs from "fs";
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary=async (localFilePath)=>{
    try {
        if(!localFilePath) return null;
        //ipload file on cloudinary
        const response=await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //File has been uploaded successfully 
        console.log("File has been uploaded successfully",response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)  //Removes the locally saved temporary file as the upload failed
        return null;
    }
}

export {uploadOnCloudinary}
