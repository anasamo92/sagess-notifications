(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sagess-notifications"] = factory();
	else
		root["sagess-notifications"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "http://localhost:3000/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	import React, { Component, PropTypes } from 'react';
	import { Provider } from 'react-redux';
	import createStore from './store/create';
	import NotificationCenter from './component/notification-center';
	import { extendConfig, getConfig } from './config';
	import DevTools from './container/dev-tools';
	
	//Import sass files
	import './style';
	
	var isDev = (false);
	var notificationStore = createStore();
	
	function NotificationCenterDev(_ref) {
	    var iconName = _ref.iconName,
	        onSingleClick = _ref.onSingleClick,
	        store = _ref.store,
	        panelFooter = _ref.panelFooter,
	        panelHeader = _ref.panelHeader;
	
	    return React.createElement(
	        Provider,
	        { store: store },
	        React.createElement(
	            'div',
	            null,
	            React.createElement(NotificationCenter, { iconName: iconName, hasAddNotif: false, onSingleClick: onSingleClick, panelHeader: panelHeader, panelFooter: panelFooter }),
	            React.createElement(DevTools, null)
	        )
	    );
	}
	NotificationCenterDev.displayName = 'NotificationCenterDev';
	
	function NotificationCenterProd(_ref2) {
	    var iconName = _ref2.iconName,
	        onSingleClick = _ref2.onSingleClick,
	        store = _ref2.store,
	        panelFooter = _ref2.panelFooter,
	        panelHeader = _ref2.panelHeader;
	
	    return React.createElement(
	        Provider,
	        { store: store },
	        React.createElement(NotificationCenter, { iconName: iconName, hasAddNotif: false, onSingleClick: onSingleClick, panelHeader: panelHeader, panelFooter: panelFooter })
	    );
	}
	NotificationCenterProd.displayName = 'NotificationCenterProd';
	
	var SmartNotificationCenter = function (_Component) {
	    _inherits(SmartNotificationCenter, _Component);
	
	    function SmartNotificationCenter() {
	        _classCallCheck(this, SmartNotificationCenter);
	
	        return _possibleConstructorReturn(this, (SmartNotificationCenter.__proto__ || Object.getPrototypeOf(SmartNotificationCenter)).apply(this, arguments));
	    }
	
	    _createClass(SmartNotificationCenter, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var config = this.props.config;
	
	            extendConfig(config);
	
	            var _getConfig = getConfig(),
	                translateText = _getConfig.translateText,
	                translateDate = _getConfig.translateDate;
	
	            if (!translateText) {
	                console.error('please define a text translation function. ex: translateText: (text) => i18next.t(text)');
	            }
	            if (!translateDate) {
	                console.error('please define a date formatter function. ex: translateDate: (date) => moment(date).forNow()');
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                iconName = _props.iconName,
	                panelFooter = _props.panelFooter,
	                panelHeader = _props.panelHeader;
	
	            var NotificationCenterComponent = isDev ? NotificationCenterDev : NotificationCenterProd;
	            return React.createElement(NotificationCenterComponent, { iconName: iconName, onSingleClick: this.props.onSingleClick, store: notificationStore, panelHeader: panelHeader, panelFooter: panelFooter });
	        }
	    }]);
	
	    return SmartNotificationCenter;
	}(Component);
	
	SmartNotificationCenter.displayName = 'SmartNotificationCenter';
	SmartNotificationCenter.propTypes = {
	    config: PropTypes.object,
	    iconName: PropTypes.string
	};
	export default SmartNotificationCenter;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=sagess-notifications.js.map