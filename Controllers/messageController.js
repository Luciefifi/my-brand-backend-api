import Message from "../Models/messageModel";

class messageController {

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
      }

      export default messageController;