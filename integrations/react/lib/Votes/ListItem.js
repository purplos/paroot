"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FeatureDescription = _interopRequireDefault(require("../FeatureDescription"));

var _FeatureTitle = _interopRequireDefault(require("../FeatureTitle"));

var _hexToRGB = _interopRequireDefault(require("../hexToRGB"));

var _UpvoteButton = _interopRequireDefault(require("./UpvoteButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.25rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: 1px solid rgba(", ", 0.16);\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  padding-right: 1.25rem;\n  padding-bottom: 0.75rem;\n  padding-top: 1rem;\n  background: ", ";\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Li = _styledComponents["default"].li(_templateObject(), function (props) {
  return (0, _hexToRGB["default"])(props.textColor);
}, function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.textColor;
});

var Headerbar = _styledComponents["default"].div(_templateObject2());

var ListItem = (0, _react.forwardRef)(function (_ref, ref) {
  var item = _ref.item,
      user = _ref.user,
      onVote = _ref.onVote,
      colors = _ref.colors;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      expandDescription = _useState2[0],
      setExpand = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(Li, {
    ref: ref,
    textColor: colors.text,
    backgroundColor: colors.background
  }, /*#__PURE__*/_react["default"].createElement(Headerbar, null, /*#__PURE__*/_react["default"].createElement(_FeatureTitle["default"], null, item.title), /*#__PURE__*/_react["default"].createElement(_UpvoteButton["default"], {
    loading: item.loading,
    votes: item.votes.length,
    colors: colors,
    onClick: function onClick() {
      return onVote(item.id, item.votes);
    },
    active: item.votes.includes(user.uid)
  })), /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return setExpand(!expandDescription);
    }
  }, /*#__PURE__*/_react["default"].createElement(_FeatureDescription["default"], null, item.description)));
});
var _default = ListItem;
exports["default"] = _default;