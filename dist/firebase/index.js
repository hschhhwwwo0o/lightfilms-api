"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/database");

var _firebase = _interopRequireDefault(require("./firebase.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _app.default.initializeApp(_firebase.default).database();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maXJlYmFzZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImluaXRpYWxpemVBcHAiLCJmaXJlYmFzZUNvbmZpZyIsImRhdGFiYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7ZUFFZUEsYUFBU0MsYUFBVCxDQUF1QkMsaUJBQXZCLEVBQXVDQyxRQUF2QyxFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcclxuaW1wb3J0IGZpcmViYXNlQ29uZmlnIGZyb20gXCIuL2ZpcmViYXNlLmNvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykuZGF0YWJhc2UoKTsiXX0=