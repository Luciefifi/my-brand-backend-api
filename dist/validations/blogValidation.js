"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const blogValidationSChema = _joi.default.object({
  title: _joi.default.string().required().label("Title").regex(/^[A-Za-z ]+$/).messages({
    "string.pattern.base": "The titles can not include numbers and special characters",
    "any.required": "The title field can not be empty"
  }),
  description: _joi.default.string().required().label("description").messages({
    "any.required": "The  description field can not be empty"
  }),
  image: _joi.default.string().messages({
    "any.required": "The image field can not be empty"
  }),
  blogBody: _joi.default.string().required().messages({
    "any.required": "The  blog body field can not be empty"
  })
});
var _default = blogValidationSChema;
exports.default = _default;