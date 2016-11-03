/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/* eslint-disable indent */
	/* eslint-disable react/jsx-indent */
	
	// import 'babel-polyfill';
	
	// import React, { PropTypes } from 'react';
	// import ReactDOM from 'react-dom';
	
	/*
	import Dog from '../shared/dog';

	const dogBark = new Dog('Browser Toby').bark();

	const App = props => (
	    <div>
	        The dog says: {props.message}
	    </div>
	);

	App.propTypes = {
	    message: PropTypes.string.isRequired,
	};

	ReactDOM.render(<App message={dogBark} />, document.querySelector('.app'));
	*/
	"use strict";

/***/ }
/******/ ]);
//# sourceMappingURL=client-bundle.js.map