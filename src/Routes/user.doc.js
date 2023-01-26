//register user swagger documentation 
const registerUser = {
    tags:["Users"],
    description: "register user",
    requestBody:{
        content:{
            "Application/json":{
                schema:{
                    type:"object",
                    properties:{
                        firstName:{
                            type:"string",
                            description:" first name of the user",
                            example:"Lucie"
                        },
                        lastName:{
                            type:"string",
                            description:"Last name of the user",
                            example:"Lavender",
                        },
                        email:{
                            type:"email",
                            description:"email of the user",
                            example:"lavender@gmail.com"
                        },
                        password:{
                            type:"string",
                            description:"password of the user",
                            example:"12345678",
                        },
                        repeatPassword:{
                            type:"string",
                            description:"password of the user",
                            example:"12345678",
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
  
                    },
                },
            },
        },
    },
  
  
  };
//logging in a user swagger documentation
  const login = {
    tags:["Users"],
    description: "login user",
    requestBody:{
        content:{
            "Application/json":{
                schema:{
                    type:"object",
                    properties:{
                        email:{
                            type:"email",
                            description:"email of the user",
                            example:"lavender@gmail.com"
                        },
                        password:{
                            type:"string",
                            description:"password of the user",
                            example:"12345678",
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
  
                    },
                },
            },
        },
    },
  
  
  };

  //get all users swagger documetnation 
  const listOfAllUsers = {
    
    tags:["Users"],
    description: "list of all users",
    security: [
        {
          auth_token: [],
        },
      ],
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                      

                    },
                },
            },
        },
    },
};


  const userRouteDoc = {
    "/api/createUser": {
        post:registerUser
    },
    "/api/login": {
        post:login
    },
    "/api/getAllUsers": {
        get:listOfAllUsers
    },


  }


  export default userRouteDoc

