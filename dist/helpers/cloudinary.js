"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _cloudinary = _interopRequireDefault(require("cloudinary"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
_cloudinary.default.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  claud_api: process.env.CLOUDINARY_CLAUD_API,
  claud_api_secret: process.env.CLOUDINARY_CLAUD_API_SECRET
});
const uploads = (file, folder) => {
  return new Promise(resolve => {
    _cloudinary.default.uploader.upload(file, result => {
      resolve({
        url: result.url,
        id: result.public_id
      });
    }, {
      resource_type: 'auto',
      folder: folder
    });
  });
};
var _default = uploads;
exports.default = _default;