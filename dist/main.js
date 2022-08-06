(function webpackUniversalModuleDefinition(root, factory) {
	//CommonJS2 Comment
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	//AMD Comment
	else if(typeof define === 'function' && define.amd)
		define("MyLibrary", [], factory);
	//CommonJS Comment
	else if(typeof exports === 'object')
		exports["MyLibrary"] = factory();
	//Root Comment
	else
		root["MyLibrary"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

;// CONCATENATED MODULE: ./src/add.js
var add = function add(a, b) {
  return a + b;
};

/* harmony default export */ const src_add = (add);
;// CONCATENATED MODULE: ./src/index.js

/* harmony default export */ const src = (src_add);
console.log(src_add(1, 2)); // new Promise((resolve) => {
//   resolve("ceshi");
// }).then((res) => {
//   console.log(res);
// });
/******/ 	return __webpack_exports__;
/******/ })()
;
});