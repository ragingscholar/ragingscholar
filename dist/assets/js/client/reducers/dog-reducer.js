'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dogActions = require('../actions/dog-actions');

var initialState = {
    hasBarked: false
}; /* eslint-disable indent */


var dogReducer = function dogReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _dogActions.MAKE_BARK:
            return { hasBarked: action.payload };
        default:
            return state;
    }
};

exports.default = dogReducer;