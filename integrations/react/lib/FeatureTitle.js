"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var style = {
  fontWeight: '600',
  fontSize: '1.125rem',
  lineHeight: '1.2',
  maxWidth: 'calc(100% - 3rem)',
  margin: '0',
  flex: '1 auto'
};

var FeatureTitle = function FeatureTitle(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("h2", {
    style: style
  }, children);
};

var _default = FeatureTitle;
exports["default"] = _default;