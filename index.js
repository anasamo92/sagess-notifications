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

var isDev = __DEV__;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJQcm92aWRlciIsImNyZWF0ZVN0b3JlIiwiTm90aWZpY2F0aW9uQ2VudGVyIiwiZXh0ZW5kQ29uZmlnIiwiZ2V0Q29uZmlnIiwiRGV2VG9vbHMiLCJpc0RldiIsIl9fREVWX18iLCJub3RpZmljYXRpb25TdG9yZSIsIk5vdGlmaWNhdGlvbkNlbnRlckRldiIsImljb25OYW1lIiwib25TaW5nbGVDbGljayIsInN0b3JlIiwicGFuZWxGb290ZXIiLCJwYW5lbEhlYWRlciIsImRpc3BsYXlOYW1lIiwiTm90aWZpY2F0aW9uQ2VudGVyUHJvZCIsIlNtYXJ0Tm90aWZpY2F0aW9uQ2VudGVyIiwiY29uZmlnIiwicHJvcHMiLCJ0cmFuc2xhdGVUZXh0IiwidHJhbnNsYXRlRGF0ZSIsImNvbnNvbGUiLCJlcnJvciIsIk5vdGlmaWNhdGlvbkNlbnRlckNvbXBvbmVudCIsInByb3BUeXBlcyIsIm9iamVjdCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWlCQyxTQUFqQixFQUE2QkMsU0FBN0IsUUFBNkMsT0FBN0M7QUFDQSxTQUFTQyxRQUFULFFBQXlCLGFBQXpCO0FBQ0EsT0FBT0MsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxrQkFBUCxNQUErQixpQ0FBL0I7QUFDQSxTQUFRQyxZQUFSLEVBQXNCQyxTQUF0QixRQUFzQyxVQUF0QztBQUNBLE9BQU9DLFFBQVAsTUFBcUIsdUJBQXJCOztBQUVBO0FBQ0EsT0FBTyxTQUFQOztBQUVBLElBQU1DLFFBQVFDLE9BQWQ7QUFDQSxJQUFNQyxvQkFBb0JQLGFBQTFCOztBQUVBLFNBQVNRLHFCQUFULE9BQTJGO0FBQUEsUUFBM0RDLFFBQTJELFFBQTNEQSxRQUEyRDtBQUFBLFFBQWpEQyxhQUFpRCxRQUFqREEsYUFBaUQ7QUFBQSxRQUFsQ0MsS0FBa0MsUUFBbENBLEtBQWtDO0FBQUEsUUFBM0JDLFdBQTJCLFFBQTNCQSxXQUEyQjtBQUFBLFFBQWRDLFdBQWMsUUFBZEEsV0FBYzs7QUFDdkYsV0FDSTtBQUFDLGdCQUFEO0FBQUEsVUFBVSxPQUFPRixLQUFqQjtBQUNJO0FBQUE7QUFBQTtBQUNJLGdDQUFDLGtCQUFELElBQW9CLFVBQVVGLFFBQTlCLEVBQXdDLGFBQWEsS0FBckQsRUFBNEQsZUFBZUMsYUFBM0UsRUFBMEYsYUFBYUcsV0FBdkcsRUFBb0gsYUFBYUQsV0FBakksR0FESjtBQUVJLGdDQUFDLFFBQUQ7QUFGSjtBQURKLEtBREo7QUFRSDtBQUNESixzQkFBc0JNLFdBQXRCLEdBQW9DLHVCQUFwQzs7QUFJQSxTQUFTQyxzQkFBVCxRQUE0RjtBQUFBLFFBQTNETixRQUEyRCxTQUEzREEsUUFBMkQ7QUFBQSxRQUFqREMsYUFBaUQsU0FBakRBLGFBQWlEO0FBQUEsUUFBbENDLEtBQWtDLFNBQWxDQSxLQUFrQztBQUFBLFFBQTNCQyxXQUEyQixTQUEzQkEsV0FBMkI7QUFBQSxRQUFkQyxXQUFjLFNBQWRBLFdBQWM7O0FBQ3hGLFdBQ0k7QUFBQyxnQkFBRDtBQUFBLFVBQVUsT0FBT0YsS0FBakI7QUFDSSw0QkFBQyxrQkFBRCxJQUFvQixVQUFVRixRQUE5QixFQUF3QyxhQUFhLEtBQXJELEVBQTRELGVBQWVDLGFBQTNFLEVBQTBGLGFBQWFHLFdBQXZHLEVBQW9ILGFBQWFELFdBQWpJO0FBREosS0FESjtBQUtIO0FBQ0RHLHVCQUF1QkQsV0FBdkIsR0FBcUMsd0JBQXJDOztJQUlNRSx1Qjs7Ozs7Ozs7Ozs7NkNBQ21CO0FBQUEsZ0JBQ1ZDLE1BRFUsR0FDQSxLQUFLQyxLQURMLENBQ1ZELE1BRFU7O0FBRWpCZix5QkFBYWUsTUFBYjs7QUFGaUIsNkJBR3NCZCxXQUh0QjtBQUFBLGdCQUdWZ0IsYUFIVSxjQUdWQSxhQUhVO0FBQUEsZ0JBR0tDLGFBSEwsY0FHS0EsYUFITDs7QUFJakIsZ0JBQUcsQ0FBQ0QsYUFBSixFQUFtQjtBQUNmRSx3QkFBUUMsS0FBUixDQUFjLHlGQUFkO0FBQ0g7QUFDRCxnQkFBRyxDQUFDRixhQUFKLEVBQW1CO0FBQ2ZDLHdCQUFRQyxLQUFSLENBQWMsNkZBQWQ7QUFDSDtBQUNKOzs7aUNBQ1E7QUFBQSx5QkFDd0MsS0FBS0osS0FEN0M7QUFBQSxnQkFDRVQsUUFERixVQUNFQSxRQURGO0FBQUEsZ0JBQ1lHLFdBRFosVUFDWUEsV0FEWjtBQUFBLGdCQUN5QkMsV0FEekIsVUFDeUJBLFdBRHpCOztBQUVMLGdCQUFNVSw4QkFBOEJsQixRQUFRRyxxQkFBUixHQUFnQ08sc0JBQXBFO0FBQ0EsbUJBQU8sb0JBQUMsMkJBQUQsSUFBNkIsVUFBVU4sUUFBdkMsRUFBaUQsZUFBZSxLQUFLUyxLQUFMLENBQVdSLGFBQTNFLEVBQTBGLE9BQU9ILGlCQUFqRyxFQUFvSCxhQUFhTSxXQUFqSSxFQUE4SSxhQUFhRCxXQUEzSixHQUFQO0FBQ0g7Ozs7RUFoQmlDZixTOztBQWtCdENtQix3QkFBd0JGLFdBQXhCLEdBQXNDLHlCQUF0QztBQUNBRSx3QkFBd0JRLFNBQXhCLEdBQW9DO0FBQ2hDUCxZQUFRbkIsVUFBVTJCLE1BRGM7QUFFaENoQixjQUFVWCxVQUFVNEI7QUFGWSxDQUFwQztBQUlBLGVBQWVWLHVCQUFmIiwiZmlsZSI6InNob3J0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLCB7IENvbXBvbmVudCAsIFByb3BUeXBlcyB9ZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4vc3RvcmUvY3JlYXRlJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbkNlbnRlciBmcm9tICcuL2NvbXBvbmVudC9ub3RpZmljYXRpb24tY2VudGVyJztcclxuaW1wb3J0IHtleHRlbmRDb25maWcsIGdldENvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgRGV2VG9vbHMgZnJvbSAnLi9jb250YWluZXIvZGV2LXRvb2xzJztcclxuXHJcbi8vSW1wb3J0IHNhc3MgZmlsZXNcclxuaW1wb3J0ICcuL3N0eWxlJztcclxuXHJcbmNvbnN0IGlzRGV2ID0gX19ERVZfXztcclxuY29uc3Qgbm90aWZpY2F0aW9uU3RvcmUgPSBjcmVhdGVTdG9yZSgpO1xyXG5cclxuZnVuY3Rpb24gTm90aWZpY2F0aW9uQ2VudGVyRGV2KHtpY29uTmFtZSwgb25TaW5nbGVDbGljaywgc3RvcmUsIHBhbmVsRm9vdGVyLCBwYW5lbEhlYWRlcn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uQ2VudGVyIGljb25OYW1lPXtpY29uTmFtZX0gaGFzQWRkTm90aWY9e2ZhbHNlfSBvblNpbmdsZUNsaWNrPXtvblNpbmdsZUNsaWNrfSBwYW5lbEhlYWRlcj17cGFuZWxIZWFkZXJ9IHBhbmVsRm9vdGVyPXtwYW5lbEZvb3Rlcn0vPlxyXG4gICAgICAgICAgICAgICAgPERldlRvb2xzLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuTm90aWZpY2F0aW9uQ2VudGVyRGV2LmRpc3BsYXlOYW1lID0gJ05vdGlmaWNhdGlvbkNlbnRlckRldic7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIE5vdGlmaWNhdGlvbkNlbnRlclByb2Qoe2ljb25OYW1lLCBvblNpbmdsZUNsaWNrLCBzdG9yZSwgcGFuZWxGb290ZXIsIHBhbmVsSGVhZGVyfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvbkNlbnRlciBpY29uTmFtZT17aWNvbk5hbWV9IGhhc0FkZE5vdGlmPXtmYWxzZX0gb25TaW5nbGVDbGljaz17b25TaW5nbGVDbGlja30gcGFuZWxIZWFkZXI9e3BhbmVsSGVhZGVyfSBwYW5lbEZvb3Rlcj17cGFuZWxGb290ZXJ9IC8+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuTm90aWZpY2F0aW9uQ2VudGVyUHJvZC5kaXNwbGF5TmFtZSA9ICdOb3RpZmljYXRpb25DZW50ZXJQcm9kJztcclxuXHJcblxyXG5cclxuY2xhc3MgU21hcnROb3RpZmljYXRpb25DZW50ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHtjb25maWd9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBleHRlbmRDb25maWcoY29uZmlnKTtcclxuICAgICAgICBjb25zdCB7dHJhbnNsYXRlVGV4dCwgdHJhbnNsYXRlRGF0ZX0gPSBnZXRDb25maWcoKTtcclxuICAgICAgICBpZighdHJhbnNsYXRlVGV4dCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdwbGVhc2UgZGVmaW5lIGEgdGV4dCB0cmFuc2xhdGlvbiBmdW5jdGlvbi4gZXg6IHRyYW5zbGF0ZVRleHQ6ICh0ZXh0KSA9PiBpMThuZXh0LnQodGV4dCknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRyYW5zbGF0ZURhdGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcigncGxlYXNlIGRlZmluZSBhIGRhdGUgZm9ybWF0dGVyIGZ1bmN0aW9uLiBleDogdHJhbnNsYXRlRGF0ZTogKGRhdGUpID0+IG1vbWVudChkYXRlKS5mb3JOb3coKScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7aWNvbk5hbWUsIHBhbmVsRm9vdGVyLCBwYW5lbEhlYWRlcn0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IE5vdGlmaWNhdGlvbkNlbnRlckNvbXBvbmVudCA9IGlzRGV2ID8gTm90aWZpY2F0aW9uQ2VudGVyRGV2IDogTm90aWZpY2F0aW9uQ2VudGVyUHJvZDtcclxuICAgICAgICByZXR1cm4gPE5vdGlmaWNhdGlvbkNlbnRlckNvbXBvbmVudCBpY29uTmFtZT17aWNvbk5hbWV9IG9uU2luZ2xlQ2xpY2s9e3RoaXMucHJvcHMub25TaW5nbGVDbGlja30gc3RvcmU9e25vdGlmaWNhdGlvblN0b3JlfSBwYW5lbEhlYWRlcj17cGFuZWxIZWFkZXJ9IHBhbmVsRm9vdGVyPXtwYW5lbEZvb3Rlcn0vPlxyXG4gICAgfVxyXG59XHJcblNtYXJ0Tm90aWZpY2F0aW9uQ2VudGVyLmRpc3BsYXlOYW1lID0gJ1NtYXJ0Tm90aWZpY2F0aW9uQ2VudGVyJztcclxuU21hcnROb3RpZmljYXRpb25DZW50ZXIucHJvcFR5cGVzID0ge1xyXG4gICAgY29uZmlnOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaWNvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU21hcnROb3RpZmljYXRpb25DZW50ZXI7XHJcbiJdfQ==