import express from 'express'
import UserController from '../Controllers/userController'
import User from '../Models/userModel';
import verifyUserToken from '../middleware/authentication';
import verifyAdmin from '../middleware/verifyAdmin';

const userRoute = express.Router();




userRoute.post("/login",UserController.login );
   




userRoute.post("/createUser", UserController.createUser);
userRoute.get("/getSingleUser/:id",verifyAdmin,UserController.getSingleUser);
userRoute.get("/getAllUsers",UserController.getAllUsers)

export default userRoute