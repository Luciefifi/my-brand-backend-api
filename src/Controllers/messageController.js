import Message from "../Models/messageModel";

class messageController {
//create a contact message
    static async createMessage(req, res) {
        try {
          const message = new Message({
            fname: req.body.fname,
            lname:req.body.lname,
            email: req.body.email,
            message:req.body.message,
          });
          await message.save();
          res.status(201).json({
            status:"success", 
            data: message});
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
    
      }

      export default messageController;