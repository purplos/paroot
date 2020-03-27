"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FeatureDescription = _interopRequireDefault(require("../FeatureDescription"));

var _FeatureTitle = _interopRequireDefault(require("../FeatureTitle"));

var _Date = _interopRequireDefault(require("./Date"));

var _Version = _interopRequireDefault(require("./Version"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: ", ";\n  padding: 2rem;\n  color: ", ";\n\n  .detailHeader {\n    display: flex;\n    align-items: center;\n  }\n\n  .detailHeader p {\n    font-size: 0.875rem;\n  }\n\n  .detailHeader .milestone {\n    margin: 0;\n    margin-right: 0.5rem;\n  }\n\n  .detailDate {\n    font-size: 0.625rem;\n    opacity: 0.667;\n    margin: 0.5rem 0;\n  }\n\n  .detailFeature {\n    list-style: none;\n  }\n\n  .detailFeature li {\n    margin-bottom: 1rem;\n  }\n\n  .detailFeature h2 {\n    font-size: 1.125rem;\n    font-weight: 600;\n    margin-bottom: 0.25rem;\n  }\n\n  .detailFeature p {\n    font-size: 0.875rem;\n  }\n\n  .closeButton {\n    position: absolute;\n    top: 2rem;\n    right: 2rem;\n    background: transparent;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    color: ", ";\n    opacity: 0.67;\n  }\n\n  .closeButton:hover {\n    opacity: 1;\n  }\n\n  .closeButton svg {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDetail = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.bgColor;
}, function (props) {
  return props.textColor;
}, function (props) {
  return props.textColor;
});

var Detail = function Detail(_ref) {
  var currentMilestone = _ref.currentMilestone,
      onClose = _ref.onClose,
      textColor = _ref.textColor,
      bgColor = _ref.bgColor,
      primaryColor = _ref.primaryColor;
  var colors = {
    textColor: textColor,
    bgColor: bgColor,
    primaryColor: primaryColor
  };
  return /*#__PURE__*/_react["default"].createElement(StyledDetail, colors, /*#__PURE__*/_react["default"].createElement("div", {
    className: "detailHeader"
  }, /*#__PURE__*/_react["default"].createElement(_Version["default"], _extends({
    style: {
      marginLeft: 0
    },
    released: currentMilestone.released
  }, colors), currentMilestone.version), /*#__PURE__*/_react["default"].createElement("p", {
    className: "releaseInfo"
  }, currentMilestone.released ? 'Released' : 'Upcoming')), /*#__PURE__*/_react["default"].createElement(_Date["default"], {
    style: {
      padding: '0.5rem 0'
    }
  }, currentMilestone.date.toDate().toDateString()), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "detailFeature"
  }, currentMilestone.features.map(function (feature) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: feature.title
    }, /*#__PURE__*/_react["default"].createElement(_FeatureTitle["default"], null, feature.title), /*#__PURE__*/_react["default"].createElement(_FeatureDescription["default"], null, feature.description));
  })), /*#__PURE__*/_react["default"].createElement("button", {
    className: "closeButton",
    onClick: onClose
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
  }))));
};

var _default = Detail;
exports["default"] = _default;