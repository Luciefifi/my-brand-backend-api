"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//multer config

const storage = _multer.default.diskStorage({
  destination: function (request, file, callback) {
    callback(null, './src/images');
  },
  filename: function (request, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
const upload = (0, _multer.default)({
  storage: storage
});
var _default = upload;
exports.default = _default;