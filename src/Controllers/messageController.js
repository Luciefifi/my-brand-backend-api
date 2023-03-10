import Message from "../Models/messageModel";
import messageValidationSchema from "../validations/messageValidation";

class messageController {
//create a contact message
    static async createMessage(req, res) {

      //validations

      const {error} = messageValidationSchema.validate(req.body);

      if (error)
          return res.status(400).json({
            status:"fail",
            "validationError": error.details[0].message})

        try {
          const message = new Message({
            fname: req.body.fname,
            lname:req.body.lname,
            email: req.body.email,
            message:req.body.message,
          });
          await message.save();
          res.status(201).json({
            "successMessage": "Message sent  successfully!", 
                message: message});
          console.log("message sent!!!");
        } catch (error) {
          res.status(401).json({
            status: "fail",
            error: error.message});
        }
      }

      //get single message
      static async getSingleMessage(req, res) {
        try {

          const singleMessage = await Message.findById(req.params.id)
          if(!singleMessage)
          {
            res.status(404).json({
              status:"fail",
              message: "message not found !!!"
            });
            return;
          }
          res.status(200).json({
            status:"success",
            data: singleMessage
          });
        } catch (error) {
          res.status(500).json({ 
            status:"fail",
            error: error.message });
        }
      }

//get all messages
    static async getAllMessages(req,res) {
        try {
       const messages=await Message.find();
       res.status(200).json({
        status:"success",
        data:messages
        
       })
        }catch (error){
            res.status(404).json(error.message);
        }
    }

    //delete a message 

    static async deleteMessage(req, res) {
      try {
        const message = await Message.findById(req.params.id)
        if(!message){
          res.status(404).json({
            status :"fail",
            error :"message not found"
          });
          return;
        }
  
        await message.remove()
        res.status(200).json({
          status:"success",
          "successMessage":"message deleted successfully",
        });
        
      } catch (error) {
        res.status(500).json({
          staus : "fail",
           error: error.message });
      }
    }
    
      }

      export default messageController;