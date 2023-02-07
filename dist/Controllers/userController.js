"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _userModel = _interopRequireDefault(require("../Models/userModel"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class UserController {
  //create / register user
  static async createUser(req, res) {
    try {
      const salt = await _bcrypt.default.genSalt();
      const hashedPassword = await _bcrypt.default.hash(req.body.password, salt);
      const hashedRepeatPassword = await _bcrypt.default.hash(req.body.repeatPassword, salt);
      const user = new _userModel.default({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        repeatPassword: hashedRepeatPassword
      });
      await user.save();
      res.status(201).json({
        status: "success",
        registeredUser: user
      });
      console.log("User registered successfully!");
    } catch (err) {
      res.status(500).json({
        status: "fail",
        error: err.message
      });
    }
  }
  static async login(req, res) {
    try {
      //check if user exists
      const user = await _userModel.default.findOne({
        email: req.body.email
      });
      if (!user) {
        return res.status(400).json({
          status: "fail",
          "InvalidCredentials": "Invalid email or password"
        });
      }
      //check if password is correct
      const isPasswordValid = await _bcrypt.default.compare(req.body.password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({
          status: "fail",
          "InvalidCredentials": "Invalid email or password"
        });
      }
      //create token
      const token = _jsonwebtoken.default.sign({
        id: user._id
      }, process.env.JWT_SECRET, {
        expiresIn: "100d"
      });
      res.header("auth_token", token);
      res.status(200).json({
        status: "success",
        "successMessage": "LoggedIn successfully!",
        "token": token
      });
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  //get single user
  static async getSingleUser(req, res) {
    try {
      const singleUser = await _userModel.default.findById(req.params.id);
      if (!singleUser) {
        res.status(404).json({
          status: "fail",
          message: "user not found!!!"
        });
        return;
      }
      res.status(200).json({
        status: "success",
        data: singleUser
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        error: error.message
      });
    }
  }

  //get all users
  static async getAllUsers(req, res) {
    try {
      const users = await _userModel.default.find();
      res.status(200).json({
        status: "success",
        allUsers: users
      });
    } catch (error) {
      res.status(404).json({
        status: "fail",
        error: error.message
      });
    }
  }
}
var _default = UserController;
exports.default = _default;