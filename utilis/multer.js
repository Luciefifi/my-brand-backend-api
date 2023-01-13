import multer from "multer";
import path from "path";



//multer config

const storage = multer.diskStorage({
    destination: function (request, file, callback) {
      callback(null, './images');
    },
  
    filename: function (request, file, callback) {
      callback(null, Date.now() + file.originalname);
    },
  });

  const upload = multer({ storage: storage })


// const upload = multer({
//     storage:multer.diskStorage({}),
//     filename:(req,file,cb) =>{
//         cb(null,file.originalname)
//     },
//     fileFilter:(req,file,cb) =>{
//         let extention = path.extname(file.originalname);
//         if(!extention === '.jpg' && !extention === '.jpeg' && extention === '.png'){
//             cb(new Error('Unsupported file!',false));
//             return;
//         }
//         cb(null,true);
//     }
// });


export default upload