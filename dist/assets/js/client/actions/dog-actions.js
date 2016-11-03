'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* eslint-disable indent */
var MAKE_BARK = exports.MAKE_BARK = 'MAKE_BARK';

var makeBark = exports.makeBark = function makeBark() {
    return {
        type: MAKE_BARK,
        payload: true
    };
};