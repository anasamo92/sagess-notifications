var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Dependencies
import React, { PropTypes, PureComponent } from 'react';
import NotificationCenterIcon from './notification-center-icon';
import NotificationReceiver from './notification-receiver';
import NotificationPanel from './notification-panel';
import { connect } from 'react-redux';
import { addNotification, setVisibilityFilter, openCenter as _openCenter, closeCenter } from '../actions';
import { deleteNotification, deleteGroupNotification } from '../actions/delete-notification';
import { fetchNotifications } from '../actions/fetch-notifications';
import { dismissNotification } from '../actions/receive-notifications';
import { clearError } from '../actions/error';
import polling from '../util/polling';

// Notification center component

var NotificationCenter = function (_PureComponent) {
    _inherits(NotificationCenter, _PureComponent);

    function NotificationCenter() {
        _classCallCheck(this, NotificationCenter);

        return _possibleConstructorReturn(this, (NotificationCenter.__proto__ || Object.getPrototypeOf(NotificationCenter)).apply(this, arguments));
    }

    _createClass(NotificationCenter, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            //build a polling timeout.
            var _props = this.props,
                pollingTimer = _props.pollingTimer,
                dispatch = _props.dispatch;

            polling(function () {
                dispatch(fetchNotifications(null, _this2.lastFetch));
                _this2.lastFetch = new Date().toISOString();
            }, pollingTimer);
            dispatch(fetchNotifications());
            this.lastFetch = new Date().toISOString();
        }
        //componentWillUnMount() {
        //    clearTimeout(this.pollingTimeoutID)
        //}
        //Should be replaced by a promise.cancel

    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                dispatch = _props2.dispatch,
                hasAddNotif = _props2.hasAddNotif,
                notificationList = _props2.notificationList,
                iconName = _props2.iconName,
                isOpen = _props2.isOpen,
                isFetching = _props2.isFetching,
                notificationReceiver = _props2.notificationReceiver,
                onSingleClick = _props2.onSingleClick,
                error = _props2.error,
                zIndex = _props2.zIndex,
                panelHeader = _props2.panelHeader,
                panelFooter = _props2.panelFooter;
            var notificationsReceived = notificationReceiver.notificationsReceived,
                hasFetchedOnce = notificationReceiver.hasFetchedOnce;

            //display only the undred notifications

            var unreadNotifs = notificationList.filter(function (n) {
                return !n.read;
            });
            return React.createElement(
                'div',
                { 'data-focus': 'notification-center' },
                React.createElement(NotificationCenterIcon, {
                    iconName: iconName,
                    number: unreadNotifs.length,
                    openCenter: function openCenter() {
                        return dispatch(_openCenter());
                    } }),
                !isOpen && hasFetchedOnce && React.createElement(NotificationReceiver, {
                    data: notificationsReceived,
                    onDismiss: function onDismiss(notifId) {
                        return dispatch(dismissNotification(notifId));
                    },
                    zIndex: zIndex }),
                isOpen && React.createElement(NotificationPanel, {
                    error: error,
                    hasAddNotif: hasAddNotif,
                    isFetching: isFetching,
                    onAddClick: function onAddClick(data) {
                        return dispatch(addNotification(data));
                    },
                    onClosePanel: function onClosePanel() {
                        return dispatch(closeCenter());
                    },
                    onDismissError: function onDismissError() {
                        return dispatch(clearError());
                    },
                    onSingleClick: onSingleClick,
                    onGroupRead: function onGroupRead(data) {
                        return dispatch(deleteGroupNotification(data));
                    },
                    onSingleRead: function onSingleRead(data) {
                        return dispatch(deleteNotification(data));
                    },
                    onTitleClick: function onTitleClick() {
                        return dispatch(fetchNotifications());
                    },
                    unreadNotifs: unreadNotifs,
                    zIndex: zIndex,
                    panelHeader: panelHeader,
                    panelFooter: panelFooter
                })
            );
        }
    }]);

    return NotificationCenter;
}(PureComponent);

NotificationCenter.displayName = 'NotificationCenter';
NotificationCenter.propTypes = {
    dispatch: PropTypes.func,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    hasAddNotif: PropTypes.bool,
    iconName: PropTypes.string,
    isFetching: PropTypes.bool,
    isOpen: PropTypes.bool,
    notificationList: PropTypes.array,
    notificationReceiver: PropTypes.object,
    onSingleClick: PropTypes.func.isRequired,
    pollingTimer: PropTypes.number,
    zIndex: PropTypes.number
};
NotificationCenter.defaultProps = {
    hasAddNotif: false,
    pollingTimer: 6 * 10 * 1000, //1 min
    zIndex: 16777271
};

// Select the notification from the state.
function selectNotifications(notificationList, filter) {
    return notificationList;
}

// Select the part of the state.
function select(state) {
    var notificationList = state.notificationList,
        visibilityFilter = state.visibilityFilter,
        otherStateProperties = _objectWithoutProperties(state, ['notificationList', 'visibilityFilter']);

    return Object.assign({
        //select the notification list from the state
        notificationList: selectNotifications(notificationList, visibilityFilter),
        visibilityFilter: visibilityFilter
    }, otherStateProperties);
}

// connect the notification center to the state.
export default connect(select)(NotificationCenter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJQdXJlQ29tcG9uZW50IiwiTm90aWZpY2F0aW9uQ2VudGVySWNvbiIsIk5vdGlmaWNhdGlvblJlY2VpdmVyIiwiTm90aWZpY2F0aW9uUGFuZWwiLCJjb25uZWN0IiwiYWRkTm90aWZpY2F0aW9uIiwic2V0VmlzaWJpbGl0eUZpbHRlciIsIm9wZW5DZW50ZXIiLCJjbG9zZUNlbnRlciIsImRlbGV0ZU5vdGlmaWNhdGlvbiIsImRlbGV0ZUdyb3VwTm90aWZpY2F0aW9uIiwiZmV0Y2hOb3RpZmljYXRpb25zIiwiZGlzbWlzc05vdGlmaWNhdGlvbiIsImNsZWFyRXJyb3IiLCJwb2xsaW5nIiwiTm90aWZpY2F0aW9uQ2VudGVyIiwicHJvcHMiLCJwb2xsaW5nVGltZXIiLCJkaXNwYXRjaCIsImxhc3RGZXRjaCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImhhc0FkZE5vdGlmIiwibm90aWZpY2F0aW9uTGlzdCIsImljb25OYW1lIiwiaXNPcGVuIiwiaXNGZXRjaGluZyIsIm5vdGlmaWNhdGlvblJlY2VpdmVyIiwib25TaW5nbGVDbGljayIsImVycm9yIiwiekluZGV4IiwicGFuZWxIZWFkZXIiLCJwYW5lbEZvb3RlciIsIm5vdGlmaWNhdGlvbnNSZWNlaXZlZCIsImhhc0ZldGNoZWRPbmNlIiwidW5yZWFkTm90aWZzIiwiZmlsdGVyIiwibiIsInJlYWQiLCJsZW5ndGgiLCJub3RpZklkIiwiZGF0YSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiZnVuYyIsIm9uZU9mVHlwZSIsImJvb2wiLCJvYmplY3QiLCJzdHJpbmciLCJhcnJheSIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiLCJzZWxlY3ROb3RpZmljYXRpb25zIiwic2VsZWN0Iiwic3RhdGUiLCJ2aXNpYmlsaXR5RmlsdGVyIiwib3RoZXJTdGF0ZVByb3BlcnRpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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QUFhLEtBRGlCO0FBRTlCTCxrQkFBYyxJQUFHLEVBQUgsR0FBUSxJQUZRLEVBRUY7QUFDNUJhLFlBQVE7QUFIc0IsQ0FBbEM7O0FBTUE7QUFDQSxTQUFTdUIsbUJBQVQsQ0FBNkI5QixnQkFBN0IsRUFBK0NhLE1BQS9DLEVBQXVEO0FBQ25ELFdBQU9iLGdCQUFQO0FBQ0g7O0FBRUQ7QUFDQSxTQUFTK0IsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQSxRQUNaaEMsZ0JBRFksR0FDbURnQyxLQURuRCxDQUNaaEMsZ0JBRFk7QUFBQSxRQUNNaUMsZ0JBRE4sR0FDbURELEtBRG5ELENBQ01DLGdCQUROO0FBQUEsUUFDMkJDLG9CQUQzQiw0QkFDbURGLEtBRG5EOztBQUVuQjtBQUNJO0FBQ0FoQywwQkFBa0I4QixvQkFBb0I5QixnQkFBcEIsRUFBc0NpQyxnQkFBdEMsQ0FGdEI7QUFHSUE7QUFISixPQUlPQyxvQkFKUDtBQU1IOztBQUVEO0FBQ0EsZUFBZXJELFFBQVFrRCxNQUFSLEVBQWdCdkMsa0JBQWhCLENBQWYiLCJmaWxlIjoic2hvcnRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vRGVwZW5kZW5jaWVzXHJcbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcywgUHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uQ2VudGVySWNvbiBmcm9tICcuL25vdGlmaWNhdGlvbi1jZW50ZXItaWNvbic7XHJcbmltcG9ydCBOb3RpZmljYXRpb25SZWNlaXZlciBmcm9tICcuL25vdGlmaWNhdGlvbi1yZWNlaXZlcic7XHJcbmltcG9ydCBOb3RpZmljYXRpb25QYW5lbCBmcm9tICcuL25vdGlmaWNhdGlvbi1wYW5lbCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge2FkZE5vdGlmaWNhdGlvbiwgc2V0VmlzaWJpbGl0eUZpbHRlciwgb3BlbkNlbnRlciwgY2xvc2VDZW50ZXIgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHtkZWxldGVOb3RpZmljYXRpb24sIGRlbGV0ZUdyb3VwTm90aWZpY2F0aW9ufSBmcm9tICcuLi9hY3Rpb25zL2RlbGV0ZS1ub3RpZmljYXRpb24nXHJcbmltcG9ydCB7ZmV0Y2hOb3RpZmljYXRpb25zfSBmcm9tICcuLi9hY3Rpb25zL2ZldGNoLW5vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQge2Rpc21pc3NOb3RpZmljYXRpb259IGZyb20gJy4uL2FjdGlvbnMvcmVjZWl2ZS1ub3RpZmljYXRpb25zJztcclxuaW1wb3J0IHtjbGVhckVycm9yfSBmcm9tICcuLi9hY3Rpb25zL2Vycm9yJztcclxuaW1wb3J0IHBvbGxpbmcgZnJvbSAnLi4vdXRpbC9wb2xsaW5nJztcclxuXHJcbi8vIE5vdGlmaWNhdGlvbiBjZW50ZXIgY29tcG9uZW50XHJcbmNsYXNzIE5vdGlmaWNhdGlvbkNlbnRlciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIC8vYnVpbGQgYSBwb2xsaW5nIHRpbWVvdXQuXHJcbiAgICAgICAgY29uc3Qge3BvbGxpbmdUaW1lciwgZGlzcGF0Y2h9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBwb2xsaW5nKCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hOb3RpZmljYXRpb25zKG51bGwsIHRoaXMubGFzdEZldGNoKSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEZldGNoID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgIH0sIHBvbGxpbmdUaW1lcik7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hOb3RpZmljYXRpb25zKCkpO1xyXG4gICAgICAgIHRoaXMubGFzdEZldGNoID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgLy9jb21wb25lbnRXaWxsVW5Nb3VudCgpIHtcclxuICAgIC8vICAgIGNsZWFyVGltZW91dCh0aGlzLnBvbGxpbmdUaW1lb3V0SUQpXHJcbiAgICAvL31cclxuICAgIC8vU2hvdWxkIGJlIHJlcGxhY2VkIGJ5IGEgcHJvbWlzZS5jYW5jZWxcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7ZGlzcGF0Y2gsIGhhc0FkZE5vdGlmLCBub3RpZmljYXRpb25MaXN0LCBpY29uTmFtZSwgaXNPcGVuLCBpc0ZldGNoaW5nLCBub3RpZmljYXRpb25SZWNlaXZlciwgb25TaW5nbGVDbGljaywgZXJyb3IsIHpJbmRleCwgcGFuZWxIZWFkZXIsIHBhbmVsRm9vdGVyfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge25vdGlmaWNhdGlvbnNSZWNlaXZlZCwgaGFzRmV0Y2hlZE9uY2V9ID0gbm90aWZpY2F0aW9uUmVjZWl2ZXI7XHJcblxyXG4gICAgICAgIC8vZGlzcGxheSBvbmx5IHRoZSB1bmRyZWQgbm90aWZpY2F0aW9uc1xyXG4gICAgICAgIGNvbnN0IHVucmVhZE5vdGlmcyA9IG5vdGlmaWNhdGlvbkxpc3QuZmlsdGVyKG4gPT4gIW4ucmVhZCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdub3RpZmljYXRpb24tY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25DZW50ZXJJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbk5hbWU9e2ljb25OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG51bWJlcj17dW5yZWFkTm90aWZzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICBvcGVuQ2VudGVyPXsoKSA9PiBkaXNwYXRjaChvcGVuQ2VudGVyKCkpfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHshaXNPcGVuICYmIGhhc0ZldGNoZWRPbmNlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvblJlY2VpdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e25vdGlmaWNhdGlvbnNSZWNlaXZlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25EaXNtaXNzPXtub3RpZklkID0+IGRpc3BhdGNoKGRpc21pc3NOb3RpZmljYXRpb24obm90aWZJZCkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg9e3pJbmRleH0gLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtpc09wZW4gJiZcclxuICAgICAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uUGFuZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNBZGROb3RpZj17aGFzQWRkTm90aWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc9e2lzRmV0Y2hpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRkQ2xpY2s9e2RhdGEgPT4gZGlzcGF0Y2goYWRkTm90aWZpY2F0aW9uKGRhdGEpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZVBhbmVsPXsoKSA9PiBkaXNwYXRjaChjbG9zZUNlbnRlcigpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25EaXNtaXNzRXJyb3I9eygpID0+IGRpc3BhdGNoKGNsZWFyRXJyb3IoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2luZ2xlQ2xpY2s9e29uU2luZ2xlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uR3JvdXBSZWFkPXtkYXRhID0+IGRpc3BhdGNoKGRlbGV0ZUdyb3VwTm90aWZpY2F0aW9uKGRhdGEpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TaW5nbGVSZWFkPXtkYXRhID0+IGRpc3BhdGNoKGRlbGV0ZU5vdGlmaWNhdGlvbihkYXRhKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVGl0bGVDbGljaz17KCkgPT4gZGlzcGF0Y2goZmV0Y2hOb3RpZmljYXRpb25zKCkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bnJlYWROb3RpZnM9e3VucmVhZE5vdGlmc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4PXt6SW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhbmVsSGVhZGVyPXtwYW5lbEhlYWRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFuZWxGb290ZXI9e3BhbmVsRm9vdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5Ob3RpZmljYXRpb25DZW50ZXIuZGlzcGxheU5hbWUgPSAnTm90aWZpY2F0aW9uQ2VudGVyJztcclxuTm90aWZpY2F0aW9uQ2VudGVyLnByb3BUeXBlcyA9IHtcclxuICAgIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLm9iamVjdF0pLFxyXG4gICAgaGFzQWRkTm90aWY6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgaWNvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpc0ZldGNoaW5nOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBub3RpZmljYXRpb25MaXN0OiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICBub3RpZmljYXRpb25SZWNlaXZlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIG9uU2luZ2xlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBwb2xsaW5nVGltZXI6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXJcclxufVxyXG5Ob3RpZmljYXRpb25DZW50ZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaGFzQWRkTm90aWY6IGZhbHNlLFxyXG4gICAgcG9sbGluZ1RpbWVyOiA2KiAxMCAqIDEwMDAsIC8vMSBtaW5cclxuICAgIHpJbmRleDogMTY3NzcyNzFcclxufTtcclxuXHJcbi8vIFNlbGVjdCB0aGUgbm90aWZpY2F0aW9uIGZyb20gdGhlIHN0YXRlLlxyXG5mdW5jdGlvbiBzZWxlY3ROb3RpZmljYXRpb25zKG5vdGlmaWNhdGlvbkxpc3QsIGZpbHRlcikge1xyXG4gICAgcmV0dXJuIG5vdGlmaWNhdGlvbkxpc3Q7XHJcbn1cclxuXHJcbi8vIFNlbGVjdCB0aGUgcGFydCBvZiB0aGUgc3RhdGUuXHJcbmZ1bmN0aW9uIHNlbGVjdChzdGF0ZSkge1xyXG4gICAgY29uc3Qge25vdGlmaWNhdGlvbkxpc3QsIHZpc2liaWxpdHlGaWx0ZXIsIC4uLm90aGVyU3RhdGVQcm9wZXJ0aWVzfSA9IHN0YXRlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL3NlbGVjdCB0aGUgbm90aWZpY2F0aW9uIGxpc3QgZnJvbSB0aGUgc3RhdGVcclxuICAgICAgICBub3RpZmljYXRpb25MaXN0OiBzZWxlY3ROb3RpZmljYXRpb25zKG5vdGlmaWNhdGlvbkxpc3QsIHZpc2liaWxpdHlGaWx0ZXIpLFxyXG4gICAgICAgIHZpc2liaWxpdHlGaWx0ZXIsXHJcbiAgICAgICAgLi4ub3RoZXJTdGF0ZVByb3BlcnRpZXNcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIGNvbm5lY3QgdGhlIG5vdGlmaWNhdGlvbiBjZW50ZXIgdG8gdGhlIHN0YXRlLlxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHNlbGVjdCkoTm90aWZpY2F0aW9uQ2VudGVyKTtcclxuIl19