//create a message swagger documentation

const createMessage = {
    tags:["Messages"],
    description: "create contact message",
    requestBody:{
        content:{
            "Application/json":{
                schema:{
                    type:"object",
                    properties:{
                        fname:{
                            type:"string",
                            description:" first name of the user",
                            example:"Lucie"
                        },
                        lname:{
                            type:"string",
                            description:"Last name of the user",
                            example:"Lavender",
                        },
                        email:{
                            type:"email",
                            description:"email of the user",
                            example:"lavender@gmail.com"
                        },
                        message:{
                            type:"string",
                            description:"the message to send",
                            example:"this is amazing",
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

  //get all user messages swagger documentation 
  const listOfAllMessages = {
    
    tags:["Messages"],
    description: "list of all messages",
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


//get single message swagger documentation
const getSingleMessage={
    tags:["Messages"],
    summary:"get message by path id",
    description:"get single message by id",
    security: [
        {
          auth_token: [],
        },
      ],
    parameters:[
        {
            name: "id",
            in : "path",
            description: "id of the message" ,
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

  
                    },
                },
            },
        },
        404:{
            description:"message not found"
        }
    },
  
  }



  const messageRoutDoc = {
    "/api/createMessage": {
        post:createMessage
    },
    "/api/getAllMessages": {
        get:listOfAllMessages
    },
    "/api/getSingleMessage/{id}":{
        get:getSingleMessage
      },


  }


  export default messageRoutDoc;