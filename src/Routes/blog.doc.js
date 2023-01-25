
const listOfAllBlogs = {
    
    tags:["Blogs"],
    description: "list of all blogs",
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            
                                _id: "63ccde6635bde581af696708",
                                title: "dancing",
                                description: "dancing is a very good physical exercise for the dancer",
                                image: "http://localhost:5000/images/1674370662518pexels-harry-dona-2338407.jpg",
                                blogBody: "dancing makes most of the dancer feel good\ndancing makes most of the dancer feel gooddancing makes most of the dancer feel good\ndancing makes most of the dancer feel gooddancing makes most of the dancer feel good",
                                __v: 0
                              
                        },

                    },
                },
            },
        },
    },
};











const blogRouteDoc ={
    "/api/getAllBlogs": {
        get:listOfAllBlogs
    }
   
};

export default blogRouteDoc;