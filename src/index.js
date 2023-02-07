import express from "express";
import dbConn from "./database/dBase";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import swaggerDocumentations from "./helpers/documentations";
import swaggerDoc from "swagger-ui-express";
import messageRoute from "./Routes/messageRoute";
import blogRoute from "./Routes/blogRoute";
import userRoute from "./Routes/userRoute";


            
const app = express();

app.use(cors());
app.use(bodyParser.json({limit: "100mb"}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json({limit: "100mb", extended: true}))
app.use(express.urlencoded({limit: "100mb", extended: true, parameterLimit: 50000}))
dotenv.config();

const port=process.env.PORT || 5000;
dbConn();


app.listen(port ,()=>{
    console.log("The app is listening on : " +port)
})

app.use("/documentations" ,swaggerDoc.serve)
app.use("/documentations" ,swaggerDoc.setup(swaggerDocumentations))

app.use("/api", messageRoute);
app.use("/api" , blogRoute);
app.use("/images", express.static("images"));
app.use('/api', userRoute )

export default app

















