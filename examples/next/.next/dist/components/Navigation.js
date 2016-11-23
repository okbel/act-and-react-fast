'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _React = require('React');

var _React2 = _interopRequireDefault(_React);

var _link = require('/Users/bel/Talks/act-and-react-fast/examples/next/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _React2.default.createElement(
    'nav',
    null,
    _React2.default.createElement(
      _link2.default,
      { href: '/about' },
      'About'
    ),
    _React2.default.createElement('br', null),
    _React2.default.createElement(
      _link2.default,
      { href: '/' },
      'Home'
    ),
    _React2.default.createElement('br', null),
    _React2.default.createElement(
      _link2.default,
      { href: '/info' },
      'Info'
    )
  );
};