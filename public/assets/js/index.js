'use strict';

var str = 'ES6';
console.log('Hello from ' + str);

var Dog = require('./dog');
var toby = new Dog('Toby');
console.log(toby.bark());