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
          res.status(201).json(message); 
          console.log("message sent!!!");
        } catch (error) {
          res.status(401).json(error.message);
        }
      }

      //get single message
      static async getSingleMessage(req,res) {
        try {
       const message=await Message.findById(req.param.id);
       res.status(200).json(message)
        }catch (error){
            res.status(404).json(error.message);
        }
    }

//get all messages
    static async getAllMessages(req,res) {
        try {
       const messages=await Message.find();
       res.status(200).json(messages)
        }catch (error){
            res.status(404).json(error.message);
        }
    }
    
      }

      export default messageController;