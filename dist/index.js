"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _dBase = _interopRequireDefault(require("./database/dBase"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _documentations = _interopRequireDefault(require("./helpers/documentations"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _messageRoute = _interopRequireDefault(require("./Routes/messageRoute"));
var _blogRoute = _interopRequireDefault(require("./Routes/blogRoute"));
var _userRoute = _interopRequireDefault(require("./Routes/userRoute"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
_dotenv.default.config();
const port = process.env.PORT || 5000;
(0, _dBase.default)();
app.listen(port, () => {
  console.log("The app is listening on : " + port);
});
app.use("/documentations", _swaggerUiExpress.default.serve);
app.use("/documentations", _swaggerUiExpress.default.setup(_documentations.default));
app.use("/api", _messageRoute.default);
app.use("/api", _blogRoute.default);
app.use("/images", _express.default.static("images"));
app.use('/api', _userRoute.default);
var _default = app;
exports.default = _default;