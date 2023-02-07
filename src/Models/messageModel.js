import mongoose from "mongoose";

const messageSchema=mongoose.Schema({
    fname:{
        type:String,
    },
    lname:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    message: {
        type:String,
    }
});

const Message=mongoose.model('Message',messageSchema);

export default Message;