"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FeatureDescription = _interopRequireDefault(require("../FeatureDescription"));

var _FeatureTitle = _interopRequireDefault(require("../FeatureTitle"));

var _hexToRGB = _interopRequireDefault(require("../hexToRGB"));

var _Date = _interopRequireDefault(require("./Date"));

var _Version = _interopRequireDefault(require("./Version"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  color: ", ";\n\n  .heading {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    padding-right: 1rem;\n    cursor: pointer;\n    transition: all 0.2s ease;\n  }\n\n  .heading:hover {\n    background: rgba(", ", 0.06);\n  }\n\n  .separator {\n    width: 1rem;\n    height: 1rem;\n    border-radius: 1rem;\n    border: 2px solid rgba(", ", 0.2);\n    transform: translateX(1px);\n  }\n\n  .heading p {\n    font-size: 0.75rem;\n    text-align: right;\n    flex: 1 auto;\n  }\n\n  .heading svg {\n    height: 1.5rem;\n    width: 1.5rem;\n    transform: rotate(90deg);\n  }\n\n  & ul {\n    width: calc(100% - 3.5rem);\n    border-left: 2px solid rgba(", ", 0.2);\n    padding: 1rem;\n    list-style: none;\n  }\n\n  & li h2 {\n    font-weight: 600;\n    font-size: 0.75rem;\n    line-height: 1.2;\n    max-width: calc(100% - 3rem);\n    margin: 0;\n    flex: 1 auto;\n    margin-bottom: 0.125rem;\n  }\n\n  .description {\n    width: 100%;\n  }\n\n  & li p {\n    font-weight: normal;\n    font-size: 0.75rem;\n    line-height: 1.2;\n    margin-bottom: 0.75rem;\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledMilestone = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.textColor;
}, function (props) {
  return (0, _hexToRGB["default"])(props.textColor);
}, function (props) {
  return (0, _hexToRGB["default"])(props.textColor);
}, function (props) {
  return (0, _hexToRGB["default"])(props.textColor);
});

var Milestone = function Milestone(_ref) {
  var milestone = _ref.milestone,
      onShowDetail = _ref.onShowDetail,
      textColor = _ref.textColor,
      bgColor = _ref.bgColor,
      primaryColor = _ref.primaryColor;
  var colors = {
    textColor: textColor,
    bgColor: bgColor,
    primaryColor: primaryColor
  };
  return /*#__PURE__*/_react["default"].createElement(StyledMilestone, colors, /*#__PURE__*/_react["default"].createElement("div", {
    className: "heading",
    onClick: function onClick() {
      return onShowDetail(milestone);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Date["default"], {
    style: {
      width: '3rem',
      padding: '0.25rem',
      paddingLeft: '0.5rem'
    }
  }, milestone.date.toDate().toDateString()), /*#__PURE__*/_react["default"].createElement("div", {
    className: "separator"
  }), /*#__PURE__*/_react["default"].createElement(_Version["default"], _extends({
    released: milestone.released
  }, colors), milestone.version), /*#__PURE__*/_react["default"].createElement("p", null, milestone.features.length, " new features/bugfixes"), /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"
  }))), /*#__PURE__*/_react["default"].createElement("ul", null, milestone.features.map(function (feature) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: feature.title
    }, /*#__PURE__*/_react["default"].createElement(_FeatureTitle["default"], null, feature.title), /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }, /*#__PURE__*/_react["default"].createElement(_FeatureDescription["default"], null, feature.description)));
  })));
};

var _default = Milestone;
exports["default"] = _default;