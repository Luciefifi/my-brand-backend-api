
import express from "express";
import blogController from "../Controllers/blogController";
import upload from "../helpers/multer";
import verifyAdmin from "../middleware/verifyAdmin";
import { validateBlog } from "../validations/blogValidation";
import authLogin from "../middleware/authentication"


const blogRoute = express.Router();

blogRoute.post("/create", authLogin, verifyAdmin, blogController.createBlog); // create new blog

blogRoute.put("/updatePost/:blogId", authLogin, verifyAdmin, blogController.updateBlog); //update existing blog

blogRoute.get("/getSingleBlog/:blogId",blogController.getSingleBlog); //get single blog

blogRoute.get("/getAllBlogs",blogController.getAllBlogs); //Get all blogs

blogRoute.delete("/deleteBlog/:id",verifyAdmin ,blogController.deleteBlog); //Delete a blog


// "test": " nyc  mocha --recursive --exit --timeout 500000  --require @babel/register src/test/**/*.js",






export default blogRoute;