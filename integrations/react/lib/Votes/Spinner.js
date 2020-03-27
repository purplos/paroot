"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 1rem;\n  height: 1rem;\n\n  position: relative;\n\n  &::before,\n  &::after {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: ", ";\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    -webkit-animation: sk-bounce 2s infinite ease-in-out;\n    animation: sk-bounce 2s infinite ease-in-out;\n  }\n\n  &::after {\n    -webkit-animation-delay: -1s;\n    animation-delay: -1s;\n  }\n\n  @-webkit-keyframes sk-bounce {\n    0%,\n    100% {\n      -webkit-transform: scale(0);\n    }\n    50% {\n      -webkit-transform: scale(1);\n    }\n  }\n\n  @keyframes sk-bounce {\n    0%,\n    100% {\n      transform: scale(0);\n      -webkit-transform: scale(0);\n    }\n    50% {\n      transform: scale(1);\n      -webkit-transform: scale(1);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.color;
});

exports["default"] = _default;