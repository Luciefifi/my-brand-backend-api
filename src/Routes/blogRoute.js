
// /**
//  * @swagger
//  *   components:
//  *     schemas:
//  *       Blogs:
//  *         type: object
//  *         required:
//  *           - title
//  *           - description
//  *           - image
//  *           - body
//  *         properties:
//  *           id:
//  *             type: string
//  *             description: The auto-generated id of the book
//  *           title:
//  *             type: string
//  *             description: The title of your book
//  *           description:
//  *             type: string
//  *             description: blog description
//  *           image:
//  *             type: string
//  *             description: the image that describes the blog
//  *           body:
//  *             type: string
//  *             description: the blog content
//  *         example:
//  *           id: gdgh9464chds
//  *           title: dancing
//  *           description: dancing makes me feel energized
//  *           image: localhost:5000/images/mybrand.png
//  *           body: dancing makes me feel energized dancing makes me feel energized
//  */

/**
 * @swagger
 * tags:
 *   name: Blog
 *   description: Blog API
 * /Blog:
 *   get:
 *     summary: get all blogs
 *     tags: [Blog]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *     responses:
 *       200:
 *         description: all blogs.
 *         content:
 *           application/json:
 *             schema:
 *       500:
 *         description: Some server error
 *
 */




/**
 * @swagger
 * path:
 *  /blogs:
 *    get:
 *      summary: Get all blogs
 *      tags: [Blogs]
 *      responses:
 *        200:
 *          description: Successfully retrieved all blogs
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Blog'
 */


/** 
* @swagger
* openapi: 3.0.0
* paths:
*   /posts/{id}:
*     get:
*       summary: Retrieve a single post by ID
*       tags:
*         - Blogs
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: ID of the post to retrieve
*           schema:
*             type: string
*       responses:
*         200:
*           description: Successfully retrieved the post
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Blog'
*         404:
*           description: Post not found
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   message:
*                     type: string
*         500:
*           description: Server error
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   message:
*                     type: string
*
* components:
*   schemas:
*     Blog:
*       type: object
*       properties:
*         id:
*           type: string
*           description: The unique ID of the post
*         title:
*           type: string
*           description: The title of the post
*         description:
*           type: string
*           description: The content of the post
*         image:
*           type:string
*           description:blog image
*         blogBody:
*           type: string
*           description: The date the post was created
*/







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