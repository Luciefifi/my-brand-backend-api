import express from "express";
import dbConn from "./database/dBase";
import cors from "cors";
import dotenv from "dotenv";
import messageRoute from "./Routes/messageRoute";


const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const port=process.env.PORT ? process.env.PORT:5000;
dbConn();

app.listen(port ,()=>{
    console.log("The app is listening on : " +port)
})

app.use("/api", messageRoute)
















