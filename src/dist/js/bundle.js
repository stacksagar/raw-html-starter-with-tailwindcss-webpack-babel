/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ \"./app/pages/home.js\");\n\nconsole.log(\"see it \", (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.makeRandomN)());\nconsole.log(\"see random number() \", (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.makeRandomNumber)());\n\n//# sourceURL=webpack://admin/./app/index.js?");

/***/ }),

/***/ "./app/pages/home.js":
/*!***************************!*\
  !*** ./app/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeRandomN\": () => (/* binding */ makeRandomN),\n/* harmony export */   \"makeRandomNumber\": () => (/* binding */ makeRandomNumber)\n/* harmony export */ });\n/* harmony import */ var uid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uid */ \"./node_modules/uid/dist/index.mjs\");\n\nfunction makeRandomN() {\n  return (0,uid__WEBPACK_IMPORTED_MODULE_0__.uid)();\n}\nfunction makeRandomNumber() {\n  return Math.random() + \"Sagar\";\n}\n\n//# sourceURL=webpack://admin/./app/pages/home.js?");

/***/ }),

/***/ "./node_modules/uid/dist/index.mjs":
/*!*****************************************!*\
  !*** ./node_modules/uid/dist/index.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"uid\": () => (/* binding */ uid)\n/* harmony export */ });\nvar IDX=256, HEX=[], SIZE=256, BUFFER;\nwhile (IDX--) HEX[IDX] = (IDX + 256).toString(16).substring(1);\n\nfunction uid(len) {\n\tvar i=0, tmp=(len || 11);\n\tif (!BUFFER || ((IDX + tmp) > SIZE*2)) {\n\t\tfor (BUFFER='',IDX=0; i < SIZE; i++) {\n\t\t\tBUFFER += HEX[Math.random() * 256 | 0];\n\t\t}\n\t}\n\n\treturn BUFFER.substring(IDX, IDX++ + tmp);\n}\n\n\n//# sourceURL=webpack://admin/./node_modules/uid/dist/index.mjs?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/index.js");
/******/ 	
/******/ })()
;