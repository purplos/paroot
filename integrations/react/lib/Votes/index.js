"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _FirebaseManager = _interopRequireDefault(require("../FirebaseManager"));

var _List = _interopRequireDefault(require("./List"));

var _ListItem = _interopRequireDefault(require("./ListItem"));

var _defaultConfig = _interopRequireDefault(require("../defaultConfig"));

var _reactFlipMove = _interopRequireDefault(require("react-flip-move"));

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

var Votes = function Votes(_ref) {
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

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      votes = _useState2[0],
      setVotes = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      user = _useState4[0],
      setUser = _useState4[1];

  var setLoadingById = function setLoadingById(id) {
    setVotes(votes.map(function (vote) {
      return vote.id === id ? _objectSpread({}, vote, {
        loading: true
      }) : vote;
    }));
  };

  var handleVote = function handleVote(id, votes) {
    setLoadingById(id);
    manager.toggleVote(id, votes, user.uid);
  };

  (0, _react.useEffect)(function () {
    var unsubAuth = manager.setupAuthListener();
    manager.signInAnonymously();
    var unsubRealtime;

    manager.onAuthChanged = function (user) {
      if (user) {
        unsubRealtime = manager.setupRealtimeListener();
      } else {
        if (unsubRealtime) {
          unsubRealtime();
        }
      }

      setUser(user);
    };

    manager.onVotesChanged = function (votes) {
      return setVotes(votes);
    };

    return function () {
      unsubAuth();
      unsubRealtime();
    };
  }, []);
  var sorted = votes.sort(function (a, b) {
    return b.votes.length - a.votes.length;
  });
  if (!user) return 'Loading user...';
  return /*#__PURE__*/_react["default"].createElement(_List["default"], {
    backgroundColor: colors.background
  }, /*#__PURE__*/_react["default"].createElement(_reactFlipMove["default"], null, sorted.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      key: item.id,
      item: item,
      manager: manager,
      user: user,
      colors: colors,
      onVote: handleVote
    });
  })));
};

var _default = Votes;
exports["default"] = _default;