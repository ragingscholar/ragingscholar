'use strict';

require('babel-polyfill');

var _dog = require('../shared/dog');

var _dog2 = _interopRequireDefault(_dog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var browserToby = new _dog2.default('Browser Toby');

document.querySelector('.app').innerText = browserToby.bark();