import User from "../Models/userModel";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userValidationSchema from "../validations/registerValidation";



class UserController{
    //create / register user
    static async createUser(req,res){


        const {error} = userValidationSchema.validate(req.body)
        if (error)
            return res.status(400).json({"validationError": error.details[0].message})

        const duplicatedEmail = await User.findOne({email: req.body.email})

        if (duplicatedEmail)
            return res.status(409).json({"message": `A user with email ${req.body.email} already exist!`})

        try{      

            const salt = await bcrypt.genSalt()

            const hashedPassword = await bcrypt.hash(req.body.password, salt)

            const hashedRepeatPassword = await bcrypt.hash(req.body.repeatPassword, salt)

            const user = new User({
                firstName:req.body.firstName,
                lastName:req.body.lastName,                  
                email: req.body.email,
                password: hashedPassword,
                repeatPassword: hashedRepeatPassword

            });
            await user.save();
            res.status(201).json({
                "successMessage": "User registered successfully!", 
                registeredUser: user});
            
        } catch(err){
            res.status(500).json({ 
                status:"fail",
                error: err.message
            });
        }

    }


    static async login(req,res){
        try{
           
            //check if user exists
            const user = await User.findOne({email:req.body.email})
            
            if (!user) {
                return res.status(400).json({
                    status:"fail",
                    "InvalidCredentials":"Invalid email or password"});
            }
            //check if password is correct
            const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
            if (!isPasswordValid) {
                return res.status(400).json({
                    status:"fail",
                    "InvalidCredentials":"Invalid email or password"});
            }
            //create token
            const token = jwt.sign({ data: user }, process.env.JWT_SECRET, {
                expiresIn: "100d",
            });
            res.header("auth_token", token)

            res.status(200).json({
                status:"success",
                "successMessage":"LoggedIn successfully!", "token": token});
    
                                           
            
        } catch(err){
            res.status(500).json({ 
                status:"fail",
                error: err.message
            });

        }

    }


    static async loggedInUser(req, res) {
        try{
    
            const loggedInUser = await User.findOne({ _id : req.user._id })
     
            res.status(200).json({
                "successMessage": "LoggedIn User Fetched Successfully!",
                "loggedInUser": loggedInUser, 
            })
        }
    
        catch(error){
            console.log(error)
            res.status(500).json({
                "status": "fail",
                "errorMessage": error.message
            })
        }
    }


        
          //get single user
          static async getSingleUser(req, res) {
            try {
    
              const singleUser = await User.findById(req.params.id)
              if(!singleUser)
              {
                res.status(404).json({
                    status:"fail",
                    message:"user not found!!!"
                  });
                  return;
              }

              res.status(200).json({
                status:"success",
                data: singleUser
              });
            } catch (error) {
              res.status(500).json({ 
                
                status:"fail",
                error: error.message });
            }
          }

            
    //get all users
        static async getAllUsers(req,res) {
            try {
           const users = await User.find();
           res.status(200).json({
            status:"success",
            allUsers:users})
            }catch (error){
                res.status(404).json({
                    status:"fail",
                    error:error.message 
                });
            }
        }





}
export default UserController








    
