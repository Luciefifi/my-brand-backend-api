
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
  //create a blog swagger documentation 


  const createBlog = {
    tags:['Blogs'],
    description:"Create a Blog post",
    security: [
        {
          auth_token: [],
        },
      ],
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:"object",
                    properties:{
                        title:{
                            type:"string",
                        },

                        image:{
                            type:"file",
                            description:"the image of the blog post"
                        },
                        
                        description:{
                            type:"string",
                        },
                        blogBody:{
                            type:"string",
                        },
                       
                    }
                }
            }
        }
    },
    responses:{
        201:{
            description:"OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"success",
                        data:[]
                    }
                }
            }
        }
    }
}

//update blog swagger documentation
const updateBlog= {
    tags:['Blogs'],
    description:"Update a Blog ",
    security: [
        {
          auth_token: [],
        },
      ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the blog",
            type:"string"
        }
    ],
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:"object",
                    properties:{
                        title:{
                            type:"string",
                        },
                        image:{
                            type:"file",
                            description:"the image of the blog post"
                        },
                        description:{
                            type:"string",
                        },
                        blogBody:{
                            type:"string",
                            description:"the image of the blog post"
                        }
                       
                    }
                }
            }
        }
    },
    responses:{
        201:{
            description:"OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"success",
                        data:[]
                    }
                }
            }
        }
    }
}

//delete a blog swagger documentation 
const deleteBlog = {
    tags: ["Blogs"],
    description: "Delete a blog",
    security: [{ auth_token: [] }],
    parameters: [
        {
            name: "id",
            in: "path",
            description: "ID of the blog to delete",
            required: true,
            type: "string"
        }
    ],
    responses: {
        204: {
            description: "No Content"
        },
        401: {
            description: "Unauthorized"
        },
        404: {
            description: "Not Found"
        }
    }
};








const blogRouteDoc ={
    "/api/getAllBlogs": {
        get:listOfAllBlogs
    },
    "/api/getSingleBlog/{id}":{
        get:getSingleBlog
      },
      "/api/create":{
        post:createBlog
      },
      "/api/updatePost/{id}":{
        put:updateBlog
      },
      "/api/deleteBlog/{id}":{
        delete:deleteBlog
      }
   
};

export default blogRouteDoc;