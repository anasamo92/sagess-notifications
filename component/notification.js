var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Dependencies
import React, { PropTypes, PureComponent } from 'react';
import { getConfig } from '../config';

function translateDate(date) {
    var _getConfig = getConfig(),
        translateDate = _getConfig.translateDate;

    return translateDate(date);
}

var Notification = function (_PureComponent) {
    _inherits(Notification, _PureComponent);

    function Notification() {
        _classCallCheck(this, Notification);

        return _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).apply(this, arguments));
    }

    _createClass(Notification, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                creationDate = _props.creationDate,
                content = _props.content,
                hasDate = _props.hasDate,
                icon = _props.icon,
                _onClick = _props.onClick,
                onRead = _props.onRead,
                uuid = _props.uuid,
                sender = _props.sender,
                targetUrl = _props.targetUrl,
                title = _props.title,
                type = _props.type;

            return React.createElement(
                'li',
                { 'data-focus': 'notification', 'data-type': type, onClick: function onClick() {
                        _onClick({ targetUrl: targetUrl });
                    } },
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
                        content
                    )
                ),
                hasDate && React.createElement(
                    'div',
                    { 'data-focus': 'notification-date' },
                    React.createElement(
                        'button',
                        { className: 'mdl-button mdl-js-button mdl-button--icon', onClick: function onClick() {
                                return onRead(uuid);
                            } },
                        React.createElement(
                            'i',
                            { className: 'material-icons' },
                            'done'
                        )
                    ),
                    React.createElement(
                        'div',
                        null,
                        translateDate(creationDate)
                    )
                )
            );
        }
    }]);

    return Notification;
}(PureComponent);

Notification.displayName = 'Notification';
Notification.propTypes = {
    hasDate: PropTypes.bool,
    uuid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    creationDate: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    targetUrl: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onRead: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
};
Notification.defaultProps = {
    hasDate: true
};
export default Notification;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJQdXJlQ29tcG9uZW50IiwiZ2V0Q29uZmlnIiwidHJhbnNsYXRlRGF0ZSIsImRhdGUiLCJOb3RpZmljYXRpb24iLCJwcm9wcyIsImNyZWF0aW9uRGF0ZSIsImNvbnRlbnQiLCJoYXNEYXRlIiwiaWNvbiIsIm9uQ2xpY2siLCJvblJlYWQiLCJ1dWlkIiwic2VuZGVyIiwidGFyZ2V0VXJsIiwidGl0bGUiLCJ0eXBlIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJib29sIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLElBQWVDLFNBQWYsRUFBMEJDLGFBQTFCLFFBQThDLE9BQTlDO0FBQ0EsU0FBUUMsU0FBUixRQUF3QixXQUF4Qjs7QUFFQSxTQUFTQyxhQUFULENBQXVCQyxJQUF2QixFQUE2QjtBQUFBLHFCQUNERixXQURDO0FBQUEsUUFDbEJDLGFBRGtCLGNBQ2xCQSxhQURrQjs7QUFFekIsV0FBT0EsY0FBY0MsSUFBZCxDQUFQO0FBQ0g7O0lBRUtDLFk7Ozs7Ozs7Ozs7O2lDQUNPO0FBQUEseUJBQ2lHLEtBQUtDLEtBRHRHO0FBQUEsZ0JBQ0VDLFlBREYsVUFDRUEsWUFERjtBQUFBLGdCQUNnQkMsT0FEaEIsVUFDZ0JBLE9BRGhCO0FBQUEsZ0JBQ3lCQyxPQUR6QixVQUN5QkEsT0FEekI7QUFBQSxnQkFDa0NDLElBRGxDLFVBQ2tDQSxJQURsQztBQUFBLGdCQUN3Q0MsUUFEeEMsVUFDd0NBLE9BRHhDO0FBQUEsZ0JBQ2lEQyxNQURqRCxVQUNpREEsTUFEakQ7QUFBQSxnQkFDeURDLElBRHpELFVBQ3lEQSxJQUR6RDtBQUFBLGdCQUMrREMsTUFEL0QsVUFDK0RBLE1BRC9EO0FBQUEsZ0JBQ3VFQyxTQUR2RSxVQUN1RUEsU0FEdkU7QUFBQSxnQkFDa0ZDLEtBRGxGLFVBQ2tGQSxLQURsRjtBQUFBLGdCQUN5RkMsSUFEekYsVUFDeUZBLElBRHpGOztBQUVMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSSxjQUFXLGNBQWYsRUFBOEIsYUFBV0EsSUFBekMsRUFBK0MsU0FBUyxtQkFBSTtBQUFFTixpQ0FBUSxFQUFDSSxvQkFBRCxFQUFSO0FBQXFCLHFCQUFuRjtBQUNLTCx3QkFBUTtBQUFBO0FBQUEsc0JBQUssY0FBVyxtQkFBaEI7QUFBb0MsaURBQUssS0FBS0EsSUFBVjtBQUFwQyxpQkFEYjtBQUVJO0FBQUE7QUFBQSxzQkFBSyxjQUFXLG1CQUFoQjtBQUNJO0FBQUE7QUFBQSwwQkFBSSxjQUFXLG9CQUFmO0FBQXFDTTtBQUFyQyxxQkFESjtBQUVJO0FBQUE7QUFBQSwwQkFBSyxjQUFXLHNCQUFoQjtBQUF3Q1I7QUFBeEM7QUFGSixpQkFGSjtBQU1LQywyQkFDRztBQUFBO0FBQUEsc0JBQUssY0FBVyxtQkFBaEI7QUFDSTtBQUFBO0FBQUEsMEJBQVEsV0FBVSwyQ0FBbEIsRUFBOEQsU0FBUztBQUFBLHVDQUFNRyxPQUFPQyxJQUFQLENBQU47QUFBQSw2QkFBdkU7QUFDSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxnQkFBYjtBQUFBO0FBQUE7QUFESixxQkFESjtBQUlJO0FBQUE7QUFBQTtBQUFNVixzQ0FBY0ksWUFBZDtBQUFOO0FBSko7QUFQUixhQURKO0FBaUJIOzs7O0VBcEJzQk4sYTs7QUF1QjNCSSxhQUFhYSxXQUFiLEdBQTJCLGNBQTNCO0FBQ0FiLGFBQWFjLFNBQWIsR0FBeUI7QUFDckJWLGFBQVNULFVBQVVvQixJQURFO0FBRXJCUCxVQUFNYixVQUFVcUIsU0FBVixDQUFvQixDQUFDckIsVUFBVXNCLE1BQVgsRUFBbUJ0QixVQUFVdUIsTUFBN0IsQ0FBcEIsRUFBMERDLFVBRjNDO0FBR3JCUixXQUFPaEIsVUFBVXNCLE1BQVYsQ0FBaUJFLFVBSEg7QUFJckJoQixhQUFTUixVQUFVc0IsTUFBVixDQUFpQkUsVUFKTDtBQUtyQmpCLGtCQUFjUCxVQUFVc0IsTUFBVixDQUFpQkUsVUFMVjtBQU1yQlAsVUFBTWpCLFVBQVVzQixNQUFWLENBQWlCRSxVQU5GO0FBT3JCVixZQUFRZCxVQUFVc0IsTUFBVixDQUFpQkUsVUFQSjtBQVFyQlQsZUFBV2YsVUFBVXNCLE1BQVYsQ0FBaUJFLFVBUlA7QUFTckJkLFVBQU1WLFVBQVVzQixNQUFWLENBQWlCRSxVQVRGO0FBVXJCWixZQUFRWixVQUFVeUIsSUFBVixDQUFlRCxVQVZGO0FBV3JCYixhQUFTWCxVQUFVeUIsSUFBVixDQUFlRDtBQVhILENBQXpCO0FBYUFuQixhQUFhcUIsWUFBYixHQUE0QjtBQUN4QmpCLGFBQVM7QUFEZSxDQUE1QjtBQUdBLGVBQWVKLFlBQWYiLCJmaWxlIjoic2hvcnRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vRGVwZW5kZW5jaWVzXHJcbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcywgUHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2dldENvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURhdGUoZGF0ZSkge1xyXG4gICAgY29uc3Qge3RyYW5zbGF0ZURhdGV9ID0gZ2V0Q29uZmlnKCk7XHJcbiAgICByZXR1cm4gdHJhbnNsYXRlRGF0ZShkYXRlKTtcclxufVxyXG5cclxuY2xhc3MgTm90aWZpY2F0aW9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2NyZWF0aW9uRGF0ZSwgY29udGVudCwgaGFzRGF0ZSwgaWNvbiwgb25DbGljaywgb25SZWFkLCB1dWlkLCBzZW5kZXIsIHRhcmdldFVybCwgdGl0bGUsIHR5cGV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkgZGF0YS1mb2N1cz0nbm90aWZpY2F0aW9uJyBkYXRhLXR5cGU9e3R5cGV9IG9uQ2xpY2s9eygpPT57IG9uQ2xpY2soe3RhcmdldFVybH0pfX0+XHJcbiAgICAgICAgICAgICAgICB7aWNvbiAmJiA8ZGl2IGRhdGEtZm9jdXM9J25vdGlmaWNhdGlvbi1pY29uJz48aW1nIHNyYz17aWNvbn0vPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nbm90aWZpY2F0aW9uLWJvZHknID5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgZGF0YS1mb2N1cz0nbm90aWZpY2F0aW9uLXRpdGxlJz57dGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J25vdGlmaWNhdGlvbi1jb250ZW50Jz57Y29udGVudH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2hhc0RhdGUgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J25vdGlmaWNhdGlvbi1kYXRlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J21kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1pY29uJyBvbkNsaWNrPXsoKSA9PiBvblJlYWQodXVpZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdtYXRlcmlhbC1pY29ucyc+ZG9uZTwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3RyYW5zbGF0ZURhdGUoY3JlYXRpb25EYXRlKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxufVxyXG5cclxuTm90aWZpY2F0aW9uLmRpc3BsYXlOYW1lID0gJ05vdGlmaWNhdGlvbic7XHJcbk5vdGlmaWNhdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgICBoYXNEYXRlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHV1aWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKS5pc1JlcXVpcmVkLFxyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGNyZWF0aW9uRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgc2VuZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB0YXJnZXRVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIG9uUmVhZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuTm90aWZpY2F0aW9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGhhc0RhdGU6IHRydWVcclxufVxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247XHJcbiJdfQ==