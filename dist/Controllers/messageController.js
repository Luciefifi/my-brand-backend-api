"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _messageModel = _interopRequireDefault(require("../Models/messageModel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class messageController {
  //create a contact message
  static async createMessage(req, res) {
    try {
      const message = new _messageModel.default({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        message: req.body.message
      });
      await message.save();
      res.status(201).json({
        status: "success",
        data: message
      });
      console.log("message sent!!!");
    } catch (error) {
      res.status(401).json({
        status: "fail",
        error: error.message
      });
    }
  }

  //get single message
  static async getSingleMessage(req, res) {
    try {
      const singleMessage = await _messageModel.default.findById(req.params.id);
      if (!singleMessage) {
        res.status(404).json({
          status: "fail",
          message: "message not found !!!"
        });
        return;
      }
      res.status(200).json({
        status: "success",
        data: singleMessage
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        error: error.message
      });
    }
  }

  //get all messages
  static async getAllMessages(req, res) {
    try {
      const messages = await _messageModel.default.find();
      res.status(200).json({
        status: "success",
        data: messages
      });
    } catch (error) {
      res.status(404).json(error.message);
    }
  }
}
var _default = messageController;
exports.default = _default;