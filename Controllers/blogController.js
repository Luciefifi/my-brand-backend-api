import Blog from "../Models/blogModel";
import uploads from "../utilis/cloudinary";

class blogController{
    static async createBlog(req,res){
        try {
            
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
}
export default blogController