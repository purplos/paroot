"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var style = {
  fontWeight: 'normal',
  fontSize: '0.875rem',
  lineHeight: '1.2'
};

var FeatureDescription = function FeatureDescription(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("p", {
    style: style
  }, children);
};

var _default = FeatureDescription;
exports["default"] = _default;