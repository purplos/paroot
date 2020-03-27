"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _hexToRGB = _interopRequireDefault(require("../hexToRGB"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 1rem;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  background: ", ";\n\n  & button {\n    background: transparent;\n    padding: 0rem 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 2rem;\n    border-radius: 1rem;\n    line-height: 0;\n    border: none;\n    outline: none;\n    margin-left: 0.5rem;\n    font-size: 0.875rem;\n    cursor: pointer;\n    color: ", ";\n  }\n\n  & button:hover {\n    color: rgba(", ", 0.87);\n  }\n\n  & button[data-active='true'] {\n    color: ", ";\n    font-weight: 500;\n  }\n\n  & button svg {\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Nav = _styledComponents["default"].nav(_templateObject(), function (props) {
  return props.bgColor;
}, function (props) {
  return props.textColor;
}, function (props) {
  return (0, _hexToRGB["default"])(props.primaryColor);
}, function (props) {
  return props.primaryColor;
});

var Tabs = function Tabs(_ref) {
  var onTabChange = _ref.onTabChange,
      currentTab = _ref.currentTab,
      textColor = _ref.textColor,
      bgColor = _ref.bgColor,
      primaryColor = _ref.primaryColor;
  var colors = {
    textColor: textColor,
    bgColor: bgColor,
    primaryColor: primaryColor
  };
  return /*#__PURE__*/_react["default"].createElement(Nav, colors, /*#__PURE__*/_react["default"].createElement("button", {
    "data-active": currentTab === 'feedback',
    onClick: function onClick() {
      return onTabChange('feedback');
    }
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M22,1H15a2.44,2.44,0,0,0-2.41,2l-.92,5.05a2.44,2.44,0,0,0,.53,2,2.47,2.47,0,0,0,1.88.88H17l-.25.66A3.26,3.26,0,0,0,19.75,16a1,1,0,0,0,.92-.59l2.24-5.06A1,1,0,0,0,23,10V2A1,1,0,0,0,22,1ZM21,9.73l-1.83,4.13a1.33,1.33,0,0,1-.45-.4,1.23,1.23,0,0,1-.14-1.16l.38-1a1.68,1.68,0,0,0-.2-1.58A1.7,1.7,0,0,0,17.35,9H14.06a.46.46,0,0,1-.35-.16.5.5,0,0,1-.09-.37l.92-5A.44.44,0,0,1,15,3h6ZM9.94,13.05H7.05l.25-.66A3.26,3.26,0,0,0,4.25,8a1,1,0,0,0-.92.59L1.09,13.65a1,1,0,0,0-.09.4v8a1,1,0,0,0,1,1H9a2.44,2.44,0,0,0,2.41-2l.92-5a2.44,2.44,0,0,0-.53-2A2.47,2.47,0,0,0,9.94,13.05Zm-.48,7.58A.44.44,0,0,1,9,21H3V14.27l1.83-4.13a1.33,1.33,0,0,1,.45.4,1.23,1.23,0,0,1,.14,1.16l-.38,1a1.68,1.68,0,0,0,.2,1.58,1.7,1.7,0,0,0,1.41.74H9.94a.46.46,0,0,1,.35.16.5.5,0,0,1,.09.37Z"
  })), "Feedback"), /*#__PURE__*/_react["default"].createElement("button", {
    "data-active": currentTab === 'roadmap',
    onClick: function onClick() {
      return onTabChange('roadmap');
    }
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "data-name": "Layer 1",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M21.78,11.88l-2-2.5A1,1,0,0,0,19,9H13V3a1,1,0,0,0-2,0V4H5a1,1,0,0,0-.78.38l-2,2.5a1,1,0,0,0,0,1.24l2,2.5A1,1,0,0,0,5,11h6v9H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2H13V16h6a1,1,0,0,0,.78-.38l2-2.5A1,1,0,0,0,21.78,11.88ZM11,9H5.48L4.28,7.5,5.48,6H11Zm7.52,5H13V11h5.52l1.2,1.5Z"
  })), "Roadmap"));
};

var _default = Tabs;
exports["default"] = _default;