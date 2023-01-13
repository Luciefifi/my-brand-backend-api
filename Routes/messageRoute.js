import express from "express";
import messageController from "../Controllers/messageController";

const messageRoute =express.Router();

messageRoute.post("/createMessage",messageController.createMessage);
messageRoute.get("/getSingleMessage/:id",messageController.getSingleMessage);
messageRoute.get("/getAllMessages",messageController.getAllMessages)

export default messageRoute;