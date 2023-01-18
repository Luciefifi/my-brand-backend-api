import User from "../Models/userModel";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



class UserController{
    //create / register user
    static async createUser(req,res){

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
                res.status(201).json({"registeredUser": user}); 
                console.log("User registered successfully!");
            
        } catch(err){
            res.status(500).json(err.message);
        }

    }


    static async login(req,res){
        try{
           
            //check if user exists
            const user = await User.findOne({email:req.body.email})
            
            if (!user) {
                return res.status(400).json({"InvalidCredentials":"Invalid email or password"});
            }
            //check if password is correct
            const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
            if (!isPasswordValid) {
                return res.status(400).json({"InvalidCredentials":"Invalid email or password"});
            }
            //create token
            const token = jwt.sign({ id:user._id }, process.env.JWT_SECRET, {
                expiresIn: "1h",
            });
            res.header("auth_token", token)

            res.status(200).json({"successMessage":"LoggedIn successfully!", "token": token});
    
                                           
            
        } catch(err){
            res.status(500).json(err.message);

        }

    }


        
          //get single user
          static async getSingleUser(req,res) {
            try {
           const user=await User.findById(req.param.id);
           res.status(200).json(user)
            }catch (error){
                res.status(404).json(error.message);
            }
        }


            
    //get all users
        static async getAllUsers(req,res) {
            try {
           const users = await User.find();
           res.status(200).json({"allUsers":users} )
            }catch (error){
                res.status(404).json(error.message);
            }
        }





}
export default UserController








    
