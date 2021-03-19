var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

var AddNotification = function (_Component) {
    _inherits(AddNotification, _Component);

    function AddNotification() {
        _classCallCheck(this, AddNotification);

        return _possibleConstructorReturn(this, (AddNotification.__proto__ || Object.getPrototypeOf(AddNotification)).apply(this, arguments));
    }

    _createClass(AddNotification, [{
        key: 'handleClick',
        value: function handleClick(e) {
            var node = findDOMNode(this.refs.input);
            var text = node.value.trim();
            this.props.onAddClick({ content: text, author: 'joe.lopez@gmail.com', title: 'title', date: new Date().toISOString() });
            node.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                React.createElement('input', { ref: 'input', type: 'text' }),
                React.createElement(
                    'button',
                    { onClick: function onClick(e) {
                            return _this2.handleClick(e);
                        } },
                    'Add'
                )
            );
        }
    }]);

    return AddNotification;
}(Component);

export { AddNotification as default };

AddNotification.displayName = 'AddNotification';
AddNotification.propTypes = {
    onAddClick: PropTypes.func.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmaW5kRE9NTm9kZSIsIkFkZE5vdGlmaWNhdGlvbiIsImUiLCJub2RlIiwicmVmcyIsImlucHV0IiwidGV4dCIsInZhbHVlIiwidHJpbSIsInByb3BzIiwib25BZGRDbGljayIsImNvbnRlbnQiLCJhdXRob3IiLCJ0aXRsZSIsImRhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJoYW5kbGVDbGljayIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsRUFBMkJDLFNBQTNCLFFBQTRDLE9BQTVDO0FBQ0EsU0FBUUMsV0FBUixRQUEwQixXQUExQjs7SUFDcUJDLGU7Ozs7Ozs7Ozs7O29DQUNMQyxDLEVBQUc7QUFDWCxnQkFBTUMsT0FBT0gsWUFBWSxLQUFLSSxJQUFMLENBQVVDLEtBQXRCLENBQWI7QUFDQSxnQkFBTUMsT0FBT0gsS0FBS0ksS0FBTCxDQUFXQyxJQUFYLEVBQWI7QUFDQSxpQkFBS0MsS0FBTCxDQUFXQyxVQUFYLENBQXNCLEVBQUNDLFNBQVNMLElBQVYsRUFBZ0JNLFFBQVEscUJBQXhCLEVBQStDQyxPQUFPLE9BQXRELEVBQStEQyxNQUFNLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUFyRSxFQUF0QjtBQUNBYixpQkFBS0ksS0FBTCxHQUFhLEVBQWI7QUFDSDs7O2lDQUNRO0FBQUE7O0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0ksK0NBQU8sS0FBSSxPQUFYLEVBQW1CLE1BQUssTUFBeEIsR0FESjtBQUVJO0FBQUE7QUFBQSxzQkFBUSxTQUFTLGlCQUFDTCxDQUFEO0FBQUEsbUNBQU8sT0FBS2UsV0FBTCxDQUFpQmYsQ0FBakIsQ0FBUDtBQUFBLHlCQUFqQjtBQUFBO0FBQUE7QUFGSixhQURKO0FBTUg7Ozs7RUFkd0NKLFM7O1NBQXhCRyxlOztBQWlCckJBLGdCQUFnQmlCLFdBQWhCLEdBQThCLGlCQUE5QjtBQUNBakIsZ0JBQWdCa0IsU0FBaEIsR0FBNEI7QUFDeEJULGdCQUFZWCxVQUFVcUIsSUFBVixDQUFlQztBQURILENBQTVCIiwiZmlsZSI6InNob3J0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7ZmluZERPTU5vZGV9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZE5vdGlmaWNhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBoYW5kbGVDbGljayhlKSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IGZpbmRET01Ob2RlKHRoaXMucmVmcy5pbnB1dCk7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IG5vZGUudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMub25BZGRDbGljayh7Y29udGVudDogdGV4dCwgYXV0aG9yOiAnam9lLmxvcGV6QGdtYWlsLmNvbScsIHRpdGxlOiAndGl0bGUnLCBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9KTtcclxuICAgICAgICBub2RlLnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9J2lucHV0JyB0eXBlPSd0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVDbGljayhlKX0+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcbkFkZE5vdGlmaWNhdGlvbi5kaXNwbGF5TmFtZSA9ICdBZGROb3RpZmljYXRpb24nO1xyXG5BZGROb3RpZmljYXRpb24ucHJvcFR5cGVzID0ge1xyXG4gICAgb25BZGRDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG4iXX0=