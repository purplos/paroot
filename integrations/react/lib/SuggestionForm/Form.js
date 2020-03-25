"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _hexToRGB = _interopRequireDefault(require("../hexToRGB"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  display: flex;\n  flex-direction: column;\n  padding: 1.25rem;\n  padding-top: 0;\n  position: relative;\n  max-width: 40rem;\n  margin: 0 auto;\n  color: ", ";\n\n  & input,\n  & textarea {\n    width: 100%;\n    padding: 0.75rem;\n    background: rgba(", ", 0.06);\n    border: none;\n    outline: none;\n    margin-bottom: 0.5rem;\n    border-radius: 0.25rem;\n    color: ", ";\n  }\n\n  & textarea {\n    min-height: 8rem;\n  }\n\n  & button {\n    border: none;\n    outline: none;\n    background: transparent;\n    padding: 0.75rem 1rem;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',\n      'Helvetica Neue', sans-serif;\n    font-size: 0.875;\n    border-radius: 0.25rem;\n    font-weight: 500;\n    cursor: pointer;\n    color: ", ";\n  }\n\n  & button:hover,\n  & button:active {\n    background: rgba(", ", 0.12);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledForm = _styledComponents["default"].form(_templateObject(), function (props) {
  return props.colors.background;
}, function (props) {
  return props.colors.text;
}, function (props) {
  return (0, _hexToRGB["default"])(props.colors.text);
}, function (props) {
  return props.colors.text;
}, function (props) {
  return props.colors.text;
}, function (props) {
  return (0, _hexToRGB["default"])(props.colors.primary);
});

var Form = function Form(_ref) {
  var onSubmit = _ref.onSubmit,
      colors = _ref.colors;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      description = _useState4[0],
      setDescription = _useState4[1];

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    if (title.length < 1) return;
    setTitle('');
    setDescription('');
    onSubmit(title, description);
  };

  return /*#__PURE__*/_react["default"].createElement(StyledForm, {
    onSubmit: handleSubmit,
    colors: colors
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Title",
    value: title,
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      return setTitle(target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement("textarea", {
    placeholder: "Description",
    value: description,
    onChange: function onChange(_ref3) {
      var target = _ref3.target;
      return setDescription(target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit"
  }, "Send suggestion"));
};

var _default = Form;
exports["default"] = _default;