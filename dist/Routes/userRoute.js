"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = _interopRequireDefault(require("../Controllers/userController"));
var _userModel = _interopRequireDefault(require("../Models/userModel"));
var _authentication = _interopRequireDefault(require("../middleware/authentication"));
var _verifyAdmin = _interopRequireDefault(require("../middleware/verifyAdmin"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const userRoute = _express.default.Router();
userRoute.post("/login", _userController.default.login);
userRoute.post("/createUser", _userController.default.createUser);
userRoute.get("/getSingleUser/:id", _verifyAdmin.default, _userController.default.getSingleUser);
userRoute.get("/getAllUsers", _userController.default.getAllUsers);
var _default = userRoute;
exports.default = _default;