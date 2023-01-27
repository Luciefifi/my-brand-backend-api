
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
    tags:["Blogs"],
    description: "create a new blog",
    security: [
        {
        auth_token: [],
        },
      ],
    requestBody:{
        content:{
            "Application/json":{
                schema:{
                    type:"object",
                    properties:{
                        title:{
                            type:"string",
                            description:"title of the blog",
                            example:"singing"
                        },
                        description:{
                            type:"string",
                            description:"description of the blog",
                            example:"singing is the best practice",
                        },
                        image:{
                            type:"file",
                            description:"image of the blog",
                            example:"/Users/andelarwanda/Desktop/My Projects/server/src/images/1673612829382brand.PNG"
                        },
                        blogBody:{
                            type:"string",
                            description:"body of the blog",
                            example:"singing is the best practice and the best",
                        },
                        
                    },
                },
            },
  
        },
    },
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
                            
                          
                    },
  
                    },
                },
            },
        },
    },
  
  
  };

//update blog swagger documentation
  const updateBlog = {
    tags: ["Blogs"],
    description: "Update a blog",
    security: [
        {
          auth_token: [],
        },
      ],
    parameters: [
        {
            name: "id",
            in: "path",
            description: "ID of the blog to update",
            required: true,
            type: "string"
        }
    ],
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        title: {
                            type: "string",
                            description: "Title of the blog",
                            example: "Singing"
                        },
                        description: {
                            type: "string",
                            description: "Description of the blog",
                            example: "Singing is the best practice",
                        },
                        image: {
                            type: "file",
                            description: "Image of the blog (url)",
                            example: "http://localhost:5000/images/1674370662518pexels-harry-dona-2338407.jpg"
                        },
                        blogBody: {
                            type: "string",
                            description: "Body of the blog",
                        }
                    }
                }
            }
        },
    },
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            _id: {
                                type: "string",
                                description: "ID of the updated blog"
                            },
                            title: {
                                type: "string",
                                description: "Title of the updated blog"
                            },
                            description: {
                                type: "string",
                                description: "Description of the updated blog"
                            },
                            image: {
                                type: "string",
                                description: "Image of the updated blog (url)"
                            },
                        },
                    },
                },
            },
        },
    },
};

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