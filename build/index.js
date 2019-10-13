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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/countrycodes.js":
/*!*****************************!*\
  !*** ./src/countrycodes.js ***!
  \*****************************/
/*! exports provided: countryCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryCodes", function() { return countryCodes; });
var countryCodes = [{
  "code": "US",
  "label": "\uD83C\uDDFA\uD83C\uDDF8 +1",
  "value": "1US"
}, {
  "code": "CA",
  "label": "\uD83C\uDDE8\uD83C\uDDE6 +1",
  "value": "1CA"
}, {
  "code": "BS",
  "label": "\uD83C\uDDE7\uD83C\uDDF8 +1242",
  "value": "1242BS"
}, {
  "code": "BB",
  "label": "\uD83C\uDDE7\uD83C\uDDE7 +1246",
  "value": "1246BB"
}, {
  "code": "AI",
  "label": "\uD83C\uDDE6\uD83C\uDDEE +1264",
  "value": "1264AI"
}, {
  "code": "AG",
  "label": "\uD83C\uDDE6\uD83C\uDDEC +1268",
  "value": "1268AG"
}, {
  "code": "VG",
  "label": "\uD83C\uDDFB\uD83C\uDDEC +1284",
  "value": "1284VG"
}, {
  "code": "VI",
  "label": "\uD83C\uDDFB\uD83C\uDDEE +1340",
  "value": "1340VI"
}, {
  "code": "BM",
  "label": "\uD83C\uDDE7\uD83C\uDDF2 +1441",
  "value": "1441BM"
}, {
  "code": "GD",
  "label": "\uD83C\uDDEC\uD83C\uDDE9 +1473",
  "value": "1473GD"
}, {
  "code": "TC",
  "label": "\uD83C\uDDF9\uD83C\uDDE8 +1649",
  "value": "1649TC"
}, {
  "code": "MS",
  "label": "\uD83C\uDDF2\uD83C\uDDF8 +1664",
  "value": "1664MS"
}, {
  "code": "MP",
  "label": "\uD83C\uDDF2\uD83C\uDDF5 +1670",
  "value": "1670MP"
}, {
  "code": "GU",
  "label": "\uD83C\uDDEC\uD83C\uDDFA +1671",
  "value": "1671GU"
}, {
  "code": "AS",
  "label": "\uD83C\uDDE6\uD83C\uDDF8 +1684",
  "value": "1684AS"
}, {
  "code": "LC",
  "label": "\uD83C\uDDF1\uD83C\uDDE8 +1758",
  "value": "1758LC"
}, {
  "code": "DM",
  "label": "\uD83C\uDDE9\uD83C\uDDF2 +1767",
  "value": "1767DM"
}, {
  "code": "VC",
  "label": "\uD83C\uDDFB\uD83C\uDDE8 +1784",
  "value": "1784VC"
}, {
  "code": "DO",
  "label": "\uD83C\uDDE9\uD83C\uDDF4 +1849",
  "value": "1849DO"
}, {
  "code": "TT",
  "label": "\uD83C\uDDF9\uD83C\uDDF9 +1868",
  "value": "1868TT"
}, {
  "code": "KN",
  "label": "\uD83C\uDDF0\uD83C\uDDF3 +1869",
  "value": "1869KN"
}, {
  "code": "JM",
  "label": "\uD83C\uDDEF\uD83C\uDDF2 +1876",
  "value": "1876JM"
}, {
  "code": "PR",
  "label": "\uD83C\uDDF5\uD83C\uDDF7 +1939",
  "value": "1939PR"
}, {
  "code": "EG",
  "label": "\uD83C\uDDEA\uD83C\uDDEC +20",
  "value": "20EG"
}, {
  "code": "MA",
  "label": "\uD83C\uDDF2\uD83C\uDDE6 +212",
  "value": "212MA"
}, {
  "code": "DZ",
  "label": "\uD83C\uDDE9\uD83C\uDDFF +213",
  "value": "213DZ"
}, {
  "code": "TN",
  "label": "\uD83C\uDDF9\uD83C\uDDF3 +216",
  "value": "216TN"
}, {
  "code": "LY",
  "label": "\uD83C\uDDF1\uD83C\uDDFE +218",
  "value": "218LY"
}, {
  "code": "GM",
  "label": "\uD83C\uDDEC\uD83C\uDDF2 +220",
  "value": "220GM"
}, {
  "code": "SN",
  "label": "\uD83C\uDDF8\uD83C\uDDF3 +221",
  "value": "221SN"
}, {
  "code": "MR",
  "label": "\uD83C\uDDF2\uD83C\uDDF7 +222",
  "value": "222MR"
}, {
  "code": "ML",
  "label": "\uD83C\uDDF2\uD83C\uDDF1 +223",
  "value": "223ML"
}, {
  "code": "GN",
  "label": "\uD83C\uDDEC\uD83C\uDDF3 +224",
  "value": "224GN"
}, {
  "code": "CI",
  "label": "\uD83C\uDDE8\uD83C\uDDEE +225",
  "value": "225CI"
}, {
  "code": "BF",
  "label": "\uD83C\uDDE7\uD83C\uDDEB +226",
  "value": "226BF"
}, {
  "code": "NE",
  "label": "\uD83C\uDDF3\uD83C\uDDEA +227",
  "value": "227NE"
}, {
  "code": "TG",
  "label": "\uD83C\uDDF9\uD83C\uDDEC +228",
  "value": "228TG"
}, {
  "code": "BJ",
  "label": "\uD83C\uDDE7\uD83C\uDDEF +229",
  "value": "229BJ"
}, {
  "code": "MU",
  "label": "\uD83C\uDDF2\uD83C\uDDFA +230",
  "value": "230MU"
}, {
  "code": "LR",
  "label": "\uD83C\uDDF1\uD83C\uDDF7 +231",
  "value": "231LR"
}, {
  "code": "SL",
  "label": "\uD83C\uDDF8\uD83C\uDDF1 +232",
  "value": "232SL"
}, {
  "code": "GH",
  "label": "\uD83C\uDDEC\uD83C\uDDED +233",
  "value": "233GH"
}, {
  "code": "NG",
  "label": "\uD83C\uDDF3\uD83C\uDDEC +234",
  "value": "234NG"
}, {
  "code": "TD",
  "label": "\uD83C\uDDF9\uD83C\uDDE9 +235",
  "value": "235TD"
}, {
  "code": "CF",
  "label": "\uD83C\uDDE8\uD83C\uDDEB +236",
  "value": "236CF"
}, {
  "code": "CM",
  "label": "\uD83C\uDDE8\uD83C\uDDF2 +237",
  "value": "237CM"
}, {
  "code": "CV",
  "label": "\uD83C\uDDE8\uD83C\uDDFB +238",
  "value": "238CV"
}, {
  "code": "ST",
  "label": "\uD83C\uDDF8\uD83C\uDDF9 +239",
  "value": "239ST"
}, {
  "code": "GQ",
  "label": "\uD83C\uDDEC\uD83C\uDDF6 +240",
  "value": "240GQ"
}, {
  "code": "GA",
  "label": "\uD83C\uDDEC\uD83C\uDDE6 +241",
  "value": "241GA"
}, {
  "code": "CG",
  "label": "\uD83C\uDDE8\uD83C\uDDEC +242",
  "value": "242CG"
}, {
  "code": "CD",
  "label": "\uD83C\uDDE8\uD83C\uDDE9 +243",
  "value": "243CD"
}, {
  "code": "AO",
  "label": "\uD83C\uDDE6\uD83C\uDDF4 +244",
  "value": "244AO"
}, {
  "code": "GW",
  "label": "\uD83C\uDDEC\uD83C\uDDFC +245",
  "value": "245GW"
}, {
  "code": "IO",
  "label": "\uD83C\uDDEE\uD83C\uDDF4 +246",
  "value": "246IO"
}, {
  "code": "SC",
  "label": "\uD83C\uDDF8\uD83C\uDDE8 +248",
  "value": "248SC"
}, {
  "code": "SD",
  "label": "\uD83C\uDDF8\uD83C\uDDE9 +249",
  "value": "249SD"
}, {
  "code": "RW",
  "label": "\uD83C\uDDF7\uD83C\uDDFC +250",
  "value": "250RW"
}, {
  "code": "ET",
  "label": "\uD83C\uDDEA\uD83C\uDDF9 +251",
  "value": "251ET"
}, {
  "code": "SO",
  "label": "\uD83C\uDDF8\uD83C\uDDF4 +252",
  "value": "252SO"
}, {
  "code": "DJ",
  "label": "\uD83C\uDDE9\uD83C\uDDEF +253",
  "value": "253DJ"
}, {
  "code": "KE",
  "label": "\uD83C\uDDF0\uD83C\uDDEA +254",
  "value": "254KE"
}, {
  "code": "TZ",
  "label": "\uD83C\uDDF9\uD83C\uDDFF +255",
  "value": "255TZ"
}, {
  "code": "UG",
  "label": "\uD83C\uDDFA\uD83C\uDDEC +256",
  "value": "256UG"
}, {
  "code": "BI",
  "label": "\uD83C\uDDE7\uD83C\uDDEE +257",
  "value": "257BI"
}, {
  "code": "MZ",
  "label": "\uD83C\uDDF2\uD83C\uDDFF +258",
  "value": "258MZ"
}, {
  "code": "ZM",
  "label": "\uD83C\uDDFF\uD83C\uDDF2 +260",
  "value": "260ZM"
}, {
  "code": "MG",
  "label": "\uD83C\uDDF2\uD83C\uDDEC +261",
  "value": "261MG"
}, {
  "code": "YT",
  "label": "\uD83C\uDDFE\uD83C\uDDF9 +262",
  "value": "262YT"
}, {
  "code": "RE",
  "label": "\uD83C\uDDF7\uD83C\uDDEA +262",
  "value": "262RE"
}, {
  "code": "ZW",
  "label": "\uD83C\uDDFF\uD83C\uDDFC +263",
  "value": "263ZW"
}, {
  "code": "NA",
  "label": "\uD83C\uDDF3\uD83C\uDDE6 +264",
  "value": "264NA"
}, {
  "code": "MW",
  "label": "\uD83C\uDDF2\uD83C\uDDFC +265",
  "value": "265MW"
}, {
  "code": "LS",
  "label": "\uD83C\uDDF1\uD83C\uDDF8 +266",
  "value": "266LS"
}, {
  "code": "BW",
  "label": "\uD83C\uDDE7\uD83C\uDDFC +267",
  "value": "267BW"
}, {
  "code": "SZ",
  "label": "\uD83C\uDDF8\uD83C\uDDFF +268",
  "value": "268SZ"
}, {
  "code": "KM",
  "label": "\uD83C\uDDF0\uD83C\uDDF2 +269",
  "value": "269KM"
}, {
  "code": "ZA",
  "label": "\uD83C\uDDFF\uD83C\uDDE6 +27",
  "value": "27ZA"
}, {
  "code": "SH",
  "label": "\uD83C\uDDF8\uD83C\uDDED +290",
  "value": "290SH"
}, {
  "code": "ER",
  "label": "\uD83C\uDDEA\uD83C\uDDF7 +291",
  "value": "291ER"
}, {
  "code": "AW",
  "label": "\uD83C\uDDE6\uD83C\uDDFC +297",
  "value": "297AW"
}, {
  "code": "FO",
  "label": "\uD83C\uDDEB\uD83C\uDDF4 +298",
  "value": "298FO"
}, {
  "code": "GL",
  "label": "\uD83C\uDDEC\uD83C\uDDF1 +299",
  "value": "299GL"
}, {
  "code": "GR",
  "label": "\uD83C\uDDEC\uD83C\uDDF7 +30",
  "value": "30GR"
}, {
  "code": "NL",
  "label": "\uD83C\uDDF3\uD83C\uDDF1 +31",
  "value": "31NL"
}, {
  "code": "BE",
  "label": "\uD83C\uDDE7\uD83C\uDDEA +32",
  "value": "32BE"
}, {
  "code": "FR",
  "label": "\uD83C\uDDEB\uD83C\uDDF7 +33",
  "value": "33FR"
}, {
  "code": "ES",
  "label": "\uD83C\uDDEA\uD83C\uDDF8 +34",
  "value": "34ES"
}, {
  "code": "KY",
  "label": "\uD83C\uDDF0\uD83C\uDDFE +345",
  "value": "345KY"
}, {
  "code": "GI",
  "label": "\uD83C\uDDEC\uD83C\uDDEE +350",
  "value": "350GI"
}, {
  "code": "PT",
  "label": "\uD83C\uDDF5\uD83C\uDDF9 +351",
  "value": "351PT"
}, {
  "code": "LU",
  "label": "\uD83C\uDDF1\uD83C\uDDFA +352",
  "value": "352LU"
}, {
  "code": "IE",
  "label": "\uD83C\uDDEE\uD83C\uDDEA +353",
  "value": "353IE"
}, {
  "code": "IS",
  "label": "\uD83C\uDDEE\uD83C\uDDF8 +354",
  "value": "354IS"
}, {
  "code": "AL",
  "label": "\uD83C\uDDE6\uD83C\uDDF1 +355",
  "value": "355AL"
}, {
  "code": "MT",
  "label": "\uD83C\uDDF2\uD83C\uDDF9 +356",
  "value": "356MT"
}, {
  "code": "FI",
  "label": "\uD83C\uDDEB\uD83C\uDDEE +358",
  "value": "358FI"
}, {
  "code": "BG",
  "label": "\uD83C\uDDE7\uD83C\uDDEC +359",
  "value": "359BG"
}, {
  "code": "HU",
  "label": "\uD83C\uDDED\uD83C\uDDFA +36",
  "value": "36HU"
}, {
  "code": "LT",
  "label": "\uD83C\uDDF1\uD83C\uDDF9 +370",
  "value": "370LT"
}, {
  "code": "LV",
  "label": "\uD83C\uDDF1\uD83C\uDDFB +371",
  "value": "371LV"
}, {
  "code": "EE",
  "label": "\uD83C\uDDEA\uD83C\uDDEA +372",
  "value": "372EE"
}, {
  "code": "MD",
  "label": "\uD83C\uDDF2\uD83C\uDDE9 +373",
  "value": "373MD"
}, {
  "code": "AM",
  "label": "\uD83C\uDDE6\uD83C\uDDF2 +374",
  "value": "374AM"
}, {
  "code": "BY",
  "label": "\uD83C\uDDE7\uD83C\uDDFE +375",
  "value": "375BY"
}, {
  "code": "AD",
  "label": "\uD83C\uDDE6\uD83C\uDDE9 +376",
  "value": "376AD"
}, {
  "code": "MC",
  "label": "\uD83C\uDDF2\uD83C\uDDE8 +377",
  "value": "377MC"
}, {
  "code": "SM",
  "label": "\uD83C\uDDF8\uD83C\uDDF2 +378",
  "value": "378SM"
}, {
  "code": "VA",
  "label": "\uD83C\uDDFB\uD83C\uDDE6 +379",
  "value": "379VA"
}, {
  "code": "UA",
  "label": "\uD83C\uDDFA\uD83C\uDDE6 +380",
  "value": "380UA"
}, {
  "code": "RS",
  "label": "\uD83C\uDDF7\uD83C\uDDF8 +381",
  "value": "381RS"
}, {
  "code": "ME",
  "label": "\uD83C\uDDF2\uD83C\uDDEA +382",
  "value": "382ME"
}, {
  "code": "XK",
  "label": "\uD83C\uDDFD\uD83C\uDDF0 +383",
  "value": "383XK"
}, {
  "code": "HR",
  "label": "\uD83C\uDDED\uD83C\uDDF7 +385",
  "value": "385HR"
}, {
  "code": "SI",
  "label": "\uD83C\uDDF8\uD83C\uDDEE +386",
  "value": "386SI"
}, {
  "code": "BA",
  "label": "\uD83C\uDDE7\uD83C\uDDE6 +387",
  "value": "387BA"
}, {
  "code": "MK",
  "label": "\uD83C\uDDF2\uD83C\uDDF0 +389",
  "value": "389MK"
}, {
  "code": "IT",
  "label": "\uD83C\uDDEE\uD83C\uDDF9 +39",
  "value": "39IT"
}, {
  "code": "RO",
  "label": "\uD83C\uDDF7\uD83C\uDDF4 +40",
  "value": "40RO"
}, {
  "code": "CH",
  "label": "\uD83C\uDDE8\uD83C\uDDED +41",
  "value": "41CH"
}, {
  "code": "CZ",
  "label": "\uD83C\uDDE8\uD83C\uDDFF +420",
  "value": "420CZ"
}, {
  "code": "SK",
  "label": "\uD83C\uDDF8\uD83C\uDDF0 +421",
  "value": "421SK"
}, {
  "code": "LI",
  "label": "\uD83C\uDDF1\uD83C\uDDEE +423",
  "value": "423LI"
}, {
  "code": "AT",
  "label": "\uD83C\uDDE6\uD83C\uDDF9 +43",
  "value": "43AT"
}, {
  "code": "IM",
  "label": "\uD83C\uDDEE\uD83C\uDDF2 +44",
  "value": "44IM"
}, {
  "code": "GG",
  "label": "\uD83C\uDDEC\uD83C\uDDEC +44",
  "value": "44GG"
}, {
  "code": "JE",
  "label": "\uD83C\uDDEF\uD83C\uDDEA +44",
  "value": "44JE"
}, {
  "code": "GB",
  "label": "\uD83C\uDDEC\uD83C\uDDE7 +44",
  "value": "44GB"
}, {
  "code": "DK",
  "label": "\uD83C\uDDE9\uD83C\uDDF0 +45",
  "value": "45DK"
}, {
  "code": "SE",
  "label": "\uD83C\uDDF8\uD83C\uDDEA +46",
  "value": "46SE"
}, {
  "code": "NO",
  "label": "\uD83C\uDDF3\uD83C\uDDF4 +47",
  "value": "47NO"
}, {
  "code": "SJ",
  "label": "\uD83C\uDDF8\uD83C\uDDEF +47",
  "value": "47SJ"
}, {
  "code": "PL",
  "label": "\uD83C\uDDF5\uD83C\uDDF1 +48",
  "value": "48PL"
}, {
  "code": "DE",
  "label": "\uD83C\uDDE9\uD83C\uDDEA +49",
  "value": "49DE"
}, {
  "code": "FK",
  "label": "\uD83C\uDDEB\uD83C\uDDF0 +500",
  "value": "500FK"
}, {
  "code": "GS",
  "label": "\uD83C\uDDEC\uD83C\uDDF8 +500",
  "value": "500GS"
}, {
  "code": "BZ",
  "label": "\uD83C\uDDE7\uD83C\uDDFF +501",
  "value": "501BZ"
}, {
  "code": "GT",
  "label": "\uD83C\uDDEC\uD83C\uDDF9 +502",
  "value": "502GT"
}, {
  "code": "SV",
  "label": "\uD83C\uDDF8\uD83C\uDDFB +503",
  "value": "503SV"
}, {
  "code": "HN",
  "label": "\uD83C\uDDED\uD83C\uDDF3 +504",
  "value": "504HN"
}, {
  "code": "NI",
  "label": "\uD83C\uDDF3\uD83C\uDDEE +505",
  "value": "505NI"
}, {
  "code": "CR",
  "label": "\uD83C\uDDE8\uD83C\uDDF7 +506",
  "value": "506CR"
}, {
  "code": "PA",
  "label": "\uD83C\uDDF5\uD83C\uDDE6 +507",
  "value": "507PA"
}, {
  "code": "PM",
  "label": "\uD83C\uDDF5\uD83C\uDDF2 +508",
  "value": "508PM"
}, {
  "code": "HT",
  "label": "\uD83C\uDDED\uD83C\uDDF9 +509",
  "value": "509HT"
}, {
  "code": "PE",
  "label": "\uD83C\uDDF5\uD83C\uDDEA +51",
  "value": "51PE"
}, {
  "code": "MX",
  "label": "\uD83C\uDDF2\uD83C\uDDFD +52",
  "value": "52MX"
}, {
  "code": "CU",
  "label": "\uD83C\uDDE8\uD83C\uDDFA +53",
  "value": "53CU"
}, {
  "code": "CY",
  "label": "\uD83C\uDDE8\uD83C\uDDFE +537",
  "value": "537CY"
}, {
  "code": "AR",
  "label": "\uD83C\uDDE6\uD83C\uDDF7 +54",
  "value": "54AR"
}, {
  "code": "BR",
  "label": "\uD83C\uDDE7\uD83C\uDDF7 +55",
  "value": "55BR"
}, {
  "code": "CL",
  "label": "\uD83C\uDDE8\uD83C\uDDF1 +56",
  "value": "56CL"
}, {
  "code": "CO",
  "label": "\uD83C\uDDE8\uD83C\uDDF4 +57",
  "value": "57CO"
}, {
  "code": "VE",
  "label": "\uD83C\uDDFB\uD83C\uDDEA +58",
  "value": "58VE"
}, {
  "code": "BL",
  "label": "\uD83C\uDDE7\uD83C\uDDF1 +590",
  "value": "590BL"
}, {
  "code": "MF",
  "label": "\uD83C\uDDF2\uD83C\uDDEB +590",
  "value": "590MF"
}, {
  "code": "GP",
  "label": "\uD83C\uDDEC\uD83C\uDDF5 +590",
  "value": "590GP"
}, {
  "code": "BO",
  "label": "\uD83C\uDDE7\uD83C\uDDF4 +591",
  "value": "591BO"
}, {
  "code": "EC",
  "label": "\uD83C\uDDEA\uD83C\uDDE8 +593",
  "value": "593EC"
}, {
  "code": "GF",
  "label": "\uD83C\uDDEC\uD83C\uDDEB +594",
  "value": "594GF"
}, {
  "code": "GY",
  "label": "\uD83C\uDDEC\uD83C\uDDFE +595",
  "value": "595GY"
}, {
  "code": "PY",
  "label": "\uD83C\uDDF5\uD83C\uDDFE +595",
  "value": "595PY"
}, {
  "code": "MQ",
  "label": "\uD83C\uDDF2\uD83C\uDDF6 +596",
  "value": "596MQ"
}, {
  "code": "SR",
  "label": "\uD83C\uDDF8\uD83C\uDDF7 +597",
  "value": "597SR"
}, {
  "code": "UY",
  "label": "\uD83C\uDDFA\uD83C\uDDFE +598",
  "value": "598UY"
}, {
  "code": "MY",
  "label": "\uD83C\uDDF2\uD83C\uDDFE +60",
  "value": "60MY"
}, {
  "code": "CC",
  "label": "\uD83C\uDDE8\uD83C\uDDE8 +61",
  "value": "61CC"
}, {
  "code": "AU",
  "label": "\uD83C\uDDE6\uD83C\uDDFA +61",
  "value": "61AU"
}, {
  "code": "CX",
  "label": "\uD83C\uDDE8\uD83C\uDDFD +61",
  "value": "61CX"
}, {
  "code": "ID",
  "label": "\uD83C\uDDEE\uD83C\uDDE9 +62",
  "value": "62ID"
}, {
  "code": "PH",
  "label": "\uD83C\uDDF5\uD83C\uDDED +63",
  "value": "63PH"
}, {
  "code": "NZ",
  "label": "\uD83C\uDDF3\uD83C\uDDFF +64",
  "value": "64NZ"
}, {
  "code": "SG",
  "label": "\uD83C\uDDF8\uD83C\uDDEC +65",
  "value": "65SG"
}, {
  "code": "TH",
  "label": "\uD83C\uDDF9\uD83C\uDDED +66",
  "value": "66TH"
}, {
  "code": "TL",
  "label": "\uD83C\uDDF9\uD83C\uDDF1 +670",
  "value": "670TL"
}, {
  "code": "NF",
  "label": "\uD83C\uDDF3\uD83C\uDDEB +672",
  "value": "672NF"
}, {
  "code": "BN",
  "label": "\uD83C\uDDE7\uD83C\uDDF3 +673",
  "value": "673BN"
}, {
  "code": "NR",
  "label": "\uD83C\uDDF3\uD83C\uDDF7 +674",
  "value": "674NR"
}, {
  "code": "PG",
  "label": "\uD83C\uDDF5\uD83C\uDDEC +675",
  "value": "675PG"
}, {
  "code": "TO",
  "label": "\uD83C\uDDF9\uD83C\uDDF4 +676",
  "value": "676TO"
}, {
  "code": "SB",
  "label": "\uD83C\uDDF8\uD83C\uDDE7 +677",
  "value": "677SB"
}, {
  "code": "VU",
  "label": "\uD83C\uDDFB\uD83C\uDDFA +678",
  "value": "678VU"
}, {
  "code": "FJ",
  "label": "\uD83C\uDDEB\uD83C\uDDEF +679",
  "value": "679FJ"
}, {
  "code": "PW",
  "label": "\uD83C\uDDF5\uD83C\uDDFC +680",
  "value": "680PW"
}, {
  "code": "WF",
  "label": "\uD83C\uDDFC\uD83C\uDDEB +681",
  "value": "681WF"
}, {
  "code": "CK",
  "label": "\uD83C\uDDE8\uD83C\uDDF0 +682",
  "value": "682CK"
}, {
  "code": "NU",
  "label": "\uD83C\uDDF3\uD83C\uDDFA +683",
  "value": "683NU"
}, {
  "code": "WS",
  "label": "\uD83C\uDDFC\uD83C\uDDF8 +685",
  "value": "685WS"
}, {
  "code": "KI",
  "label": "\uD83C\uDDF0\uD83C\uDDEE +686",
  "value": "686KI"
}, {
  "code": "NC",
  "label": "\uD83C\uDDF3\uD83C\uDDE8 +687",
  "value": "687NC"
}, {
  "code": "TV",
  "label": "\uD83C\uDDF9\uD83C\uDDFB +688",
  "value": "688TV"
}, {
  "code": "PF",
  "label": "\uD83C\uDDF5\uD83C\uDDEB +689",
  "value": "689PF"
}, {
  "code": "TK",
  "label": "\uD83C\uDDF9\uD83C\uDDF0 +690",
  "value": "690TK"
}, {
  "code": "FM",
  "label": "\uD83C\uDDEB\uD83C\uDDF2 +691",
  "value": "691FM"
}, {
  "code": "MH",
  "label": "\uD83C\uDDF2\uD83C\uDDED +692",
  "value": "692MH"
}, {
  "code": "RU",
  "label": "\uD83C\uDDF7\uD83C\uDDFA +7",
  "value": "7RU"
}, {
  "code": "KZ",
  "label": "\uD83C\uDDF0\uD83C\uDDFF +77",
  "value": "77KZ"
}, {
  "code": "JP",
  "label": "\uD83C\uDDEF\uD83C\uDDF5 +81",
  "value": "81JP"
}, {
  "code": "KR",
  "label": "\uD83C\uDDF0\uD83C\uDDF7 +82",
  "value": "82KR"
}, {
  "code": "VN",
  "label": "\uD83C\uDDFB\uD83C\uDDF3 +84",
  "value": "84VN"
}, {
  "code": "KP",
  "label": "\uD83C\uDDF0\uD83C\uDDF5 +850",
  "value": "850KP"
}, {
  "code": "HK",
  "label": "\uD83C\uDDED\uD83C\uDDF0 +852",
  "value": "852HK"
}, {
  "code": "MO",
  "label": "\uD83C\uDDF2\uD83C\uDDF4 +853",
  "value": "853MO"
}, {
  "code": "KH",
  "label": "\uD83C\uDDF0\uD83C\uDDED +855",
  "value": "855KH"
}, {
  "code": "LA",
  "label": "\uD83C\uDDF1\uD83C\uDDE6 +856",
  "value": "856LA"
}, {
  "code": "CN",
  "label": "\uD83C\uDDE8\uD83C\uDDF3 +86",
  "value": "86CN"
}, {
  "code": "PN",
  "label": "\uD83C\uDDF5\uD83C\uDDF3 +872",
  "value": "872PN"
}, {
  "code": "BD",
  "label": "\uD83C\uDDE7\uD83C\uDDE9 +880",
  "value": "880BD"
}, {
  "code": "TW",
  "label": "\uD83C\uDDF9\uD83C\uDDFC +886",
  "value": "886TW"
}, {
  "code": "TR",
  "label": "\uD83C\uDDF9\uD83C\uDDF7 +90",
  "value": "90TR"
}, {
  "code": "IN",
  "label": "\uD83C\uDDEE\uD83C\uDDF3 +91",
  "value": "91IN"
}, {
  "code": "PK",
  "label": "\uD83C\uDDF5\uD83C\uDDF0 +92",
  "value": "92PK"
}, {
  "code": "AF",
  "label": "\uD83C\uDDE6\uD83C\uDDEB +93",
  "value": "93AF"
}, {
  "code": "LK",
  "label": "\uD83C\uDDF1\uD83C\uDDF0 +94",
  "value": "94LK"
}, {
  "code": "MM",
  "label": "\uD83C\uDDF2\uD83C\uDDF2 +95",
  "value": "95MM"
}, {
  "code": "MV",
  "label": "\uD83C\uDDF2\uD83C\uDDFB +960",
  "value": "960MV"
}, {
  "code": "LB",
  "label": "\uD83C\uDDF1\uD83C\uDDE7 +961",
  "value": "961LB"
}, {
  "code": "JO",
  "label": "\uD83C\uDDEF\uD83C\uDDF4 +962",
  "value": "962JO"
}, {
  "code": "SY",
  "label": "\uD83C\uDDF8\uD83C\uDDFE +963",
  "value": "963SY"
}, {
  "code": "IQ",
  "label": "\uD83C\uDDEE\uD83C\uDDF6 +964",
  "value": "964IQ"
}, {
  "code": "KW",
  "label": "\uD83C\uDDF0\uD83C\uDDFC +965",
  "value": "965KW"
}, {
  "code": "SA",
  "label": "\uD83C\uDDF8\uD83C\uDDE6 +966",
  "value": "966SA"
}, {
  "code": "YE",
  "label": "\uD83C\uDDFE\uD83C\uDDEA +967",
  "value": "967YE"
}, {
  "code": "OM",
  "label": "\uD83C\uDDF4\uD83C\uDDF2 +968",
  "value": "968OM"
}, {
  "code": "PS",
  "label": "\uD83C\uDDF5\uD83C\uDDF8 +970",
  "value": "970PS"
}, {
  "code": "AE",
  "label": "\uD83C\uDDE6\uD83C\uDDEA +971",
  "value": "971AE"
}, {
  "code": "IL",
  "label": "\uD83C\uDDEE\uD83C\uDDF1 +972",
  "value": "972IL"
}, {
  "code": "BH",
  "label": "\uD83C\uDDE7\uD83C\uDDED +973",
  "value": "973BH"
}, {
  "code": "QA",
  "label": "\uD83C\uDDF6\uD83C\uDDE6 +974",
  "value": "974QA"
}, {
  "code": "BT",
  "label": "\uD83C\uDDE7\uD83C\uDDF9 +975",
  "value": "975BT"
}, {
  "code": "MN",
  "label": "\uD83C\uDDF2\uD83C\uDDF3 +976",
  "value": "976MN"
}, {
  "code": "NP",
  "label": "\uD83C\uDDF3\uD83C\uDDF5 +977",
  "value": "977NP"
}, {
  "code": "IR",
  "label": "\uD83C\uDDEE\uD83C\uDDF7 +98",
  "value": "98IR"
}, {
  "code": "TJ",
  "label": "\uD83C\uDDF9\uD83C\uDDEF +992",
  "value": "992TJ"
}, {
  "code": "TM",
  "label": "\uD83C\uDDF9\uD83C\uDDF2 +993",
  "value": "993TM"
}, {
  "code": "AZ",
  "label": "\uD83C\uDDE6\uD83C\uDDFF +994",
  "value": "994AZ"
}, {
  "code": "GE",
  "label": "\uD83C\uDDEC\uD83C\uDDEA +995",
  "value": "995GE"
}, {
  "code": "KG",
  "label": "\uD83C\uDDF0\uD83C\uDDEC +996",
  "value": "996KG"
}, {
  "code": "UZ",
  "label": "\uD83C\uDDFA\uD83C\uDDFF +998",
  "value": "998UZ"
}];

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: WhatsAppBlockEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsAppBlockEdit", function() { return WhatsAppBlockEdit; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _countrycodes_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./countrycodes.js */ "./src/countrycodes.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icon.js */ "./src/icon.js");










/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



var WhatsAppBlockEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(WhatsAppBlockEdit, _Component);

  function WhatsAppBlockEdit() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, WhatsAppBlockEdit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(WhatsAppBlockEdit).apply(this, arguments));

    _this.setDefaultCountryCode();

    var isValidPhoneNumber = _this.isValidPhoneNumber();

    _this.state = {
      editing: !isValidPhoneNumber,
      isValidPhoneNumber: isValidPhoneNumber
    };
    _this.onSubmitURL = _this.onSubmitURL.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(WhatsAppBlockEdit, [{
    key: "setDefaultCountryCode",
    value: function () {
      var _setDefaultCountryCode = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var countryCode, setAttributes, geoFetch, geo;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                countryCode = this.props.attributes.countryCode;
                setAttributes = this.props.setAttributes;

                if (!(undefined === countryCode)) {
                  _context.next = 12;
                  break;
                }

                setAttributes({
                  countryCode: '1'
                });
                _context.next = 6;
                return fetch('http://ip-api.com/json/?fields=countryCode').then(function (response) {
                  if (!response.ok) {
                    return false;
                  }

                  return response;
                }).catch(function () {
                  return false;
                });

              case 6:
                geoFetch = _context.sent;

                if (!geoFetch) {
                  _context.next = 12;
                  break;
                }

                _context.next = 10;
                return geoFetch.json();

              case 10:
                geo = _context.sent;
                _countrycodes_js__WEBPACK_IMPORTED_MODULE_12__["countryCodes"].forEach(function (item) {
                  if (item.code === geo.countryCode) {
                    setAttributes({
                      countryCode: item.value
                    });
                  }
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setDefaultCountryCode() {
        return _setDefaultCountryCode.apply(this, arguments);
      }

      return setDefaultCountryCode;
    }()
  }, {
    key: "onSubmitURL",
    value: function onSubmitURL(e) {
      e.preventDefault();

      if (this.isValidPhoneNumber()) {
        this.setState({
          editing: false,
          isValidPhoneNumber: true
        });
      } else {
        this.setState({
          isValidPhoneNumber: false
        });
      }
    }
  }, {
    key: "isValidPhoneNumber",
    value: function isValidPhoneNumber() {
      var _this$props$attribute = this.props.attributes,
          countryCode = _this$props$attribute.countryCode,
          phoneNumber = _this$props$attribute.phoneNumber;
      var phoneNumberRegEx = RegExp(/^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, 'g');

      if (undefined === phoneNumber || phoneNumber.length < 1) {
        return false;
      }

      return phoneNumberRegEx.test(countryCode.replace(/\D/g, '') + phoneNumber);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$attribute2 = this.props.attributes,
          countryCode = _this$props$attribute2.countryCode,
          phoneNumber = _this$props$attribute2.phoneNumber,
          buttonText = _this$props$attribute2.buttonText;
      var _this$props = this.props,
          setAttributes = _this$props.setAttributes,
          className = _this$props.className;

      var onFocusPhoneNumber = function onFocusPhoneNumber() {
        _this2.setState({
          isValidPhoneNumber: true
        });
      };

      if (this.state.editing) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Placeholder"], {
          icon: _icon_js__WEBPACK_IMPORTED_MODULE_13__["WhatsAppIcon"],
          label: "WhatsApp",
          instructions: "Enter the phone number for your WhatsApp account:",
          className: className
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("form", {
          onSubmit: this.onSubmitURL
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["SelectControl"], {
          value: countryCode,
          onChange: function onChange(value) {
            return setAttributes({
              countryCode: value
            });
          },
          options: _countrycodes_js__WEBPACK_IMPORTED_MODULE_12__["countryCodes"]
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["TextControl"], {
          placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Your phone number…'),
          onChange: function onChange(value) {
            return setAttributes({
              phoneNumber: value
            });
          },
          onFocus: onFocusPhoneNumber,
          value: phoneNumber
        }), !this.state.isValidPhoneNumber && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Popover"], {
          position: "top center",
          className: "whatsapp-phonenumber-invalid"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
          icon: "info"
        }), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Please enter a valid phone number')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          isLarge: true,
          type: "submit"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Insert'))));
      }

      var toolbarControls = [{
        icon: 'edit',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Edit WhatsApp phone number'),
        onClick: function onClick() {
          return _this2.setState({
            editing: true
          });
        }
      }];
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
        className: className
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Toolbar"], {
        controls: toolbarControls
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__["RichText"], {
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Chat on WhatsApp'),
        keepPlaceholderOnFocus: true,
        value: buttonText,
        onChange: function onChange(value) {
          return setAttributes({
            buttonText: value
          });
        },
        withoutInteractiveFormatting: true,
        allowedFormats: [],
        className: "whatsapp-button",
        tagName: "a"
      }));
    }
  }]);

  return WhatsAppBlockEdit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: WhatsAppIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsAppIcon", function() { return WhatsAppIcon; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External depedencies
 */

var WhatsAppIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M24,11.6909333 C24,18.1477333 18.7256,23.3818667 12.2181333,23.3818667 C10.1522667,23.3818667 8.21146667,22.8538667 6.52293333,21.9272 L0,24 L2.12666667,17.7274667 C1.05386667,15.9658667 0.436,13.8997333 0.436,11.6909333 C0.436,5.23413333 5.71093333,0 12.2181333,0 C18.7261333,0 24,5.23413333 24,11.6909333 Z M12.2181333,1.86186667 C6.75573333,1.86186667 2.31253333,6.2712 2.31253333,11.6909333 C2.31253333,13.8416 3.0136,15.8333333 4.19946667,17.4536 L2.96186667,21.104 L6.76853333,19.8941333 C8.33253333,20.9210667 10.2061333,21.52 12.2184,21.52 C17.68,21.52 22.124,17.1112 22.124,11.6914667 C22.124,6.27173333 17.6802667,1.86186667 12.2181333,1.86186667 Z M18.1677333,14.3834667 C18.0949333,14.2642667 17.9026667,14.1922667 17.6141333,14.0490667 C17.3250667,13.9058667 15.9048,13.2122667 15.6408,13.1170667 C15.376,13.0216 15.1829333,12.9736 14.9906667,13.2602667 C14.7984,13.5472 14.2448,14.1922667 14.076,14.3834667 C13.9074667,14.5752 13.7392,14.5992 13.4501333,14.4557333 C13.1616,14.3125333 12.2312,14.0096 11.128,13.0336 C10.2696,12.2741333 9.68986667,11.3365333 9.52133333,11.0493333 C9.35306667,10.7626667 9.50373333,10.6077333 9.648,10.4650667 C9.77813333,10.3365333 9.93706667,10.1304 10.0813333,9.9632 C10.2261333,9.79573333 10.2741333,9.67653333 10.3698667,9.48506667 C10.4666667,9.29386667 10.4184,9.12666667 10.3458667,8.98293333 C10.2738667,8.83973333 9.69573333,7.4296 9.4552,6.85573333 C9.21466667,6.2824 8.9744,6.37786667 8.8056,6.37786667 C8.63733333,6.37786667 8.44453333,6.35386667 8.252,6.35386667 C8.05946667,6.35386667 7.7464,6.4256 7.4816,6.71226667 C7.21706667,6.9992 6.4712,7.69253333 6.4712,9.1024 C6.4712,10.5125333 7.5056,11.8749333 7.6504,12.0658667 C7.79466667,12.2568 9.64773333,15.2445333 12.5837333,16.392 C15.52,17.5389333 15.52,17.1562667 16.0496,17.1082667 C16.5786667,17.0605333 17.7578667,16.4152 17.9994667,15.7464 C18.2394667,15.0765333 18.2394667,14.5029333 18.1677333,14.3834667 Z"
}));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit.js */ "./src/edit.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon.js */ "./src/icon.js");


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('apeatling/whatsapp-block', {
  title: 'WhatsApp',
  description: 'Allow your visitors to send you a message on WhatsApp with the tap of a button.',
  icon: _icon_js__WEBPACK_IMPORTED_MODULE_5__["WhatsAppIcon"],
  category: 'widgets',
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('whatsapp'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('messenger'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('contact'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('support')],
  supports: {
    align: ['left', 'center', 'right'],
    html: false
  },
  styles: [{
    name: 'default',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Default'),
    isDefault: true
  }, {
    name: 'light',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Light')
  }],
  attributes: {
    countryCode: {
      type: 'string'
    },
    phoneNumber: {
      type: 'string'
    },
    buttonText: {
      type: 'array',
      source: 'children',
      selector: 'a.whatsapp-button'
    }
  },
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_4__["WhatsAppBlockEdit"],
  save: function save(props) {
    var _props$attributes = props.attributes,
        countryCode = _props$attributes.countryCode,
        phoneNumber = _props$attributes.phoneNumber,
        buttonText = _props$attributes.buttonText;
    var fullPhoneNumber = countryCode.replace(/\D/g, '') + phoneNumber;
    var whatsAppUrl = 'https://api.whatsapp.com/send?phone=' + fullPhoneNumber + '&text=&source=&data=';
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: props.className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      className: "whatsapp-button",
      href: whatsAppUrl
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      value: buttonText
    })));
  }
});

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!**********************************************!*\
  !*** external {"this":"regeneratorRuntime"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map