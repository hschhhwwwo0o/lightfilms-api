"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/database");

var _firebase = _interopRequireDefault(require("./firebase.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Firebase
// Firebase config
// Initialize Firebase
_app.default.initializeApp(_firebase.default);

const database = _app.default.database();

var _default = database;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maXJlYmFzZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImluaXRpYWxpemVBcHAiLCJmaXJlYmFzZUNvbmZpZyIsImRhdGFiYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7QUFMQTtBQUlBO0FBR0E7QUFDQUEsYUFBU0MsYUFBVCxDQUF1QkMsaUJBQXZCOztBQUNBLE1BQU1DLFFBQVEsR0FBR0gsYUFBU0csUUFBVCxFQUFqQjs7ZUFFZUEsUSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZpcmViYXNlXHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2RhdGFiYXNlXCI7XHJcblxyXG4vLyBGaXJlYmFzZSBjb25maWdcclxuaW1wb3J0IGZpcmViYXNlQ29uZmlnIGZyb20gXCIuL2ZpcmViYXNlLmNvbmZpZ1wiO1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5maXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuY29uc3QgZGF0YWJhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGF0YWJhc2U7Il19