import express from "express";
import dbConn from "./src/database/dBase";
import cors from "cors";
import dotenv from "dotenv";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import messageRoute from "./src/Routes/messageRoute";
import blogRoute from "./src/Routes/blogRoute";
import userRoute from "./src/Routes/userRoute";

            
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const port=process.env.PORT || 5000;
dbConn();
const options ={
    definition:{
        openapi: "3.0.0",
        info:{
            title: "My brand /capstone project",
            version:"0.1.0",
            description:"This is the backend of my brand"
        },
        contact:{
            name:"Lucie",
            email:"niyomutonilucie@gmail.com",
        },
        servers:[
            {
                url: "http://localhost:5000",
                name:"development server"
            },
        ],
    },
    apis: [
        './src/Routes/**/*.js'

    ] 
}
const specs = swaggerJSDoc (options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs , { explorer: true })
);

app.listen(port ,()=>{
    console.log("The app is listening on : " +port)
})

app.use("/api", messageRoute);
app.use("/api" , blogRoute);
app.use("/images", express.static("images"));
app.use('/api', userRoute )

export default app

















