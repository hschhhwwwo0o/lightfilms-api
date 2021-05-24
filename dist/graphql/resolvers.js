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
      return (0, _firebase.default)("times", "find", id);
    }
  }
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsL3Jlc29sdmVycy5qcyJdLCJuYW1lcyI6WyJRdWVyeSIsImdldEFsbEZpbG1zIiwiZ2V0QWxsUGVyc29ucyIsImdldFByb2R1Y2VycyIsImdldEFjdGVycyIsImdldFBlcnNvbiIsIl8iLCJpZCIsImdldEZpbG0iLCJnZXRBbGxUaW1lcyIsImdldFRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUVlO0FBQ1hBLEVBQUFBLEtBQUssRUFBRTtBQUNIQyxJQUFBQSxXQUFXLEVBQUUsTUFBTTtBQUNmLGFBQU8sdUJBQWdCLE9BQWhCLENBQVA7QUFDSCxLQUhFO0FBS0hDLElBQUFBLGFBQWEsRUFBRSxNQUFNO0FBQ2pCLGFBQU8sdUJBQWdCLFNBQWhCLENBQVA7QUFDSCxLQVBFO0FBU0hDLElBQUFBLFlBQVksRUFBRSxNQUFNO0FBQ2hCLGFBQU8sdUJBQWdCLFNBQWhCLEVBQTJCLFFBQTNCLEVBQXFDLFVBQXJDLENBQVA7QUFDSCxLQVhFO0FBYUhDLElBQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2IsYUFBTyx1QkFBZ0IsU0FBaEIsRUFBMkIsUUFBM0IsRUFBcUMsT0FBckMsQ0FBUDtBQUNILEtBZkU7QUFpQkhDLElBQUFBLFNBQVMsRUFBRSxDQUFDQyxDQUFELEVBQUk7QUFBRUMsTUFBQUE7QUFBRixLQUFKLEtBQWU7QUFDdEIsYUFBTyx1QkFBaUIsWUFBV0EsRUFBRyxFQUEvQixDQUFQO0FBQ0gsS0FuQkU7QUFxQkhDLElBQUFBLE9BQU8sRUFBRSxDQUFDRixDQUFELEVBQUk7QUFBRUMsTUFBQUE7QUFBRixLQUFKLEtBQWU7QUFDcEIsYUFBTyx1QkFBaUIsVUFBU0EsRUFBRyxFQUE3QixDQUFQO0FBQ0gsS0F2QkU7QUF5QkhFLElBQUFBLFdBQVcsRUFBRSxNQUFNO0FBQ2YsYUFBTyx1QkFBZ0IsT0FBaEIsQ0FBUDtBQUNILEtBM0JFO0FBNkJIQyxJQUFBQSxPQUFPLEVBQUUsQ0FBQ0osQ0FBRCxFQUFJO0FBQUVDLE1BQUFBO0FBQUYsS0FBSixLQUFlO0FBQ3BCLGFBQU8sdUJBQWdCLE9BQWhCLEVBQXlCLE1BQXpCLEVBQWlDQSxFQUFqQyxDQUFQO0FBQ0g7QUEvQkU7QUFESSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlUmVxdWVzdCBmcm9tIFwiLi4vZmlyZWJhc2UvZmlyZWJhc2UucmVxdWVzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgUXVlcnk6IHtcclxuICAgICAgICBnZXRBbGxGaWxtczogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZmlyZWJhc2VSZXF1ZXN0KFwiZmlsbXNcIik7XHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgICAgIGdldEFsbFBlcnNvbnM6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpcmViYXNlUmVxdWVzdChcInBlcnNvbnNcIik7XHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgICAgIGdldFByb2R1Y2VyczogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZmlyZWJhc2VSZXF1ZXN0KFwicGVyc29uc1wiLCBcImZpbHRlclwiLCBcInByb2R1Y2VyXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICBcclxuICAgICAgICBnZXRBY3RlcnM6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpcmViYXNlUmVxdWVzdChcInBlcnNvbnNcIiwgXCJmaWx0ZXJcIiwgXCJhY3RlclwiKTtcclxuICAgICAgICB9LFxyXG4gICAgXHJcbiAgICAgICAgZ2V0UGVyc29uOiAoXywgeyBpZCB9KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaXJlYmFzZVJlcXVlc3QoYC9wZXJzb25zLyR7aWR9YCk7XHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgICAgIGdldEZpbG06IChfLCB7IGlkIH0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpcmViYXNlUmVxdWVzdChgL2ZpbG1zLyR7aWR9YCk7XHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgICAgIGdldEFsbFRpbWVzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaXJlYmFzZVJlcXVlc3QoXCJ0aW1lc1wiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGdldFRpbWU6IChfLCB7IGlkIH0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpcmViYXNlUmVxdWVzdChcInRpbWVzXCIsIFwiZmluZFwiLCBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufTsiXX0=