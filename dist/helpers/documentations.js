"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _blog = _interopRequireDefault(require("../Routes/blog.doc"));
var _message = _interopRequireDefault(require("../Routes/message.doc"));
var _user = _interopRequireDefault(require("../Routes/user.doc"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const swaggerDocumentations = {
  openapi: "3.0.0",
  info: {
    title: "My brand /capstone project",
    version: "0.1.0",
    description: "This is the backend of my brand"
  },
  contact: {
    name: "Lucie",
    email: "niyomutonilucie@gmail.com"
  },
  servers: [{
    url: "http://localhost:5000",
    name: "development server"
  }, {
    url: 'https://my-brand-backend-api.onrender.com',
    description: 'Production server'
  }],
  components: {
    securitySchemes: {
      auth_token: {
        type: 'apiKey',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: "auth_token",
        in: "header"
      }
    }
  },
  tags: [{
    name: "Blogs",
    description: ""
  }, {
    name: "Messages",
    description: ""
  }, {
    name: "Users",
    description: ""
  }],
  paths: _objectSpread(_objectSpread(_objectSpread({}, _blog.default), _message.default), _user.default)
};
var _default = swaggerDocumentations;
exports.default = _default;