"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _blogController = _interopRequireDefault(require("../Controllers/blogController"));
var _multer = _interopRequireDefault(require("../helpers/multer"));
var _verifyAdmin = _interopRequireDefault(require("../middleware/verifyAdmin"));
var _blogValidation = require("../validations/blogValidation");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const blogRoute = _express.default.Router();
blogRoute.post("/create", _multer.default.single("image"), _verifyAdmin.default, _blogController.default.createBlog); // create new blog

blogRoute.put("/updatePost/:id", _multer.default.single("image"), _verifyAdmin.default, _blogController.default.updateBlog); //update existing blog

blogRoute.get("/getSingleBlog/:id", _blogController.default.getSingleBlog); //get single blog

blogRoute.get("/getAllBlogs", _blogController.default.getAllBlogs); //Get all blogs

blogRoute.delete("/deleteBlog/:id", _verifyAdmin.default, _blogController.default.deleteBlog); //Delete a blog

// "test": " nyc  mocha --recursive --exit --timeout 500000  --require @babel/register src/test/**/*.js",
var _default = blogRoute;
exports.default = _default;