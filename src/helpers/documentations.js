import blogRouteDoc from "../Routes/blog.doc"

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
        tags:[
            {
                name:"Blogs",
                description:""
            },
            

        ],
        paths:{
            ...blogRouteDoc

        }
    }

export default swaggerDocumentations