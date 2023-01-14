import express from "express";
import blogController from "../Controllers/blogController";
import upload from "../utilis/multer";

const blogRoute = express.Router();

blogRoute.post("/create",upload.single("image"),blogController.createBlog);

blogRoute.put("/updatePost/:id",upload.single("image"),blogController.updateBlog);








export default blogRoute;