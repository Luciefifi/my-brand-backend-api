"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _messageController = _interopRequireDefault(require("../Controllers/messageController"));
var _verifyAdmin = _interopRequireDefault(require("../middleware/verifyAdmin"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const messageRoute = _express.default.Router();
messageRoute.post("/createMessage", _messageController.default.createMessage);
messageRoute.get("/getSingleMessage/:id", _verifyAdmin.default, _messageController.default.getSingleMessage);
messageRoute.get("/getAllMessages", _verifyAdmin.default, _messageController.default.getAllMessages);
var _default = messageRoute;
exports.default = _default;