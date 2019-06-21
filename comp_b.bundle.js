/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/computer_board.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/computer_board.ts":
/*!*******************************!*\
  !*** ./src/computer_board.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Ships = /** @class */ (function () {\n    function Ships() {\n        var _this = this;\n        this.cords_comp = [];\n        this.htmlTable = function () {\n            var main = document.getElementById('right');\n            if (main) {\n                var table = document.createElement(\"table\");\n                main.appendChild(table);\n                for (var i = 1; i < 11; i++) {\n                    var tr = document.createElement(\"tr\");\n                    table.appendChild(tr);\n                    for (var ii = 1; ii < 11; ii++) {\n                        var td = document.createElement(\"td\");\n                        tr.appendChild(td);\n                        if (_this.cords_comp[i][ii] == 1) {\n                            td.style.backgroundColor = \"purple\";\n                        }\n                    }\n                }\n            }\n        };\n        this.cords_comp_table();\n        this.random_cords();\n        this.htmlTable();\n    }\n    Ships.prototype.cords_comp_table = function () {\n        for (var i = 0; i < 12; i++) {\n            this.cords_comp[i] = [];\n            for (var ii = 0; ii < 12; ii++) {\n                this.cords_comp[i][ii] = 0;\n            }\n        }\n    };\n    Ships.prototype.random_cords = function () {\n        var _this = this;\n        var order = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];\n        var _loop_1 = function (i) {\n            switch (order[i]) {\n                case 4:\n                    //console.log(4)\n                    var direction4 = Math.round(Math.random());\n                    switch (direction4) {\n                        case 0: // horizontal\n                            var random_1 = function () {\n                                var x = Math.floor(Math.random() * 10) + 1;\n                                var y = Math.floor(Math.random() * 10) + 1;\n                                if (x + 3 <= 10 && _this.cords_comp[y][x] == 0 && _this.cords_comp[y][x + 1] == 0 && _this.cords_comp[y][x + 2] == 0 && _this.cords_comp[y][x + 3] == 0 && _this.cords_comp[y + 1][x] == 0 && _this.cords_comp[y + 1][x + 1] == 0 && _this.cords_comp[y + 1][x + 2] == 0 && _this.cords_comp[y + 1][x + 3] == 0 && _this.cords_comp[y + 1][x - 1] == 0 && _this.cords_comp[y + 1][x + 4] == 0 && _this.cords_comp[y][x - 1] == 0 && _this.cords_comp[y][x + 4] == 0 && _this.cords_comp[y - 1][x - 1] == 0 && _this.cords_comp[y - 1][x + 4] == 0 && _this.cords_comp[y - 1][x] == 0 && _this.cords_comp[y - 1][x + 1] == 0 && _this.cords_comp[y - 1][x + 2] == 0 && _this.cords_comp[y - 1][x + 3] == 0) {\n                                    _this.cords_comp[y][x] = 1;\n                                    _this.cords_comp[y][x + 1] = 1;\n                                    _this.cords_comp[y][x + 2] = 1;\n                                    _this.cords_comp[y][x + 3] = 1;\n                                }\n                                else {\n                                    random_1();\n                                }\n                            };\n                            random_1();\n                            break;\n                        case 1: // vertical\n                            var random2_1 = function () {\n                                var x = Math.floor(Math.random() * 10) + 1;\n                                var y = Math.floor(Math.random() * 10) + 1;\n                                if (y + 3 <= 10 && _this.cords_comp[y][x] == 0 && _this.cords_comp[y + 1][x] == 0 && _this.cords_comp[y + 2][x] == 0 && _this.cords_comp[y + 3][x] == 0 && _this.cords_comp[y - 1][x] == 0 && _this.cords_comp[y + 4][x] == 0 && _this.cords_comp[y - 1][x - 1] == 0 && _this.cords_comp[y - 1][x + 1] == 0 && _this.cords_comp[y][x - 1] == 0 && _this.cords_comp[y][x + 1] == 0 && _this.cords_comp[y + 1][x - 1] == 0 && _this.cords_comp[y + 1][x + 1] == 0 && _this.cords_comp[y + 2][x - 1] == 0 && _this.cords_comp[y + 2][x + 1] == 0 && _this.cords_comp[y + 3][x - 1] == 0 && _this.cords_comp[y + 3][x + 1] == 0 && _this.cords_comp[y + 4][x - 1] == 0 && _this.cords_comp[y + 4][x + 1] == 0) {\n                                    _this.cords_comp[y][x] = 1;\n                                    _this.cords_comp[y + 1][x] = 1;\n                                    _this.cords_comp[y + 2][x] = 1;\n                                    _this.cords_comp[y + 3][x] = 1;\n                                }\n                                else {\n                                    random2_1();\n                                }\n                            };\n                            random2_1();\n                            break;\n                    }\n                    break;\n                case 3:\n                    //console.log(3)\n                    var direction3 = Math.round(Math.random());\n                    switch (direction3) {\n                        case 0: // horizontal\n                            var random_2 = function () {\n                                var x = Math.floor(Math.random() * 10) + 1;\n                                var y = Math.floor(Math.random() * 10) + 1;\n                                if (x + 2 <= 10 && _this.cords_comp[y][x] == 0 && _this.cords_comp[y][x + 1] == 0 && _this.cords_comp[y][x + 2] == 0 && _this.cords_comp[y + 1][x] == 0 && _this.cords_comp[y + 1][x + 1] == 0 && _this.cords_comp[y + 1][x + 2] == 0 && _this.cords_comp[y + 1][x - 1] == 0 && _this.cords_comp[y + 1][x + 3] == 0 && _this.cords_comp[y][x - 1] == 0 && _this.cords_comp[y][x + 3] == 0 && _this.cords_comp[y - 1][x - 1] == 0 && _this.cords_comp[y - 1][x + 3] == 0 && _this.cords_comp[y - 1][x] == 0 && _this.cords_comp[y - 1][x + 1] == 0 && _this.cords_comp[y - 1][x + 2] == 0) {\n                                    _this.cords_comp[y][x] = 1;\n                                    _this.cords_comp[y][x + 1] = 1;\n                                    _this.cords_comp[y][x + 2] = 1;\n                                }\n                                else {\n                                    random_2();\n                                }\n                            };\n                            random_2();\n                            break;\n                        case 1: // vertical\n                            var random2_2 = function () {\n                                var x = Math.floor(Math.random() * 10) + 1;\n                                var y = Math.floor(Math.random() * 10) + 1;\n                                if (y + 2 <= 10 && _this.cords_comp[y][x] == 0 && _this.cords_comp[y + 1][x] == 0 && _this.cords_comp[y + 2][x] == 0 && _this.cords_comp[y - 1][x] == 0 && _this.cords_comp[y + 3][x] == 0 && _this.cords_comp[y - 1][x - 1] == 0 && _this.cords_comp[y - 1][x + 1] == 0 && _this.cords_comp[y][x - 1] == 0 && _this.cords_comp[y][x + 1] == 0 && _this.cords_comp[y + 1][x - 1] == 0 && _this.cords_comp[y + 1][x + 1] == 0 && _this.cords_comp[y + 2][x - 1] == 0 && _this.cords_comp[y + 2][x + 1] == 0 && _this.cords_comp[y + 3][x - 1] == 0 && _this.cords_comp[y + 3][x + 1] == 0) {\n                                    _this.cords_comp[y][x] = 1;\n                                    _this.cords_comp[y + 1][x] = 1;\n                                    _this.cords_comp[y + 2][x] = 1;\n                                }\n                                else {\n                                    random2_2();\n                                }\n                            };\n                            random2_2();\n                            break;\n                    }\n                    break;\n                case 2:\n                    //console.log(2)\n                    var direction = Math.round(Math.random());\n                    switch (direction) {\n                        case 0: // horizontal\n                            var random_3 = function () {\n                                var x = Math.floor(Math.random() * 10) + 1;\n                                var y = Math.floor(Math.random() * 10) + 1;\n                                if (x + 1 <= 10 && _this.cords_comp[y][x] == 0 && _this.cords_comp[y][x + 1] == 0 && _this.cords_comp[y + 1][x] == 0 && _this.cords_comp[y + 1][x + 1] == 0 && _this.cords_comp[y + 1][x - 1] == 0 && _this.cords_comp[y + 1][x + 2] == 0 && _this.cords_comp[y][x - 1] == 0 && _this.cords_comp[y][x + 2] == 0 && _this.cords_comp[y - 1][x - 1] == 0 && _this.cords_comp[y - 1][x + 2] == 0 && _this.cords_comp[y - 1][x] == 0 && _this.cords_comp[y - 1][x + 1] == 0) {\n                                    _this.cords_comp[y][x] = 1;\n                                    _this.cords_comp[y][x + 1] = 1;\n                                }\n                                else {\n                                    random_3();\n                                }\n                            };\n                            random_3();\n                            break;\n                        case 1: // vertical\n                            var random2_3 = function () {\n                                var x = Math.floor(Math.random() * 10) + 1;\n                                var y = Math.floor(Math.random() * 10) + 1;\n                                if (y + 1 <= 10 && _this.cords_comp[y][x] == 0 && _this.cords_comp[y + 1][x] == 0 && _this.cords_comp[y - 1][x] == 0 && _this.cords_comp[y + 2][x] == 0 && _this.cords_comp[y - 1][x - 1] == 0 && _this.cords_comp[y - 1][x + 1] == 0 && _this.cords_comp[y][x - 1] == 0 && _this.cords_comp[y][x + 1] == 0 && _this.cords_comp[y + 1][x - 1] == 0 && _this.cords_comp[y + 1][x + 1] == 0 && _this.cords_comp[y + 2][x - 1] == 0 && _this.cords_comp[y + 2][x + 1] == 0) {\n                                    _this.cords_comp[y][x] = 1;\n                                    _this.cords_comp[y + 1][x] = 1;\n                                }\n                                else {\n                                    random2_3();\n                                }\n                            };\n                            random2_3();\n                            break;\n                    }\n                    break;\n                case 1:\n                    var random_4 = function () {\n                        var x = Math.floor(Math.random() * 10) + 1;\n                        var y = Math.floor(Math.random() * 10) + 1;\n                        if (_this.cords_comp[y][x] == 0 && _this.cords_comp[y - 1][x] == 0 && _this.cords_comp[y - 1][x + 1] == 0 && _this.cords_comp[y][x + 1] == 0 && _this.cords_comp[y + 1][x + 1] == 0 && _this.cords_comp[y + 1][x] == 0 && _this.cords_comp[y + 1][x - 1] == 0 && _this.cords_comp[y][x - 1] == 0 && _this.cords_comp[y - 1][x - 1] == 0) {\n                            _this.cords_comp[y][x] = 1;\n                        }\n                        else {\n                            random_4();\n                        }\n                    };\n                    random_4();\n                    break;\n            }\n        };\n        for (var i = 0; i < order.length; i++) {\n            _loop_1(i);\n        }\n    };\n    return Ships;\n}());\nexports.default = Ships;\n\n\n//# sourceURL=webpack:///./src/computer_board.ts?");

/***/ })

/******/ });