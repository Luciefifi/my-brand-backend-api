"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _blogModel = _interopRequireDefault(require("../Models/blogModel"));
var _blogValidation = _interopRequireDefault(require("../validations/blogValidation"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class blogController {
  static async createBlog(req, res) {
    try {
      // Blog validation
      const {
        error
      } = _blogValidation.default.validate(req.body);
      if (error) return res.status(400).json({
        status: "fail",
        "validationError": error.details[0].message
      });
      const imageUrl = `http://localhost:5000/images/${req.file.filename}`;
      const blog = new _blogModel.default({
        title: req.body.title,
        description: req.body.description,
        image: imageUrl,
        blogBody: req.body.blogBody
      });
      await blog.save();
      (req, res) => {
        const {
          error,
          value
        } = validateBlog(req.body);
        if (!error) {
          console.log(error);
          return res.status(400).json({
            status: "fail",
            "message": error.details
          });
        }
        res.send("blogs are validated");
      }, res.status(201).json({
        "status": "success",
        "data": blog
      });
    } catch (error) {
      res.status(500).json({
        staus: "fail",
        "error": error.message
      });
    }
  }
  static async updateBlog(req, res) {
    try {
      const imageUrl = `http://localhost:5000/images/${req.file.filename}`;
      const updatedBlog = await _blogModel.default.findByIdAndUpdate(req.params.id, {
        $set: {
          title: req.body.title,
          description: req.body.description,
          image: imageUrl,
          blogBody: req.body.blogBody
        }
      }, {
        new: true
      });
      if (!updatedBlog) {
        res.status(200).json({
          status: "fail",
          message: "blog not found"
        });
        return;
      }
      res.status(200).json({
        status: "success",
        data: updatedBlog
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        error: error.message
      });
    }
  }

  // get single blog

  static async getSingleBlog(req, res) {
    try {
      const singleBlog = await _blogModel.default.findById(req.params.id);
      if (!singleBlog) {
        res.status(404).json({
          status: "fail",
          message: "blog not found"
        });
        return;
      }
      res.status(200).json({
        status: "success",
        data: singleBlog
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        error: error.message
      });
    }
  }

  //get all blogs

  static async getAllBlogs(req, res) {
    try {
      const allBlogs = await _blogModel.default.find();
      res.status(200).json({
        status: "success",
        data: allBlogs
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        error: error.message
      });
    }
  }

  //delete a blog

  static async deleteBlog(req, res) {
    try {
      const blog = await _blogModel.default.findById(req.params.id);
      if (!blog) {
        res.status(404).json({
          status: "fail",
          error: "blog not found"
        });
        return;
      }
      await blog.remove();
      res.status(200).json({
        status: "success",
        message: "Blog deleted successfully"
      });
    } catch (error) {
      res.status(500).json({
        staus: "fail",
        error: error.message
      });
    }
  }
}
var _default = blogController;
exports.default = _default;