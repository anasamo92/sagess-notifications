var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Dependencies
import React, { PropTypes, PureComponent } from 'react';

var NotificationCenterIcon = function (_PureComponent) {
    _inherits(NotificationCenterIcon, _PureComponent);

    function NotificationCenterIcon() {
        _classCallCheck(this, NotificationCenterIcon);

        return _possibleConstructorReturn(this, (NotificationCenterIcon.__proto__ || Object.getPrototypeOf(NotificationCenterIcon)).apply(this, arguments));
    }

    _createClass(NotificationCenterIcon, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                iconName = _props.iconName,
                number = _props.number,
                openCenter = _props.openCenter;

            var displayedNumber = number > 99 ? '99' : number;
            var conditionnalProps = number > 0 ? { 'data-badge': displayedNumber } : {};
            return React.createElement(
                'div',
                { 'data-focus': 'notification-center-icon' },
                React.createElement(
                    'span',
                    Object.assign({ className: 'material-icons mdl-badge' }, conditionnalProps, { onClick: openCenter }),
                    React.createElement(
                        'i',
                        { className: 'material-icons' },
                        iconName
                    )
                ),
                React.createElement('span', { id: 'notification-center-icon' }),
                React.createElement(
                    'div',
                    { className: 'mdl-tooltip mdl-tooltip--large', htmlFor: 'notification-center-icon' },
                    'you have ' + number + ' notifications'
                )
            );
        }
    }]);

    return NotificationCenterIcon;
}(PureComponent);

NotificationCenterIcon.displayName = 'NotificationCenterIcon';
NotificationCenterIcon.propTypes = {
    iconName: PropTypes.string,
    number: PropTypes.number.isRequired,
    openCenter: PropTypes.func.isRequired
};
NotificationCenterIcon.defaultProps = {
    iconName: 'notifications_none',
    hasDate: true
};
export default NotificationCenterIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJQdXJlQ29tcG9uZW50IiwiTm90aWZpY2F0aW9uQ2VudGVySWNvbiIsInByb3BzIiwiaWNvbk5hbWUiLCJudW1iZXIiLCJvcGVuQ2VudGVyIiwiZGlzcGxheWVkTnVtYmVyIiwiY29uZGl0aW9ubmFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwiaGFzRGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsSUFBZUMsU0FBZixFQUEwQkMsYUFBMUIsUUFBOEMsT0FBOUM7O0lBRU1DLHNCOzs7Ozs7Ozs7OztpQ0FDTztBQUFBLHlCQUNrQyxLQUFLQyxLQUR2QztBQUFBLGdCQUNFQyxRQURGLFVBQ0VBLFFBREY7QUFBQSxnQkFDWUMsTUFEWixVQUNZQSxNQURaO0FBQUEsZ0JBQ29CQyxVQURwQixVQUNvQkEsVUFEcEI7O0FBRUwsZ0JBQU1DLGtCQUFrQkYsU0FBUyxFQUFULEdBQWMsSUFBZCxHQUFxQkEsTUFBN0M7QUFDQSxnQkFBTUcsb0JBQW9CSCxTQUFTLENBQVQsR0FBYSxFQUFDLGNBQWNFLGVBQWYsRUFBYixHQUErQyxFQUF6RTtBQUNBLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxjQUFXLDBCQUFoQjtBQUNJO0FBQUE7QUFBQSxvQ0FBTSxXQUFVLDBCQUFoQixJQUErQ0MsaUJBQS9DLElBQWtFLFNBQVNGLFVBQTNFO0FBQ0k7QUFBQTtBQUFBLDBCQUFHLFdBQVUsZ0JBQWI7QUFBK0JGO0FBQS9CO0FBREosaUJBREo7QUFJSSw4Q0FBTSxJQUFHLDBCQUFULEdBSko7QUFLSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxnQ0FBZixFQUFnRCxTQUFRLDBCQUF4RDtBQUFBLGtDQUFnR0MsTUFBaEc7QUFBQTtBQUxKLGFBREo7QUFTSDs7OztFQWRnQ0osYTs7QUFnQnJDQyx1QkFBdUJPLFdBQXZCLEdBQXFDLHdCQUFyQztBQUNBUCx1QkFBdUJRLFNBQXZCLEdBQW1DO0FBQy9CTixjQUFVSixVQUFVVyxNQURXO0FBRS9CTixZQUFRTCxVQUFVSyxNQUFWLENBQWlCTyxVQUZNO0FBRy9CTixnQkFBWU4sVUFBVWEsSUFBVixDQUFlRDtBQUhJLENBQW5DO0FBS0FWLHVCQUF1QlksWUFBdkIsR0FBc0M7QUFDbENWLGNBQVUsb0JBRHdCO0FBRWxDVyxhQUFTO0FBRnlCLENBQXRDO0FBSUEsZUFBZWIsc0JBQWYiLCJmaWxlIjoic2hvcnRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vRGVwZW5kZW5jaWVzXHJcbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcywgUHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgTm90aWZpY2F0aW9uQ2VudGVySWNvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtpY29uTmFtZSwgbnVtYmVyLCBvcGVuQ2VudGVyfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgZGlzcGxheWVkTnVtYmVyID0gbnVtYmVyID4gOTkgPyAnOTknIDogbnVtYmVyO1xyXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbm5hbFByb3BzID0gbnVtYmVyID4gMCA/IHsnZGF0YS1iYWRnZSc6IGRpc3BsYXllZE51bWJlcn0gOiB7fTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J25vdGlmaWNhdGlvbi1jZW50ZXItaWNvbic+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zIG1kbC1iYWRnZScgey4uLmNvbmRpdGlvbm5hbFByb3BzfSBvbkNsaWNrPXtvcGVuQ2VudGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJz57aWNvbk5hbWV9PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J25vdGlmaWNhdGlvbi1jZW50ZXItaWNvbic+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21kbC10b29sdGlwIG1kbC10b29sdGlwLS1sYXJnZScgaHRtbEZvcj0nbm90aWZpY2F0aW9uLWNlbnRlci1pY29uJz57YHlvdSBoYXZlICR7bnVtYmVyfSBub3RpZmljYXRpb25zYH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5Ob3RpZmljYXRpb25DZW50ZXJJY29uLmRpc3BsYXlOYW1lID0gJ05vdGlmaWNhdGlvbkNlbnRlckljb24nO1xyXG5Ob3RpZmljYXRpb25DZW50ZXJJY29uLnByb3BUeXBlcyA9IHtcclxuICAgIGljb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbnVtYmVyOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBvcGVuQ2VudGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcbk5vdGlmaWNhdGlvbkNlbnRlckljb24uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaWNvbk5hbWU6ICdub3RpZmljYXRpb25zX25vbmUnLFxyXG4gICAgaGFzRGF0ZTogdHJ1ZVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbkNlbnRlckljb247XHJcbiJdfQ==