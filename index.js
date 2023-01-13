import dbConn from "./database/dBase";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

const port=process.env.PORT ? process.env.PORT:5000;
dbConn();
















