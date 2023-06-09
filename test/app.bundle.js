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

/***/ "./dev.ts":
/*!****************!*\
  !*** ./dev.ts ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ \"./src/index.ts\");\n\nvar player = new _src_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"#player\", {\n    videoUrl: \"https://file-examples.com/storage/fef677cdf46481c8d96f8cd/2017/04/file_example_MP4_640_3MG.mp4\",\n    autoPlay: false,\n    muted: false,\n});\nconsole.log(player);\n\n\n//# sourceURL=webpack://test-webpack/./dev.ts?");

/***/ }),

/***/ "./src/Video.ts":
/*!**********************!*\
  !*** ./src/Video.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar Video = /** @class */ (function (_super) {\n    __extends(Video, _super);\n    function Video(ncPlayer) {\n        var _this = this;\n        var _a;\n        _this = _super.call(this) || this;\n        _this.ncPlayer = ncPlayer;\n        _this.controls = true;\n        _this.playsInline = true;\n        _this.preload = \"auto\";\n        _this.poster = (_a = _this.ncPlayer.options.poster) !== null && _a !== void 0 ? _a : \"\";\n        return _this;\n    }\n    /**  */\n    Video.prototype.isPlaying = function () {\n        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);\n    };\n    Video.prototype.togglePlay = function () {\n        !this.error && this[this.isPlaying() ? \"pause\" : \"play\"]();\n    };\n    //toggleFullScreen\n    Video.prototype.toggleFullScreen = function () {\n        //Do something...\n    };\n    //Video element events\n    Video.prototype.on = function (event, listener, options) {\n        this.addEventListener(event, listener, options);\n    };\n    Video.prototype.once = function (event, listener) {\n        this.on(event, listener, { once: true });\n    };\n    return Video;\n}(HTMLVideoElement));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);\n//Custom video element\ncustomElements.define(\"custom-video\", Video, { extends: \"video\" });\n\n\n//# sourceURL=webpack://test-webpack/./src/Video.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Video */ \"./src/Video.ts\");\n/* harmony import */ var _utils_Emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/Emitter */ \"./src/utils/Emitter.ts\");\n/* harmony import */ var _utils_NCDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/NCDom */ \"./src/utils/NCDom.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\nvar NCPlayer = /** @class */ (function (_super) {\n    __extends(NCPlayer, _super);\n    function NCPlayer(selector, options) {\n        var _this = _super.call(this) || this;\n        _this.options = options;\n        _this.container = new _utils_NCDom__WEBPACK_IMPORTED_MODULE_2__.NCDom(document.querySelector(selector));\n        _this.container.attr(\"tabindex\", 1);\n        //Init packages\n        _this.video = new _Video__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_this);\n        // //Append video DOM\n        _this.container.node.appendChild(_this.video);\n        //Option default values\n        _this.options.videoUrl && (_this.video.src = _this.options.videoUrl);\n        _this.options.muted && (_this.video.muted = _this.options.muted);\n        _this.options.autoPlay && (_this.video.autoplay = _this.options.autoPlay); //Auto play\n        return _this;\n    }\n    return NCPlayer;\n}(_utils_Emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NCPlayer);\n\n\n//# sourceURL=webpack://test-webpack/./src/index.ts?");

/***/ }),

/***/ "./src/utils/Emitter.ts":
/*!******************************!*\
  !*** ./src/utils/Emitter.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Emitter = /** @class */ (function () {\n    function Emitter() {\n        this.listeners = {};\n    }\n    Emitter.prototype.on = function (event, listener) {\n        if (!this.listeners[event]) {\n            this.listeners[event] = [];\n        }\n        this.listeners[event].push(listener);\n    };\n    Emitter.prototype.off = function (event, listener) {\n        var listeners = this.listeners[event];\n        if (listeners) {\n            var index = listeners.indexOf(listener);\n            if (index !== -1) {\n                listeners.splice(index, 1);\n            }\n        }\n    };\n    Emitter.prototype.once = function (event, listener) {\n        var _this = this;\n        var onceListener = function () {\n            var args = [];\n            for (var _i = 0; _i < arguments.length; _i++) {\n                args[_i] = arguments[_i];\n            }\n            listener.apply(void 0, args);\n            _this.off(event, onceListener);\n        };\n        this.on(event, onceListener);\n    };\n    Emitter.prototype.emit = function (event) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        var listeners = this.listeners[event];\n        if (listeners) {\n            listeners.forEach(function (listener) {\n                listener.apply(void 0, args);\n            });\n        }\n    };\n    return Emitter;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Emitter);\n\n\n//# sourceURL=webpack://test-webpack/./src/utils/Emitter.ts?");

/***/ }),

/***/ "./src/utils/NCDom.ts":
/*!****************************!*\
  !*** ./src/utils/NCDom.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NCDom: () => (/* binding */ NCDom),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar NCDom = /** @class */ (function () {\n    function NCDom(html) {\n        if (html instanceof HTMLElement) {\n            this.node = html;\n        }\n        else {\n            var parent_1 = document.createElement(\"div\");\n            parent_1.insertAdjacentHTML(\"beforeend\", String(html));\n            this.node = (parent_1.lastElementChild || parent_1.lastChild);\n        }\n    }\n    NCDom.prototype.query = function (selector) {\n        return this.node.querySelector(selector);\n    };\n    NCDom.prototype.queryAll = function (selector, parent) {\n        if (parent === void 0) { parent = document; }\n        return Array.from(parent.querySelectorAll(selector));\n    };\n    NCDom.prototype.addClass = function (className) {\n        this.node.classList.add(className);\n        return this;\n    };\n    NCDom.prototype.removeClass = function (className) {\n        this.node.classList.remove(className);\n        return this;\n    };\n    NCDom.prototype.hasClass = function (className) {\n        return this.node.classList.contains(className);\n    };\n    NCDom.prototype.toggleClass = function (className) {\n        this[this.hasClass(className) ? \"removeClass\" : \"addClass\"](className);\n    };\n    NCDom.prototype.append = function (html) {\n        var dom = $(html);\n        this.node.appendChild(dom.node);\n        return dom;\n    };\n    NCDom.prototype.prepend = function (html) {\n        var dom = $(html);\n        this.node.prepend(dom.node);\n        return dom;\n    };\n    NCDom.prototype.remove = function () {\n        var _a;\n        return (_a = this.node.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this.node);\n    };\n    NCDom.prototype.css = function (key, value) {\n        //@ts-ignore\n        this.node.style[key] = value;\n        return this.node;\n    };\n    NCDom.prototype.getStyle = function (key, numberType) {\n        if (numberType === void 0) { numberType = true; }\n        var value = window.getComputedStyle(this.node, null).getPropertyValue(key);\n        return numberType ? parseFloat(value) : value;\n    };\n    NCDom.prototype.attr = function (key, value) {\n        if (value == undefined)\n            return this.node.getAttribute(key);\n        return this.node.setAttribute(key, value.toString());\n    };\n    NCDom.prototype.removeAttr = function (key) {\n        this.node.removeAttribute(key);\n    };\n    NCDom.prototype.on = function (event, callback) {\n        this.node.addEventListener(event, callback);\n        return this;\n    };\n    NCDom.prototype.click = function (callback) {\n        this.on(\"click\", callback);\n    };\n    NCDom.prototype.html = function (value) {\n        if (value == undefined) {\n            this.node.innerHTML;\n        }\n        else {\n            this.node.innerHTML = value;\n        }\n        return this;\n    };\n    return NCDom;\n}());\n\nvar $ = function (html) { return new NCDom(html); };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($);\n\n\n//# sourceURL=webpack://test-webpack/./src/utils/NCDom.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./dev.ts");
/******/ 	
/******/ })()
;