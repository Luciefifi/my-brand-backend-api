"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _userModel = _interopRequireDefault(require("../Models/userModel"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const verifyAdmin = async (req, res, next) => {
  const verifyToken = req.headers["auth_token"];
  if (!verifyToken) {
    return res.status(401).json({
      status: "fail",
      unauthorizedAccess: "Access denied, Please login!"
    });
  }
  try {
    const decodedToken = _jsonwebtoken.default.verify(verifyToken, process.env.JWT_SECRET);
    req.user = decodedToken.id;
    const loggeInUser = await _userModel.default.findOne({
      _id: req.user
    });
    const userRole = loggeInUser.role;
    if (userRole !== "admin") {
      return res.status(401).json({
        status: "fail",
        unauthorized: "You are not allowed to peform this action"
      });
    }
    next();
  } catch (err) {
    res.status(500).json({
      status: "fail",
      errror: err.message
    });
  }
};
var _default = verifyAdmin;
exports.default = _default;