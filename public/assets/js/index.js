'use strict';

var _dog = require('./dog');

var _dog2 = _interopRequireDefault(_dog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var str = 'ES6';
console.log('Hello from ' + str);

var toby = new _dog2.default('Toby');
console.log(toby.bark());