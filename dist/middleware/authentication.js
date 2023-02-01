"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const verifyUserToken = (req, res, next) => {
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
    next();
  } catch (err) {
    res.status(500).json({
      status: "fail",
      error: err.message
    });
  }
};
var _default = verifyUserToken;
exports.default = _default;