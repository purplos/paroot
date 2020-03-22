"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FirebaseManager = function FirebaseManager(db, auth, config) {
  var _this = this;

  _classCallCheck(this, FirebaseManager);

  _defineProperty(this, "user", null);

  _defineProperty(this, "votes", []);

  _defineProperty(this, "onAuthChanged", function () {});

  _defineProperty(this, "onVotesChanged", function () {});

  _defineProperty(this, "setupAuthListener", function () {
    return _this.auth.onAuthStateChanged(function (user) {
      _this.user = user ? user : null;

      _this.onAuthChanged(_this.user);
    });
  });

  _defineProperty(this, "signInAnonymously", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _this.auth.signInAnonymously();

          case 3:
            _context.next = 8;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            console.log('Sign in error: ', _context.t0);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  })));

  _defineProperty(this, "setupRealtimeListener", function () {
    var votesRef = _this.db.collection("".concat(_this.config.name, "_votes"));

    return votesRef.onSnapshot(function (snapshot) {
      snapshot.docChanges().forEach(function (change) {
        var doc = change.doc;

        if (change.type === 'added') {
          var data = _objectSpread({}, doc.data(), {
            id: doc.id
          });

          _this.votes = [].concat(_toConsumableArray(_this.votes), [data]);
        }

        if (change.type === 'modified') {
          var id = doc.id;
          _this.votes = _this.votes.map(function (votable) {
            if (votable.id !== id) return votable;
            return _objectSpread({}, doc.data(), {
              id: doc.id
            });
          });
        }

        if (change.type === 'removed') {
          var _id = doc.id;
          _this.votes = _this.votes.filter(function (votable) {
            return votable.id !== _id;
          });
        }
      });

      _this.onVotesChanged(_this.votes);
    });
  });

  _defineProperty(this, "setupVotes", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _this.unsubAuth = _this.setupAuthListener();
            _context2.next = 3;
            return _this.signInAnonymously();

          case 3:
            _this.unsubRealtime = _this.setupRealtimeListener();
            return _context2.abrupt("return", _this.teardownVotes);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));

  _defineProperty(this, "teardownVotes", function () {
    _this.unsubAuth && _this.unsubAuth();
    _this.unsubAuth = null;
    _this.unsubRealtime && _this.unsubRealtime();
    _this.unsubRealtime = null;
  });

  _defineProperty(this, "toggleVote", function (id, votes, uid) {
    _this.db.runTransaction( /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(transaction) {
        var docRef, latestDoc, latestVotes, _votes, _votes2;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                docRef = _this.db.collection("".concat(_this.config.name, "_votes")).doc(id);
                _context3.prev = 1;
                _context3.next = 4;
                return transaction.get(docRef);

              case 4:
                latestDoc = _context3.sent;

                if (latestDoc.exists) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return");

              case 7:
                latestVotes = latestDoc.data().votes;

                if (!votes.includes(uid)) {
                  _context3.next = 15;
                  break;
                }

                if (latestVotes.includes(uid)) {
                  _context3.next = 11;
                  break;
                }

                return _context3.abrupt("return");

              case 11:
                _votes = latestVotes.filter(function (vote) {
                  return vote !== uid;
                });
                transaction.update(docRef, {
                  votes: _votes
                });
                _context3.next = 19;
                break;

              case 15:
                if (!latestVotes.includes(uid)) {
                  _context3.next = 17;
                  break;
                }

                return _context3.abrupt("return");

              case 17:
                _votes2 = [].concat(_toConsumableArray(latestVotes), [uid]);
                transaction.update(docRef, {
                  votes: _votes2
                });

              case 19:
                _context3.next = 24;
                break;

              case 21:
                _context3.prev = 21;
                _context3.t0 = _context3["catch"](1);
                console.log('Transaction error: ', _context3.t0);

              case 24:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 21]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());
  });

  this.db = db;
  this.auth = auth;
  this.config = config;
};

var _default = FirebaseManager;
exports["default"] = _default;