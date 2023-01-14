import express from "express";
import blogController from "../Controllers/blogController";
import upload from "../utilis/multer";

const blogRoute = express.Router();

blogRoute.post("/create",upload.single("image"),blogController.createBlog); // create new blog

blogRoute.put("/updatePost/:id",upload.single("image"),blogController.updateBlog); //update existing blog

blogRoute.get("/getSingleBlog/:id",blogController.getSingleBlog); //get single blog

blogRoute.get("/getAllBlogs",blogController.getAllBlogs); //Get all blogs

blogRoute.delete("/deleteBlog/:id",blogController.deleteBlog); //Delete a blog








export default blogRoute;