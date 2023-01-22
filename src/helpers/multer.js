import multer from "multer";
import path from "path";



//multer config

const storage = multer.diskStorage({
    destination: function (request, file, callback) {
      callback(null, './src/images');
    },
  
    filename: function (request, file, callback) {
      callback(null, Date.now() + file.originalname);
    },
  });

  const upload = multer({ storage: storage })


export default upload