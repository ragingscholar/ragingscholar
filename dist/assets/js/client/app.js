'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _dog = require('../shared/dog');

var _dog2 = _interopRequireDefault(_dog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable indent */
/* eslint-disable react/jsx-indent */

var dogBark = new _dog2.default('Browser Toby').bark();

var App = function App(props) {
    return _react2.default.createElement(
        'div',
        null,
        'The dog says: ',
        props.message
    );
};

App.propTypes = {
    message: _react.PropTypes.string.isRequired
};

_reactDom2.default.render(_react2.default.createElement(App, { message: dogBark }), document.querySelector('.app'));