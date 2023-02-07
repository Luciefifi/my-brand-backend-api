import Blog from "../Models/blogModel";
import blogValidationSchema from "../validations/blogValidation";
import cloudinary from "../helpers/cloudinary";

class blogController{
    static async createBlog(req,res){
        try {

          // Blog validation
          const {error} = blogValidationSchema.validate(req.body);

          if (error)
              return res.status(400).json({
                status:"fail",
                "validationError": error.details[0].message})

            const postImageResult = await cloudinary.uploader.upload(req.body.image, {
                folder: "My_Brand-Images"
            })

            const blog = new Blog({
                title:req.body.title,
                description:req.body.description,
                image: postImageResult.secure_url,
                blogBody:req.body.blogBody,
                createdBy : req.user._id,
            });
            await blog.save();
            const populatedPost = await blog.populate('createdBy')

            res.status(201).json({"status":"success",
            "successMessage": "Post created successfully!",
            "data": populatedPost});

        } catch (error) {
          console.log(error)
            res.status(500).json({
              staus : "fail",
              "error": error.message});
        }
    }

    static async updateBlog(req, res) {
          try {
  
            const {error} = blogValidationSchema.validate(req.body);

          if (error)
              return res.status(400).json({
                status:"fail",
                "validationError": error.details[0].message})

            const postImageResult = await cloudinary.uploader.upload(req.body.image, {
                folder: "My_Brand-Images"
            })
            // const imageUrl = `http://localhost:5000/images/${req.file.filename}`
  
            const updatedBlog = await Blog.findByIdAndUpdate(req.params.blogId,{$set:{
              title: req.body.title,
              description:req.body.description,
              image: postImageResult.secure_url,
              blogBody:req.body.blogBody
            }},{new:true});

            if(!updatedBlog){
              res.status(200).json({
                status:"fail",
                message: "blog not found"
              });
              return;
            }
            res.status(200).json({
              status:"success",
              "successMessage": "Post updated successfully!",
              data:updatedBlog
            });
          } catch (error) {
            res.status(500).json({ 
              status:"fail",
              error: error.message });
          }
        }


        // get single blog

        static async getSingleBlog(req, res) {
        try {

          const singleBlog = await Blog.findById(req.params.blogId).populate("createdBy") 

          if(!singleBlog)
          {
            res.status(404).json({
              status: "fail",
              message: "blog not found"
            })
            return;
          }
          res.status(200).json({
            status:"success",
            data: singleBlog
          });
        } catch (error) {
          res.status(500).json({
            status:"fail",
             error: error.message });
        }
      }

      //get all blogs

      static async getAllBlogs(req, res) {
        try {

          const allBlogs = await Blog.find().populate("createdBy").sort({createdAt: -1})
         res.status(200).json({
            status:"success",
            data: allBlogs
          });
        } catch (error) {
          res.status(500).json({ 
            status: "fail",
            error: error.message });
        }
      }

      //delete a blog

      static async deleteBlog(req, res) {
        try {
          const blog = await Blog.findById(req.params.id)
          if(!blog){
            res.status(404).json({
              status :"fail",
              error :"blog not found"
            });
            return;
          }
    
          await blog.remove()
          res.status(200).json({
            status:"success",
            "successMessage":"Blog deleted successfully",
          });
          
        } catch (error) {
          res.status(500).json({
            staus : "fail",
             error: error.message });
        }
      }


    
    
}
export default blogController