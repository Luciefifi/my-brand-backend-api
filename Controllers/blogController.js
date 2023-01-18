import Blog from "../Models/blogModel";
import blogValidationSchema from "../validations/blogValidation";

class blogController{
    static async createBlog(req,res){
        try {

          // Blog validation
          const {error} = blogValidationSchema.validate(req.body);

          if (error)
              return res.status(400).json({"validationError": error.details[0].message})

            
            const imageUrl = `http://localhost:5000/images/${req.file.filename}`

            const blog = new Blog({
                title:req.body.title,
                description:req.body.description,
                image: imageUrl,
                blogBody:req.body.blogBody
            });
            await blog.save();

            res.status(201).json({"status":"success", "data": blog});

        } catch (error) {
            res.status(500).json({"error": error.message});
        }
    }

    static async updateBlog(req, res) {
          try {
  
            const imageUrl = `http://localhost:5000/images/${req.file.filename}`
  
            const updatedBlog = await Blog.findByIdAndUpdate(req.params.id,{$set:{
              title: req.body.title,
              description:req.body.description,
              image: imageUrl,
              blogBody:req.body.blogBody
            }},{new:true});
            res.status(200).json({
              status:"success",
              data:updatedBlog
            });
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
        }


        // get single blog

        static async getSingleBlog(req, res) {
        try {

          const singleBlog = await Blog.findById(req.params.id)
          res.status(200).json({
            status:"success",
            data: singleBlog
          });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }

      //get all blogs

      static async getAllBlogs(req, res) {
        try {

          const allBlogs = await Blog.find()
          res.status(200).json({
            status:"success",
            data: allBlogs
          });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }

      //delete a blog

      static async deleteBlog(req, res) {
        try {

          const deletedBlog = await Blog.findByIdAndDelete(req.params.id)
          res.status(200).json({
            status:"Blog deleted successfully",
          });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }


    
    
}
export default blogController