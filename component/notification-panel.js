var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PropTypes, PureComponent } from 'react';
import NotificationGroup from './notification-group';
import NotificationAdd from './notification-add';
import NotificationError from './notification-error';

import { addNotification, readNotification, readNotificationGroup, closeCenter } from '../actions';
import { fetchNotifications } from '../actions/fetch-notifications';
import { getConfig } from '../config';

function translate(key) {
    var _getConfig = getConfig(),
        translateText = _getConfig.translateText;

    return translateText(key);
}

var NotificationCenterPanel = function (_PureComponent) {
    _inherits(NotificationCenterPanel, _PureComponent);

    function NotificationCenterPanel(props) {
        _classCallCheck(this, NotificationCenterPanel);

        var _this = _possibleConstructorReturn(this, (NotificationCenterPanel.__proto__ || Object.getPrototypeOf(NotificationCenterPanel)).call(this, props));

        _this._hideBodyOverflow = _this._hideBodyOverflow.bind(_this);
        _this._restoreBodyOverflow = _this._restoreBodyOverflow.bind(_this);
        _this._onClosePanel = _this._onClosePanel.bind(_this);
        return _this;
    }

    _createClass(NotificationCenterPanel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._hideBodyOverflow();
        }
        /**
        * Store the body overgflow property, and set it to hidden
        */

    }, {
        key: '_hideBodyOverflow',
        value: function _hideBodyOverflow() {
            document.body.style['overflow-y'] = 'hidden';
        }
        /**
        * Restore body overflow property
        */

    }, {
        key: '_restoreBodyOverflow',
        value: function _restoreBodyOverflow() {
            document.body.style['overflow-y'] = 'auto';
        }
    }, {
        key: '_onClosePanel',
        value: function _onClosePanel(evt) {
            var onClosePanel = this.props.onClosePanel;

            onClosePanel(evt);
            this._restoreBodyOverflow();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                hasAddNotif = _props.hasAddNotif,
                isFetching = _props.isFetching,
                unreadNotifs = _props.unreadNotifs,
                onGroupRead = _props.onGroupRead,
                onSingleRead = _props.onSingleRead,
                onSingleClick = _props.onSingleClick,
                onTitleClick = _props.onTitleClick,
                onAddClick = _props.onAddClick,
                onDismissError = _props.onDismissError,
                error = _props.error,
                zIndex = _props.zIndex,
                panelHeader = _props.panelHeader,
                panelFooter = _props.panelFooter;

            var _getConfig2 = getConfig(),
                translateText = _getConfig2.translateText;

            var hasNotifications = unreadNotifs.length > 0;
            return React.createElement(
                'div',
                { style: { zIndex: zIndex, top: 0, right: 0, position: 'fixed' } },
                React.createElement('div', { 'data-focus': 'notification-center-overlay', className: 'fade-in', onClick: this._onClosePanel, style: { zIndex: 1 } }),
                React.createElement(
                    'div',
                    { 'data-focus': 'notification-center-panel', className: 'bounce-in-right', 'data-fetching': isFetching, style: { zIndex: 2 } },
                    React.createElement(
                        'header',
                        null,
                        React.createElement(
                            'button',
                            { className: 'mdl-button mdl-button--icon', 'data-focus': 'notification-center-close', onClick: this._onClosePanel },
                            React.createElement(
                                'i',
                                { className: 'material-icons' },
                                'clear'
                            )
                        ),
                        React.createElement(
                            'h1',
                            { onClick: onTitleClick },
                            translateText('focus.notifications.title')
                        ),
                        panelHeader && panelHeader
                    ),
                    hasAddNotif && React.createElement(NotificationAdd, { onAddClick: onAddClick }),
                    error && React.createElement(NotificationError, Object.assign({ onDismiss: onDismissError }, error)),
                    hasNotifications && React.createElement(NotificationGroup, {
                        data: unreadNotifs,
                        onGroupRead: onGroupRead,
                        onSingleRead: onSingleRead,
                        onSingleClick: onSingleClick }),
                    !hasNotifications && React.createElement(
                        'div',
                        { className: 'no-notification' },
                        translate('focus.notifications.nothing')
                    ),
                    panelFooter && React.createElement(
                        'footer',
                        null,
                        panelFooter
                    )
                )
            );
        }
    }]);

    return NotificationCenterPanel;
}(PureComponent);

NotificationCenterPanel.displayName = 'NotificationCenterPanel';
NotificationCenterPanel.propTypes = {
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    onDismissError: PropTypes.func.isRequired,
    hasAddNotif: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    unreadNotifs: PropTypes.array.isRequired,
    onGroupRead: PropTypes.func.isRequired,
    onSingleClick: PropTypes.func.isRequired,
    onSingleRead: PropTypes.func.isRequired,
    onClosePanel: PropTypes.func.isRequired,
    onTitleClick: PropTypes.func.isRequired,
    onAddClick: PropTypes.func.isRequired,
    zIndex: PropTypes.number.isRequired
};
export default NotificationCenterPanel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJQdXJlQ29tcG9uZW50IiwiTm90aWZpY2F0aW9uR3JvdXAiLCJOb3RpZmljYXRpb25BZGQiLCJOb3RpZmljYXRpb25FcnJvciIsImFkZE5vdGlmaWNhdGlvbiIsInJlYWROb3RpZmljYXRpb24iLCJyZWFkTm90aWZpY2F0aW9uR3JvdXAiLCJjbG9zZUNlbnRlciIsImZldGNoTm90aWZpY2F0aW9ucyIsImdldENvbmZpZyIsInRyYW5zbGF0ZSIsImtleSIsInRyYW5zbGF0ZVRleHQiLCJOb3RpZmljYXRpb25DZW50ZXJQYW5lbCIsInByb3BzIiwiX2hpZGVCb2R5T3ZlcmZsb3ciLCJiaW5kIiwiX3Jlc3RvcmVCb2R5T3ZlcmZsb3ciLCJfb25DbG9zZVBhbmVsIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJldnQiLCJvbkNsb3NlUGFuZWwiLCJoYXNBZGROb3RpZiIsImlzRmV0Y2hpbmciLCJ1bnJlYWROb3RpZnMiLCJvbkdyb3VwUmVhZCIsIm9uU2luZ2xlUmVhZCIsIm9uU2luZ2xlQ2xpY2siLCJvblRpdGxlQ2xpY2siLCJvbkFkZENsaWNrIiwib25EaXNtaXNzRXJyb3IiLCJlcnJvciIsInpJbmRleCIsInBhbmVsSGVhZGVyIiwicGFuZWxGb290ZXIiLCJoYXNOb3RpZmljYXRpb25zIiwibGVuZ3RoIiwidG9wIiwicmlnaHQiLCJwb3NpdGlvbiIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiYm9vbCIsIm9iamVjdCIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFlQyxTQUFmLEVBQTBCQyxhQUExQixRQUE4QyxPQUE5QztBQUNBLE9BQU9DLGlCQUFQLE1BQThCLHNCQUE5QjtBQUNBLE9BQU9DLGVBQVAsTUFBNEIsb0JBQTVCO0FBQ0EsT0FBT0MsaUJBQVAs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QVYsQ0FBZUMsVUFWRztBQVdoQ2pCLGdCQUFZaEMsVUFBVWdELElBQVYsQ0FBZUMsVUFYSztBQVloQ2QsWUFBUW5DLFVBQVVtRCxNQUFWLENBQWlCRjtBQVpPLENBQXBDO0FBY0EsZUFBZW5DLHVCQUFmIiwiZmlsZSI6InNob3J0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMsIFB1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbkdyb3VwIGZyb20gJy4vbm90aWZpY2F0aW9uLWdyb3VwJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbkFkZCBmcm9tICcuL25vdGlmaWNhdGlvbi1hZGQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uRXJyb3IgZnJvbSAnLi9ub3RpZmljYXRpb24tZXJyb3InO1xyXG5cclxuaW1wb3J0IHsgYWRkTm90aWZpY2F0aW9uLCByZWFkTm90aWZpY2F0aW9uLCByZWFkTm90aWZpY2F0aW9uR3JvdXAsIGNsb3NlQ2VudGVyIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IGZldGNoTm90aWZpY2F0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvZmV0Y2gtbm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCB7Z2V0Q29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZnVuY3Rpb24gdHJhbnNsYXRlKGtleSkge1xyXG4gICAgY29uc3Qge3RyYW5zbGF0ZVRleHR9ID0gZ2V0Q29uZmlnKCk7XHJcbiAgICByZXR1cm4gdHJhbnNsYXRlVGV4dChrZXkpO1xyXG59XHJcblxyXG5jbGFzcyBOb3RpZmljYXRpb25DZW50ZXJQYW5lbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5faGlkZUJvZHlPdmVyZmxvdyA9IHRoaXMuX2hpZGVCb2R5T3ZlcmZsb3cuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9yZXN0b3JlQm9keU92ZXJmbG93ID0gdGhpcy5fcmVzdG9yZUJvZHlPdmVyZmxvdy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX29uQ2xvc2VQYW5lbCA9IHRoaXMuX29uQ2xvc2VQYW5lbC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5faGlkZUJvZHlPdmVyZmxvdygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAqIFN0b3JlIHRoZSBib2R5IG92ZXJnZmxvdyBwcm9wZXJ0eSwgYW5kIHNldCBpdCB0byBoaWRkZW5cclxuICAgICovXHJcbiAgICBfaGlkZUJvZHlPdmVyZmxvdygpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlWydvdmVyZmxvdy15J10gPSAnaGlkZGVuJztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgKiBSZXN0b3JlIGJvZHkgb3ZlcmZsb3cgcHJvcGVydHlcclxuICAgICovXHJcbiAgICBfcmVzdG9yZUJvZHlPdmVyZmxvdygpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlWydvdmVyZmxvdy15J10gPSAnYXV0byc7XHJcbiAgICB9XHJcbiAgICBfb25DbG9zZVBhbmVsKGV2dCkge1xyXG4gICAgICAgIGNvbnN0IHtvbkNsb3NlUGFuZWx9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBvbkNsb3NlUGFuZWwoZXZ0KTtcclxuICAgICAgICB0aGlzLl9yZXN0b3JlQm9keU92ZXJmbG93KCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2hhc0FkZE5vdGlmLCBpc0ZldGNoaW5nLCB1bnJlYWROb3RpZnMsIG9uR3JvdXBSZWFkLCBvblNpbmdsZVJlYWQsIG9uU2luZ2xlQ2xpY2ssIG9uVGl0bGVDbGljaywgb25BZGRDbGljaywgb25EaXNtaXNzRXJyb3IsIGVycm9yLCB6SW5kZXgsIHBhbmVsSGVhZGVyLCBwYW5lbEZvb3Rlcn0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHt0cmFuc2xhdGVUZXh0fSA9IGdldENvbmZpZygpO1xyXG4gICAgICAgIGNvbnN0IGhhc05vdGlmaWNhdGlvbnMgPSB1bnJlYWROb3RpZnMubGVuZ3RoID4gMDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ekluZGV4LCB0b3A6IDAsIHJpZ2h0OiAwLCBwb3NpdGlvbjogJ2ZpeGVkJ319PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdub3RpZmljYXRpb24tY2VudGVyLW92ZXJsYXknIGNsYXNzTmFtZT0nZmFkZS1pbicgb25DbGljaz17dGhpcy5fb25DbG9zZVBhbmVsfSBzdHlsZT17e3pJbmRleDogMX19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdub3RpZmljYXRpb24tY2VudGVyLXBhbmVsJyBjbGFzc05hbWU9J2JvdW5jZS1pbi1yaWdodCcgZGF0YS1mZXRjaGluZz17aXNGZXRjaGluZ30gc3R5bGU9e3t6SW5kZXg6IDJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbWRsLWJ1dHRvbiBtZGwtYnV0dG9uLS1pY29uJyBkYXRhLWZvY3VzPSdub3RpZmljYXRpb24tY2VudGVyLWNsb3NlJyBvbkNsaWNrPXt0aGlzLl9vbkNsb3NlUGFuZWx9PjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+eydjbGVhcid9PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgb25DbGljaz17b25UaXRsZUNsaWNrfT57dHJhbnNsYXRlVGV4dCgnZm9jdXMubm90aWZpY2F0aW9ucy50aXRsZScpfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYW5lbEhlYWRlciAmJiBwYW5lbEhlYWRlcn1cclxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICB7aGFzQWRkTm90aWYgJiYgPE5vdGlmaWNhdGlvbkFkZCBvbkFkZENsaWNrPXtvbkFkZENsaWNrfSAvPn1cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPE5vdGlmaWNhdGlvbkVycm9yIG9uRGlzbWlzcz17b25EaXNtaXNzRXJyb3J9IHsuLi5lcnJvcn0vPn1cclxuICAgICAgICAgICAgICAgICAgICB7aGFzTm90aWZpY2F0aW9ucyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3VucmVhZE5vdGlmc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uR3JvdXBSZWFkPXtvbkdyb3VwUmVhZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2luZ2xlUmVhZD17b25TaW5nbGVSZWFkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TaW5nbGVDbGljaz17b25TaW5nbGVDbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFoYXNOb3RpZmljYXRpb25zICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduby1ub3RpZmljYXRpb24nPnt0cmFuc2xhdGUoJ2ZvY3VzLm5vdGlmaWNhdGlvbnMubm90aGluZycpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7cGFuZWxGb290ZXIgJiYgPGZvb3Rlcj57cGFuZWxGb290ZXJ9PC9mb290ZXI+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuTm90aWZpY2F0aW9uQ2VudGVyUGFuZWwuZGlzcGxheU5hbWUgPSAnTm90aWZpY2F0aW9uQ2VudGVyUGFuZWwnO1xyXG5Ob3RpZmljYXRpb25DZW50ZXJQYW5lbC5wcm9wVHlwZXMgPSB7XHJcbiAgICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5vYmplY3RdKSxcclxuICAgIG9uRGlzbWlzc0Vycm9yOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgaGFzQWRkTm90aWY6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICBpc0ZldGNoaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gICAgdW5yZWFkTm90aWZzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAgIG9uR3JvdXBSZWFkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgb25TaW5nbGVDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG9uU2luZ2xlUmVhZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2xvc2VQYW5lbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG9uVGl0bGVDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG9uQWRkQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25DZW50ZXJQYW5lbDtcclxuIl19