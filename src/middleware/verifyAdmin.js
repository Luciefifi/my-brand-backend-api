import User from "../Models/userModel";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


const verifyAdmin = async(req, res, next) => {

    const verifyToken = req.headers["auth_token"];
    if (!verifyToken) {
      return res.status(401).json({
        status:"fail",
        unauthorizedAccess:"Access denied, Please login!"});
    }
    try {
      const decodedToken = jwt.verify(verifyToken, process.env.JWT_SECRET);
      req.user = decodedToken.data;

      const userRole = req.user.role

      if(userRole !== "admin"){
        return res.status(401).json({
          status:"fail",
          unauthorized: "You are not allowed to peform this action"})
      }

      next();
    } catch (err) {
      res.status(500).json({
        status:"fail",
        errror:err.message
      });
    }
  };

  export default verifyAdmin