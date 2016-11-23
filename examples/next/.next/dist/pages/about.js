'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/bel/Talks/act-and-react-fast/examples/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _Navigation = require('../components/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Navigation2.default, null),
    _react2.default.createElement(
      'h1',
      null,
      ' About '
    )
  );
};