import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    claud_api: process.env.CLOUDINARY_CLAUD_API,
    claud_api_secret: process.env.CLOUDINARY_CLAUD_API_SECRET, 
 });

 const uploads = (file, folder) => {
    return new Promise(resolve =>{
        cloudinary.uploader.upload(file, (result) =>{
            resolve({
                url: result.url,
                id: result.public_id
            })
        }, {
            resource_type: 'auto',
            folder: folder
        })
    })
 }

 export default uploads;