
import express from "express";
import blogController from "../Controllers/blogController";
import upload from "../helpers/multer";
import verifyAdmin from "../middleware/verifyAdmin";
import { validateBlog } from "../validations/blogValidation";


const blogRoute = express.Router();

blogRoute.post("/create",upload.single("image"),verifyAdmin, blogController.createBlog); // create new blog

blogRoute.put("/updatePost/:id",upload.single("image"),verifyAdmin,blogController.updateBlog); //update existing blog

blogRoute.get("/getSingleBlog/:id",blogController.getSingleBlog); //get single blog

blogRoute.get("/getAllBlogs",blogController.getAllBlogs); //Get all blogs

blogRoute.delete("/deleteBlog/:id",verifyAdmin ,blogController.deleteBlog); //Delete a blog








export default blogRoute;