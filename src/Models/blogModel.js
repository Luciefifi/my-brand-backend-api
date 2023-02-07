import mongoose from "mongoose";
import moment from "moment";

const blogSchema = mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true,
      },
    image: {
      type: String,
   
    },
    blogBody: {
      type: String,
      required: true,
    },

    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: "User" },
    
  },{
    timestamps: true
  });

  blogSchema.set('toJSON', {
    virtuals: true,
    transform: function (doc, ret) {
        ret.createdAt = moment(ret.createdAt).format('MMMM, DD YYYY');
        ret.updatedAt = moment(ret.updatedAt).format('MMMM, DD YYYY');
    }
});
  
  const Blog = mongoose.model("Blog", blogSchema);
  
  export default Blog;