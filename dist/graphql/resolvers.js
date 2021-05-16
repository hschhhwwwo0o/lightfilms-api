"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _firebase = _interopRequireDefault(require("../firebase/firebase.request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Query: {
    getAllFilms: () => {
      return (0, _firebase.default)("films");
    },
    getAllPersons: () => {
      return (0, _firebase.default)("persons");
    },
    getProducers: () => {
      return (0, _firebase.default)("persons", "filter", "producer");
    },
    getActers: () => {
      return (0, _firebase.default)("persons", "filter", "acter");
    },
    getPerson: (_, {
      id
    }) => {
      return (0, _firebase.default)(`/persons/${id}`);
    },
    getFilm: (_, {
      id
    }) => {
      return (0, _firebase.default)(`/films/${id}`);
    },
    getAllTimes: () => {
      return (0, _firebase.default)("times");
    },
    getTime: (_, {
      id
    }) => {
      return (0, _firebase.default)(`/times/${id}`);
    }
  }
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsL3Jlc29sdmVycy5qcyJdLCJuYW1lcyI6WyJRdWVyeSIsImdldEFsbEZpbG1zIiwiZ2V0QWxsUGVyc29ucyIsImdldFByb2R1Y2VycyIsImdldEFjdGVycyIsImdldFBlcnNvbiIsIl8iLCJpZCIsImdldEZpbG0iLCJnZXRBbGxUaW1lcyIsImdldFRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUVlO0FBQ1hBLEVBQUFBLEtBQUssRUFBRTtBQUNIQyxJQUFBQSxXQUFXLEVBQUUsTUFBTTtBQUNmLGFBQU8sdUJBQWdCLE9BQWhCLENBQVA7QUFDSCxLQUhFO0FBS0hDLElBQUFBLGFBQWEsRUFBRSxNQUFNO0FBQ2pCLGFBQU8sdUJBQWdCLFNBQWhCLENBQVA7QUFDSCxLQVBFO0FBU0hDLElBQUFBLFlBQVksRUFBRSxNQUFNO0FBQ2hCLGFBQU8sdUJBQWdCLFNBQWhCLEVBQTJCLFFBQTNCLEVBQXFDLFVBQXJDLENBQVA7QUFDSCxLQVhFO0FBYUhDLElBQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2IsYUFBTyx1QkFBZ0IsU0FBaEIsRUFBMkIsUUFBM0IsRUFBcUMsT0FBckMsQ0FBUDtBQUNILEtBZkU7QUFpQkhDLElBQUFBLFNBQVMsRUFBRSxDQUFDQyxDQUFELEVBQUk7QUFBQ0MsTUFBQUE7QUFBRCxLQUFKLEtBQWE7QUFDcEIsYUFBTyx1QkFBaUIsWUFBV0EsRUFBRyxFQUEvQixDQUFQO0FBQ0gsS0FuQkU7QUFxQkhDLElBQUFBLE9BQU8sRUFBRSxDQUFDRixDQUFELEVBQUk7QUFBQ0MsTUFBQUE7QUFBRCxLQUFKLEtBQWE7QUFDbEIsYUFBTyx1QkFBaUIsVUFBU0EsRUFBRyxFQUE3QixDQUFQO0FBQ0gsS0F2QkU7QUF5QkhFLElBQUFBLFdBQVcsRUFBRSxNQUFNO0FBQ2YsYUFBTyx1QkFBZ0IsT0FBaEIsQ0FBUDtBQUNILEtBM0JFO0FBNkJIQyxJQUFBQSxPQUFPLEVBQUUsQ0FBQ0osQ0FBRCxFQUFJO0FBQUNDLE1BQUFBO0FBQUQsS0FBSixLQUFhO0FBQ2xCLGFBQU8sdUJBQWlCLFVBQVNBLEVBQUcsRUFBN0IsQ0FBUDtBQUNIO0FBL0JFO0FBREksQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZVJlcXVlc3QgZnJvbSBcIi4uL2ZpcmViYXNlL2ZpcmViYXNlLnJlcXVlc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIFF1ZXJ5OiB7XHJcbiAgICAgICAgZ2V0QWxsRmlsbXM6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpcmViYXNlUmVxdWVzdChcImZpbG1zXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICBcclxuICAgICAgICBnZXRBbGxQZXJzb25zOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaXJlYmFzZVJlcXVlc3QoXCJwZXJzb25zXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICBcclxuICAgICAgICBnZXRQcm9kdWNlcnM6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpcmViYXNlUmVxdWVzdChcInBlcnNvbnNcIiwgXCJmaWx0ZXJcIiwgXCJwcm9kdWNlclwiKTtcclxuICAgICAgICB9LFxyXG4gICAgXHJcbiAgICAgICAgZ2V0QWN0ZXJzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaXJlYmFzZVJlcXVlc3QoXCJwZXJzb25zXCIsIFwiZmlsdGVyXCIsIFwiYWN0ZXJcIik7XHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgICAgIGdldFBlcnNvbjogKF8sIHtpZH0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpcmViYXNlUmVxdWVzdChgL3BlcnNvbnMvJHtpZH1gKTtcclxuICAgICAgICB9LFxyXG4gICAgXHJcbiAgICAgICAgZ2V0RmlsbTogKF8sIHtpZH0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpcmViYXNlUmVxdWVzdChgL2ZpbG1zLyR7aWR9YCk7XHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgICAgIGdldEFsbFRpbWVzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaXJlYmFzZVJlcXVlc3QoXCJ0aW1lc1wiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGdldFRpbWU6IChfLCB7aWR9KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaXJlYmFzZVJlcXVlc3QoYC90aW1lcy8ke2lkfWApO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn0iXX0=