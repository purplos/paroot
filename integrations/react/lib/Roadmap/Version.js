"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _hexToRGB = _interopRequireDefault(require("../hexToRGB"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 1rem;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  background: ", ";\n  font-size: 0.75rem;\n  font-weight: 600;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0.75rem;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledVersion = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.released ? "rgba(".concat((0, _hexToRGB["default"])(props.primaryColor), ", 0.24)") : "rgba(".concat((0, _hexToRGB["default"])(props.textColor), ", 0.06)");
}, function (props) {
  return props.released ? "rgba(".concat((0, _hexToRGB["default"])(props.primaryColor), ", 1)") : "rgba(".concat((0, _hexToRGB["default"])(props.textColor), ", 1)");
});

var Version = function Version(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/_react["default"].createElement(StyledVersion, props, children);
};

var _default = Version;
exports["default"] = _default;