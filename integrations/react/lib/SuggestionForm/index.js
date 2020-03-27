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

var _Form = _interopRequireDefault(require("./Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 1.5rem 2rem;\n  padding-bottom: 2rem;\n  background: ", ";\n  box-shadow: 0px -4px 16px rgba(0, 0, 0, 0.06), 0px -2px 4px rgba(0, 0, 0, 0.06);\n  font-size: 0.875rem;\n  font-weight: 600;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n\n  & svg {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n\n  &[data-expanded='true'] svg {\n    transform: rotate(180deg);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  pointer-events: ", ";\n  opacity: ", ";\n  background: rgba(0, 0, 0, 0.2);\n  will-change: opacity;\n  transition: opacity 0.1s ease;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

var Backdrop = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.expanded ? 'auto' : 'none';
}, function (props) {
  return props.expanded ? 1 : 0;
});

var ExpandableArea = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.colors.background;
}, function (props) {
  return props.colors.text;
}, function (props) {
  return props.colors.primary;
});

var SuggestionForm = function SuggestionForm(_ref) {
  var db = _ref.db,
      auth = _ref.auth,
      _ref$config = _ref.config,
      userConfig = _ref$config === void 0 ? {} : _ref$config,
      _ref$bgColor = _ref.bgColor,
      background = _ref$bgColor === void 0 ? _defaultConfig["default"].colors.background : _ref$bgColor,
      _ref$textColor = _ref.textColor,
      text = _ref$textColor === void 0 ? _defaultConfig["default"].colors.text : _ref$textColor,
      _ref$primaryColor = _ref.primaryColor,
      primary = _ref$primaryColor === void 0 ? _defaultConfig["default"].colors.primary : _ref$primaryColor;

  var config = _objectSpread({}, _defaultConfig["default"], {}, userConfig);

  var colors = {
    background: background,
    text: text,
    primary: primary
  };
  var manager = new _FirebaseManager["default"](db, auth, config);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var handleSubmit = function handleSubmit(title, description) {
    manager.handleSuggestionForm(title, description);
    setExpanded(false);
  };

  return /*#__PURE__*/_react["default"].createElement(Container, null, /*#__PURE__*/_react["default"].createElement(Backdrop, {
    expanded: expanded,
    onClick: function onClick() {
      return setExpanded(false);
    }
  }), /*#__PURE__*/_react["default"].createElement(ExpandableArea, {
    colors: colors,
    onClick: function onClick() {
      return setExpanded(!expanded);
    },
    "data-expanded": expanded
  }, "Send a suggestion", /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"
  }))), expanded && /*#__PURE__*/_react["default"].createElement(_Form["default"], {
    onSubmit: handleSubmit,
    colors: colors
  }));
};

var _default = SuggestionForm;
exports["default"] = _default;