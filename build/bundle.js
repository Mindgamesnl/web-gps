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
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _libCoordinate = __webpack_require__(1);
	
	var _libCoordinate2 = _interopRequireDefault(_libCoordinate);
	
	var WebGPS = (function () {
	    function WebGPS(onUpdate, onError) {
	        var _this = this;
	
	        _classCallCheck(this, WebGPS);
	
	        this.onUpdate = onUpdate;
	        this.onError = onError;
	        this._trackers = [];
	
	        navigator.geolocation.watchPosition(function (update) {
	            _this._locationUpdate(update.coords.latitude, update.coords.longitude);
	        }, this.onError, { enableHighAccuracy: true });
	    }
	
	    _createClass(WebGPS, [{
	        key: "trackLocation",
	        value: function trackLocation(data, lat, long) {
	            this._trackers.push({
	                data: data,
	                coordinates: new _libCoordinate2["default"](lat, long)
	            });
	        }
	    }, {
	        key: "_locationUpdate",
	        value: function _locationUpdate(lat, long) {
	            var currentLocation = new _libCoordinate2["default"](lat, long);
	            var trackingDistances = [];
	
	            this._trackers.forEach(function (tracker) {
	                var distance = tracker.coordinates.distanceInMeters(currentLocation);
	                trackingDistances.push({
	                    meters: distance,
	                    tracker: tracker.data
	                });
	            });
	
	            this.onUpdate(trackingDistances);
	        }
	    }]);
	
	    return WebGPS;
	})();
	
	window.WebGPS = WebGPS;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Coordinate = (function () {
	    function Coordinate(latitude, longitude) {
	        _classCallCheck(this, Coordinate);
	
	        this.latitude = latitude;
	        this.longitude = longitude;
	    }
	
	    _createClass(Coordinate, [{
	        key: "distanceInMeters",
	        value: function distanceInMeters(otherCoordinate) {
	            return this.distanceInKilometers(otherCoordinate) * 1000;
	        }
	    }, {
	        key: "distanceInKilometers",
	        value: function distanceInKilometers(otherCoordinate) {
	            var R = 6371; // Radius of the earth in km
	            var dLat = this._degreesToRadians(otherCoordinate.latitude - this.latitude); // deg2rad below
	            var dLon = this._degreesToRadians(otherCoordinate.longitude - this.longitude);
	            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this._degreesToRadians(this.latitude)) * Math.cos(this._degreesToRadians(otherCoordinate.latitude)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
	            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	            return R * c; // Distance in km
	        }
	    }, {
	        key: "_degreesToRadians",
	        value: function _degreesToRadians(deg) {
	            return deg * (Math.PI / 180);
	        }
	    }]);
	
	    return Coordinate;
	})();
	
	exports["default"] = Coordinate;
	module.exports = exports["default"];

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map