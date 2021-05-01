"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/database");

var _firebase = _interopRequireDefault(require("./firebase.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app.default.initializeApp(_firebase.default);

var _default = _app.default.database();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maXJlYmFzZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImluaXRpYWxpemVBcHAiLCJmaXJlYmFzZUNvbmZpZyIsImRhdGFiYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7QUFFQUEsYUFBU0MsYUFBVCxDQUF1QkMsaUJBQXZCOztlQUVlRixhQUFTRyxRQUFULEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xyXG5cclxuaW1wb3J0IGZpcmViYXNlQ29uZmlnIGZyb20gXCIuL2ZpcmViYXNlLmNvbmZpZ1wiO1xyXG5cclxuZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZS5kYXRhYmFzZSgpOyJdfQ==