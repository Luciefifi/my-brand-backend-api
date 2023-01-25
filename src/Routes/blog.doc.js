
//get all blogs swagger documentation
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

//get single blog by id swagger documentation
const getSingleBlog ={
    tags:["Blogs"],
    summary:"get user by path id",
    description:"get single blog by id",
    parameters:[
        {
            name: "id",
            in : "path",
            description: "id of the user" ,
            type: "string",
            example: "hfbjsd2345njndfjhcbe3"
        },
    ],
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
        404:{
            description:"blog not found"
        }
    },
  
  }
  











const blogRouteDoc ={
    "/api/getAllBlogs": {
        get:listOfAllBlogs
    },
    "/api/getSingleBlog/{id}":{
        get:getSingleBlog
      }
   
};

export default blogRouteDoc;