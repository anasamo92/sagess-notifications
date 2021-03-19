//Dependencies
import React, { PropTypes } from 'react';

var NotificationError = function NotificationError(_ref) {
    var type = _ref.type,
        content = _ref.content,
        onDismiss = _ref.onDismiss;

    return React.createElement(
        'div',
        { 'data-focus': 'notification-error', 'data-type': type },
        React.createElement(
            'div',
            { 'data-focus': 'notification-error--icon' },
            React.createElement(
                'i',
                { className: 'material-icons' },
                'signal_cellular_connected_no_internet_4_bar'
            )
        ),
        React.createElement(
            'div',
            { 'data-focus': 'notification-error--content' },
            content
        ),
        React.createElement(
            'div',
            { 'data-focus': 'notification-error--action' },
            React.createElement(
                'button',
                {
                    className: 'mdl-button mdl-js-button mdl-button--icon',
                    onClick: function onClick() {
                        return onDismiss();
                    } },
                React.createElement(
                    'i',
                    { className: 'material-icons' },
                    'clear'
                )
            )
        )
    );
};

NotificationError.displayName = 'NotificationError';
NotificationError.propTypes = {
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onDismiss: PropTypes.func.isRequired
};
export default NotificationError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJOb3RpZmljYXRpb25FcnJvciIsInR5cGUiLCJjb250ZW50Iiwib25EaXNtaXNzIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxPQUFPQSxLQUFQLElBQWVDLFNBQWYsUUFBK0IsT0FBL0I7O0FBRUEsSUFBTUMsb0JBQW9CLFNBQXBCQSxpQkFBb0IsT0FBZ0M7QUFBQSxRQUE5QkMsSUFBOEIsUUFBOUJBLElBQThCO0FBQUEsUUFBeEJDLE9BQXdCLFFBQXhCQSxPQUF3QjtBQUFBLFFBQWZDLFNBQWUsUUFBZkEsU0FBZTs7QUFDdEQsV0FDSTtBQUFBO0FBQUEsVUFBSyxjQUFXLG9CQUFoQixFQUFxQyxhQUFXRixJQUFoRDtBQUNJO0FBQUE7QUFBQSxjQUFLLGNBQVcsMEJBQWhCO0FBQTJDO0FBQUE7QUFBQSxrQkFBRyxXQUFVLGdCQUFiO0FBQUE7QUFBQTtBQUEzQyxTQURKO0FBRUk7QUFBQTtBQUFBLGNBQUssY0FBVyw2QkFBaEI7QUFDS0M7QUFETCxTQUZKO0FBS0k7QUFBQTtBQUFBLGNBQUssY0FBVyw0QkFBaEI7QUFDSTtBQUFBO0FBQUE7QUFDSSwrQkFBVSwyQ0FEZDtBQUVJLDZCQUFTO0FBQUEsK0JBQU1DLFdBQU47QUFBQSxxQkFGYjtBQUdJO0FBQUE7QUFBQSxzQkFBRyxXQUFVLGdCQUFiO0FBQUE7QUFBQTtBQUhKO0FBREo7QUFMSixLQURKO0FBZUgsQ0FoQkQ7O0FBa0JBSCxrQkFBa0JJLFdBQWxCLEdBQWdDLG1CQUFoQztBQUNBSixrQkFBa0JLLFNBQWxCLEdBQThCO0FBQzFCSixVQUFNRixVQUFVTyxNQUFWLENBQWlCQyxVQURHO0FBRTFCTCxhQUFTSCxVQUFVTyxNQUFWLENBQWlCQyxVQUZBO0FBRzFCSixlQUFXSixVQUFVUyxJQUFWLENBQWVEO0FBSEEsQ0FBOUI7QUFLQSxlQUFlUCxpQkFBZiIsImZpbGUiOiJzaG9ydGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9EZXBlbmRlbmNpZXNcclxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBOb3RpZmljYXRpb25FcnJvciA9ICh7dHlwZSwgY29udGVudCwgb25EaXNtaXNzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J25vdGlmaWNhdGlvbi1lcnJvcicgZGF0YS10eXBlPXt0eXBlfT5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdub3RpZmljYXRpb24tZXJyb3ItLWljb24nPjxpIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMnPnNpZ25hbF9jZWxsdWxhcl9jb25uZWN0ZWRfbm9faW50ZXJuZXRfNF9iYXI8L2k+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nbm90aWZpY2F0aW9uLWVycm9yLS1jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdub3RpZmljYXRpb24tZXJyb3ItLWFjdGlvbic+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0taWNvbidcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRpc21pc3MoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdtYXRlcmlhbC1pY29ucyc+Y2xlYXI8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuTm90aWZpY2F0aW9uRXJyb3IuZGlzcGxheU5hbWUgPSAnTm90aWZpY2F0aW9uRXJyb3InO1xyXG5Ob3RpZmljYXRpb25FcnJvci5wcm9wVHlwZXMgPSB7XHJcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBvbkRpc21pc3M6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uRXJyb3I7XHJcbiJdfQ==