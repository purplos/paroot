"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _hexToRGB = _interopRequireDefault(require("../hexToRGB"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 1rem;\n  height: 1rem;\n\n  position: relative;\n\n  &::before,\n  &::after {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: ", ";\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    -webkit-animation: sk-bounce 2s infinite ease-in-out;\n    animation: sk-bounce 2s infinite ease-in-out;\n  }\n\n  &::after {\n    -webkit-animation-delay: -1s;\n    animation-delay: -1s;\n  }\n\n  @-webkit-keyframes sk-bounce {\n    0%,\n    100% {\n      -webkit-transform: scale(0);\n    }\n    50% {\n      -webkit-transform: scale(1);\n    }\n  }\n\n  @keyframes sk-bounce {\n    0%,\n    100% {\n      transform: scale(0);\n      -webkit-transform: scale(0);\n    }\n    50% {\n      transform: scale(1);\n      -webkit-transform: scale(1);\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  flex: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.875rem;\n  line-height: 1;\n  height: 2rem;\n  min-width: 2rem;\n  color: ", ";\n\n  &:hover {\n    color: rgba(", ", 0.87);\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  svg {\n    width: 1.5rem;\n    height: 1.5rem;\n    transform: translatex(-0.125rem) scale(0.95);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents["default"].button(_templateObject(), function (props) {
  return props.active ? props.activeColor : props.textColor;
}, function (props) {
  return (0, _hexToRGB["default"])(props.activeColor);
});

var Spinner = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.color;
});

var UpvoteButton = function UpvoteButton(_ref) {
  var onClick = _ref.onClick,
      active = _ref.active,
      loading = _ref.loading,
      _ref$votes = _ref.votes,
      votes = _ref$votes === void 0 ? 0 : _ref$votes,
      colors = _ref.colors,
      props = _objectWithoutProperties(_ref, ["onClick", "active", "loading", "votes", "colors"]);

  return /*#__PURE__*/_react["default"].createElement(Button, _extends({
    active: active,
    activeColor: colors.primary,
    textColor: colors.text,
    onClick: onClick,
    "aria-label": active ? 'Unvote' : 'Vote'
  }, props), loading ? /*#__PURE__*/_react["default"].createElement(Spinner, {
    color: colors.primary
  }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, votes, /*#__PURE__*/_react["default"].createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M17.71,11.29l-5-5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-5,5a1,1,0,0,0,1.42,1.42L11,9.41V17a1,1,0,0,0,2,0V9.41l3.29,3.3a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,11.29Z"
  }))));
};

var _default = UpvoteButton;
exports["default"] = _default;