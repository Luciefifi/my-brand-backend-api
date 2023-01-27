import blogRouteDoc from "../Routes/blog.doc"
import messageRoutDoc from "../Routes/message.doc"
import userRouteDoc from "../Routes/user.doc"

const swaggerDocumentations ={
    
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


        components: {
            securitySchemes: {
              auth_token: {
                type: 'apiKey',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                name:"auth_token",
                in:"header"
              },
            },
          },
          
        
        
        tags:[
            {
                name:"Blogs",
                description:""
            },
            {
                name:"Messages",
                description:""
            },
            {
                name:"Users",
                description:""
            }
            

        ],
        paths:{
            ...blogRouteDoc,
            ...messageRoutDoc,
            ...userRouteDoc

        }
    }

export default swaggerDocumentations