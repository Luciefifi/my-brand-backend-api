import express from "express";
import dbConn from './database/dBase.js'
import cors from "cors";
import dotenv from "dotenv";
import messageRoute from "./Routes/messageRoute";
import blogRoute from "./Routes/blogRoute";
import userRoute from "./Routes/userRoute";


const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const port=process.env.PORT || 5000;
dbConn();

app.listen(port ,()=>{
    console.log("The app is listening on : " +port)
})

app.use("/api", messageRoute);
app.use("/api" , blogRoute);
app.use("/images", express.static("images"));
app.use('/api', userRoute )

export default app ;
















