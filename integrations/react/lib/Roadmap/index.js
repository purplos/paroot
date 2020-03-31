"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _defaultConfig = _interopRequireDefault(require("../defaultConfig"));

var _FirebaseManager = _interopRequireDefault(require("../FirebaseManager"));

var _hexToRGB = _interopRequireDefault(require("../hexToRGB"));

var _Detail = _interopRequireDefault(require("./Detail"));

var _Milestone = _interopRequireDefault(require("./Milestone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  overflow: auto;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-end;\n  background: ", ";\n\n  .padding {\n    width: calc(100% - 3.5rem);\n    border-left: 2px solid rgba(", ", 0.2);\n    height: 2rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.bgColor;
}, function (props) {
  return (0, _hexToRGB["default"])(props.textColor);
});

var Roadmap = function Roadmap(_ref) {
  var db = _ref.db,
      auth = _ref.auth,
      _ref$bgColor = _ref.bgColor,
      background = _ref$bgColor === void 0 ? _defaultConfig["default"].colors.background : _ref$bgColor,
      _ref$textColor = _ref.textColor,
      text = _ref$textColor === void 0 ? _defaultConfig["default"].colors.text : _ref$textColor,
      _ref$primaryColor = _ref.primaryColor,
      primary = _ref$primaryColor === void 0 ? _defaultConfig["default"].colors.primary : _ref$primaryColor;
  var manager = new _FirebaseManager["default"](db, auth);

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      roadmap = _useState2[0],
      setRoadmap = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showDetail = _useState4[0],
      setShowDetail = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      currentMilestone = _useState6[0],
      setCurrentMilestone = _useState6[1];

  var onShowDetail = function onShowDetail(milestone) {
    setShowDetail(true);
    setCurrentMilestone(milestone);
  };

  var onClose = function onClose() {
    setShowDetail(false);
  };

  var fetchMilestones = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var milestones;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return manager.fetchRoadmap();

            case 2:
              milestones = _context.sent;
              setRoadmap(milestones);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchMilestones() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    fetchMilestones();
  }, []);
  var sortedRoadmap = roadmap.sort(function (a, b) {
    return b.date.toDate() - a.date.toDate();
  });
  return /*#__PURE__*/_react["default"].createElement(Container, {
    textColor: text,
    bgColor: background,
    primaryColor: primary
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "padding"
  }), sortedRoadmap.map(function (milestone) {
    return /*#__PURE__*/_react["default"].createElement(_Milestone["default"], {
      key: milestone.id,
      milestone: milestone,
      onShowDetail: onShowDetail,
      textColor: text,
      bgColor: background,
      primaryColor: primary
    });
  }), showDetail && currentMilestone && /*#__PURE__*/_react["default"].createElement(_Detail["default"], {
    currentMilestone: currentMilestone,
    onClose: onClose,
    textColor: text,
    bgColor: background,
    primaryColor: primary
  }));
};

var _default = Roadmap;
exports["default"] = _default;