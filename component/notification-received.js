var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Dependencies
import React, { Component, PropTypes } from 'react';
import shorten from '../util/shorten';
var propTypes = {
    hasDate: PropTypes.bool,
    uuid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    creationDate: PropTypes.string.isRequired,
    dismissTimerDuration: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    targetUrl: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onDismiss: PropTypes.func.isRequired
};
var _window = window,
    setTimeout = _window.setTimeout;

var NotificationReceived = function (_Component) {
    _inherits(NotificationReceived, _Component);

    function NotificationReceived() {
        _classCallCheck(this, NotificationReceived);

        return _possibleConstructorReturn(this, (NotificationReceived.__proto__ || Object.getPrototypeOf(NotificationReceived)).apply(this, arguments));
    }

    _createClass(NotificationReceived, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                uuid = _props.uuid,
                onDismiss = _props.onDismiss,
                dismissTimerDuration = _props.dismissTimerDuration;

            setTimeout(function () {
                onDismiss(uuid);
            }, dismissTimerDuration);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                sender = _props2.sender,
                creationDate = _props2.creationDate,
                content = _props2.content,
                title = _props2.title,
                type = _props2.type,
                icon = _props2.icon,
                targetUrl = _props2.targetUrl,
                hasDate = _props2.hasDate,
                onDismiss = _props2.onDismiss,
                uuid = _props2.uuid;

            return React.createElement(
                'li',
                { 'data-focus': 'notification-received', 'data-type': type, className: 'fade-in' },
                icon && React.createElement(
                    'div',
                    { 'data-focus': 'notification-icon' },
                    React.createElement('img', { src: icon })
                ),
                React.createElement(
                    'div',
                    { 'data-focus': 'notification-body' },
                    React.createElement(
                        'h4',
                        { 'data-focus': 'notification-title' },
                        title
                    ),
                    React.createElement(
                        'div',
                        { 'data-focus': 'notification-content' },
                        shorten(content, 150)
                    )
                ),
                React.createElement(
                    'div',
                    { 'data-focus': 'notification-action' },
                    React.createElement(
                        'button',
                        { className: 'mdl-button mdl-js-button mdl-button--icon', onClick: function onClick() {
                                return onDismiss(uuid);
                            } },
                        React.createElement(
                            'i',
                            { className: 'material-icons' },
                            'clear'
                        )
                    )
                )
            );
        }
    }]);

    return NotificationReceived;
}(Component);

NotificationReceived.defaultProps = {
    dismissTimerDuration: 5 * 1000 //5 sec
};
NotificationReceived.propTypes = propTypes;
NotificationReceived.displayName = 'NotificationReceived';

export default NotificationReceived;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzaG9ydGVuIiwicHJvcFR5cGVzIiwiaGFzRGF0ZSIsImJvb2wiLCJ1dWlkIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInRpdGxlIiwiY29udGVudCIsImNyZWF0aW9uRGF0ZSIsImRpc21pc3NUaW1lckR1cmF0aW9uIiwidHlwZSIsInNlbmRlciIsInRhcmdldFVybCIsImljb24iLCJvbkRpc21pc3MiLCJmdW5jIiwid2luZG93Iiwic2V0VGltZW91dCIsIk5vdGlmaWNhdGlvblJlY2VpdmVkIiwicHJvcHMiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLEVBQTRCQyxTQUE1QixRQUE0QyxPQUE1QztBQUNBLE9BQU9DLE9BQVAsTUFBb0IsaUJBQXBCO0FBQ0EsSUFBTUMsWUFBWTtBQUNkQyxhQUFTSCxVQUFVSSxJQURMO0FBRWRDLFVBQU1MLFVBQVVNLFNBQVYsQ0FBb0IsQ0FBQ04sVUFBVU8sTUFBWCxFQUFtQlAsVUFBVVEsTUFBN0IsQ0FBcEIsRUFBMERDLFVBRmxEO0FBR2RDLFdBQU9WLFVBQVVPLE1BQVYsQ0FBaUJFLFVBSFY7QUFJZEUsYUFBU1gsVUFBVU8sTUFBVixDQUFpQkUsVUFKWjtBQUtkRyxrQkFBY1osVUFBVU8sTUFBVixDQUFpQkUsVUFMakI7QUFNZEksMEJBQXNCYixVQUFVUSxNQUFWLENBQWlCQyxVQU56QjtBQU9kSyxVQUFNZCxVQUFVTyxNQUFWLENBQWlCRSxVQVBUO0FBUWRNLFlBQVFmLFVBQVVPLE1BQVYsQ0FBaUJFLFVBUlg7QUFTZE8sZUFBV2hCLFVBQVVPLE1BQVYsQ0FBaUJFLFVBVGQ7QUFVZFEsVUFBTWpCLFVBQVVPLE1BQVYsQ0FBaUJFLFVBVlQ7QUFXZFMsZUFBV2xCLFVBQVVtQixJQUFWLENBQWVWO0FBWFosQ0FBbEI7Y0FhcUJXLE07SUFBZEMsVSxXQUFBQSxVOztJQUNEQyxvQjs7Ozs7Ozs7Ozs7NENBQ2tCO0FBQUEseUJBQ2dDLEtBQUtDLEtBRHJDO0FBQUEsZ0JBQ1RsQixJQURTLFVBQ1RBLElBRFM7QUFBQSxnQkFDSGEsU0FERyxVQUNIQSxTQURHO0FBQUEsZ0JBQ1FMLG9CQURSLFVBQ1FBLG9CQURSOztBQUVoQlEsdUJBQVcsWUFBTTtBQUNiSCwwQkFBVWIsSUFBVjtBQUNILGFBRkQsRUFFR1Esb0JBRkg7QUFHSDs7O2lDQUNRO0FBQUEsMEJBQzJGLEtBQUtVLEtBRGhHO0FBQUEsZ0JBQ0VSLE1BREYsV0FDRUEsTUFERjtBQUFBLGdCQUNVSCxZQURWLFdBQ1VBLFlBRFY7QUFBQSxnQkFDd0JELE9BRHhCLFdBQ3dCQSxPQUR4QjtBQUFBLGdCQUNpQ0QsS0FEakMsV0FDaUNBLEtBRGpDO0FBQUEsZ0JBQ3dDSSxJQUR4QyxXQUN3Q0EsSUFEeEM7QUFBQSxnQkFDOENHLElBRDlDLFdBQzhDQSxJQUQ5QztBQUFBLGdCQUNvREQsU0FEcEQsV0FDb0RBLFNBRHBEO0FBQUEsZ0JBQytEYixPQUQvRCxXQUMrREEsT0FEL0Q7QUFBQSxnQkFDd0VlLFNBRHhFLFdBQ3dFQSxTQUR4RTtBQUFBLGdCQUNtRmIsSUFEbkYsV0FDbUZBLElBRG5GOztBQUVMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSSxjQUFXLHVCQUFmLEVBQXVDLGFBQVdTLElBQWxELEVBQXdELFdBQVUsU0FBbEU7QUFDS0csd0JBQVE7QUFBQTtBQUFBLHNCQUFLLGNBQVcsbUJBQWhCO0FBQW9DLGlEQUFLLEtBQUtBLElBQVY7QUFBcEMsaUJBRGI7QUFFSTtBQUFBO0FBQUEsc0JBQUssY0FBVyxtQkFBaEI7QUFDSTtBQUFBO0FBQUEsMEJBQUksY0FBVyxvQkFBZjtBQUFxQ1A7QUFBckMscUJBREo7QUFFSTtBQUFBO0FBQUEsMEJBQUssY0FBVyxzQkFBaEI7QUFBd0NULGdDQUFRVSxPQUFSLEVBQWlCLEdBQWpCO0FBQXhDO0FBRkosaUJBRko7QUFNSTtBQUFBO0FBQUEsc0JBQUssY0FBVyxxQkFBaEI7QUFDSTtBQUFBO0FBQUEsMEJBQVEsV0FBVSwyQ0FBbEIsRUFBOEQsU0FBUztBQUFBLHVDQUFNTyxVQUFVYixJQUFWLENBQU47QUFBQSw2QkFBdkU7QUFDSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxnQkFBYjtBQUErQjtBQUEvQjtBQURKO0FBREo7QUFOSixhQURKO0FBZUg7Ozs7RUF4QjhCTixTOztBQTBCbkN1QixxQkFBcUJFLFlBQXJCLEdBQW9DO0FBQ2hDWCwwQkFBc0IsSUFBRSxJQURRLENBQ0g7QUFERyxDQUFwQztBQUdBUyxxQkFBcUJwQixTQUFyQixHQUFpQ0EsU0FBakM7QUFDQW9CLHFCQUFxQkcsV0FBckIsR0FBbUMsc0JBQW5DOztBQUVBLGVBQWVILG9CQUFmIiwiZmlsZSI6InNob3J0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0RlcGVuZGVuY2llc1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50ICwgUHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzaG9ydGVuIGZyb20gJy4uL3V0aWwvc2hvcnRlbic7XHJcbmNvbnN0IHByb3BUeXBlcyA9IHtcclxuICAgIGhhc0RhdGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgdXVpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWQsXHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgY3JlYXRpb25EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBkaXNtaXNzVGltZXJEdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgc2VuZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB0YXJnZXRVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIG9uRGlzbWlzczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5jb25zdCB7c2V0VGltZW91dH0gPSB3aW5kb3c7XHJcbmNsYXNzIE5vdGlmaWNhdGlvblJlY2VpdmVkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHt1dWlkLCBvbkRpc21pc3MsIGRpc21pc3NUaW1lckR1cmF0aW9ufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG9uRGlzbWlzcyh1dWlkKTtcclxuICAgICAgICB9LCBkaXNtaXNzVGltZXJEdXJhdGlvbik7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3NlbmRlciwgY3JlYXRpb25EYXRlLCBjb250ZW50LCB0aXRsZSwgdHlwZSwgaWNvbiwgdGFyZ2V0VXJsLCBoYXNEYXRlLCBvbkRpc21pc3MsIHV1aWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkgZGF0YS1mb2N1cz0nbm90aWZpY2F0aW9uLXJlY2VpdmVkJyBkYXRhLXR5cGU9e3R5cGV9IGNsYXNzTmFtZT0nZmFkZS1pbic+XHJcbiAgICAgICAgICAgICAgICB7aWNvbiAmJiA8ZGl2IGRhdGEtZm9jdXM9J25vdGlmaWNhdGlvbi1pY29uJz48aW1nIHNyYz17aWNvbn0gLz48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J25vdGlmaWNhdGlvbi1ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgZGF0YS1mb2N1cz0nbm90aWZpY2F0aW9uLXRpdGxlJz57dGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J25vdGlmaWNhdGlvbi1jb250ZW50Jz57c2hvcnRlbihjb250ZW50LCAxNTApfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J25vdGlmaWNhdGlvbi1hY3Rpb24nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0taWNvbicgb25DbGljaz17KCkgPT4gb25EaXNtaXNzKHV1aWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdtYXRlcmlhbC1pY29ucyc+eydjbGVhcid9PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuTm90aWZpY2F0aW9uUmVjZWl2ZWQuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgZGlzbWlzc1RpbWVyRHVyYXRpb246IDUqMTAwMCAvLzUgc2VjXHJcbn1cclxuTm90aWZpY2F0aW9uUmVjZWl2ZWQucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xyXG5Ob3RpZmljYXRpb25SZWNlaXZlZC5kaXNwbGF5TmFtZSA9ICdOb3RpZmljYXRpb25SZWNlaXZlZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25SZWNlaXZlZDtcclxuIl19