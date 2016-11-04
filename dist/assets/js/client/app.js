'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _welcome = require('../../_posts/welcome');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
const store = createStore(combineReducers({
    dog: dogReducer,
}));

ReactDOM.render(
    <Provider store={store}>
        <div>
            <BarkMessage />
            <BarkButton />
        </div>
    </Provider>
    , document.querySelector('.app')
);
*/

// import { createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
// import dogReducer from './reducers/dog-reducer';
// import BarkMessage from './containers/bark-message';
// import BarkButton from './containers/bark-button';
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */

_reactDom2.default.render(_react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactMarkdown2.default, { source: _welcome.CONTENT })
), document.querySelector('.app'));