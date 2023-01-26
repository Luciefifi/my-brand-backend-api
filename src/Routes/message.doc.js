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


  const messageRoutDoc = {
    "/api/createMessage": {
        post:createMessage
    },

  }


  export default messageRoutDoc;