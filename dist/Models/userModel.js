"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const userSchema = _mongoose.default.Schema({
  firstName: {
    type: String,
    required: true,
    unique: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  repeatPassword: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "user"
  },
  isVerified: {
    type: String,
    default: "false"
  },
  dateCreated: {
    type: 'date',
    default: Date.now()
  }
});
const User = _mongoose.default.model('User', userSchema);
var _default = User;
exports.default = _default;