import express from 'express'
import UserController from '../Controllers/userController'
import User from '../Models/userModel';
import verifyUserToken from '../middleware/authentication';

const userRoute = express.Router();




userRoute.post("/login",UserController.login );
   




userRoute.post("/createUser", UserController.createUser);
userRoute.get("/getSingleUser/:id",UserController.getSingleUser);
userRoute.get("/getAllUsers",verifyUserToken ,UserController.getAllUsers)

export default userRoute