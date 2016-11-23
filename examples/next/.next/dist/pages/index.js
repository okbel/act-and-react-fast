'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _React = require('React');

var _React2 = _interopRequireDefault(_React);

var _Navigation = require('../components/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _React2.default.createElement(
    'div',
    null,
    _React2.default.createElement(_Navigation2.default, null),
    _React2.default.createElement(
      'h1',
      null,
      'This is index'
    )
  );
};