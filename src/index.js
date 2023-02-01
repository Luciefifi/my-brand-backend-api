import express from "express";
import dbConn from "./database/dBase";
import cors from "cors";
import dotenv from "dotenv";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerDocumentations from "./helpers/documentations";
import swaggerDoc from "swagger-ui-express";
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

app.use("/documentations" ,swaggerDoc.serve)
app.use("/documentations" ,swaggerDoc.setup(swaggerDocumentations))

app.use("/api", messageRoute);
app.use("/api" , blogRoute);
app.use("/images", express.static("images"));
app.use('/api', userRoute )

export default app

















