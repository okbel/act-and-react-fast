'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('/Users/bel/Desktop/Talks/act-and-react-fast/examples/next/node_modules/babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _button;

var _react = require('/Users/bel/Desktop/Talks/act-and-react-fast/examples/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _link = require('/Users/bel/Desktop/Talks/act-and-react-fast/examples/next/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: styles.containerStyle },
    _react2.default.createElement(
      'h1',
      null,
      'Github search'
    ),
    _react2.default.createElement(
      _link2.default,
      { href: '/github?user=okbel' },
      _react2.default.createElement(
        'a',
        { style: styles.button },
        'Buscar'
      )
    )
  );
};

var styles = {
  containerStyle: {
    paddingTop: '20px',
    width: '500px',
    margin: '0 auto',
    fontFamily: 'Menlo, Monaco, Lucida Console, Courier New, monospace, serif'
  },
  button: (_button = {
    fontFamily: 'Helvetica, Arial',
    padding: '5px 30px',
    borderRadius: '3px',
    color: '#fff',
    textShadow: '0 -1px 0 rgba(0,0,0,0.15)',
    backgroundColor: '#6cc644',
    backgroundImage: '-webkit-linear-gradient(#91dd70, #55ae2e)'
  }, (0, _defineProperty3.default)(_button, 'backgroundImage', 'linear-gradient(#91dd70, #55ae2e)'), (0, _defineProperty3.default)(_button, 'border', '1px solid #5aad35'), (0, _defineProperty3.default)(_button, 'textDecoration', 'none'), _button)
};
    if (module.hot) {
      module.hot.accept()

      var Component = module.exports.default || module.exports
      Component.__route = "/"

      if (module.hot.status() !== 'idle') {
        var components = next.router.components
        for (var r in components) {
          if (!components.hasOwnProperty(r)) continue

          if (components[r].Component.__route === "/") {
            next.router.update(r, Component)
          }
        }
      }
    }
  