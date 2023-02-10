import express from "express";
import messageController from "../Controllers/messageController";
import verifyAdmin from "../middleware/verifyAdmin";

const messageRoute =express.Router();

messageRoute.post("/createMessage",messageController.createMessage);
messageRoute.get("/getSingleMessage/:id", verifyAdmin,messageController.getSingleMessage);
messageRoute.get("/getAllMessages" ,messageController.getAllMessages)
messageRoute.delete("deleteMessage/:id",verifyAdmin ,messageController.deleteMessage); //Delete a blog


export default messageRoute;