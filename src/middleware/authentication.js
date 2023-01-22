import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


const verifyUserToken = (req, res, next) => {

    const verifyToken = req.headers["auth_token"];
    if (!verifyToken) {
      return res.status(401).json({
        status:"fail",
        unauthorizedAccess:"Access denied, Please login!"});
    }
    try {
      const decodedToken = jwt.verify(verifyToken, process.env.JWT_SECRET);
      req.user = decodedToken.id;
      next();
    } catch (err) {
      res.status(500).json(
       { 
        status:"fail",
        error :err.message});
    }
  };

  export default verifyUserToken