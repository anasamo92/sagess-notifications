var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Dependencies
import React, { PropTypes, PureComponent } from 'react';
import NotificationList from './notification-list';
import { capitalize } from 'lodash/string';
import { groupBy, map, reduce } from 'lodash/collection';
import { getConfig } from '../config';
import moment from 'moment';

function _isYoungerThanA(periodName, date) {
    return moment(date).diff(moment().subtract(1, periodName)) > 0;
}

// function to group date
function groupDate(_ref) {
    var date = _ref.creationDate;

    var root = 'focus.notifications.groups';
    if (_isYoungerThanA('day', date)) {
        return root + '.0_today';
    }
    if (_isYoungerThanA('week', date)) {
        return root + '.1_lastWeek';
    }
    if (_isYoungerThanA('month', date)) {
        return root + '.2_lastMonth';
    }
    return root + '.3_before';
}

function translate(key) {
    var _getConfig = getConfig(),
        translateText = _getConfig.translateText;

    return translateText(key);
}

function sortDateFn(a, b) {
    return new Date(b.creationDate) - new Date(a.creationDate);
}

function sortNameFn(a, b) {
    if (a.key < b.key) return -1;else if (a.key > b.key) return 1;else return 0;
}

//Maybe i should add a Notification Group component by date which uses a notifciation list component

var NotificationGroup = function (_PureComponent) {
    _inherits(NotificationGroup, _PureComponent);

    function NotificationGroup() {
        _classCallCheck(this, NotificationGroup);

        return _possibleConstructorReturn(this, (NotificationGroup.__proto__ || Object.getPrototypeOf(NotificationGroup)).apply(this, arguments));
    }

    _createClass(NotificationGroup, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                data = _props.data,
                onGroupRead = _props.onGroupRead,
                onSingleRead = _props.onSingleRead,
                onSingleClick = _props.onSingleClick;

            var groupedAndSortedNotifs = reduce(groupBy(data, groupDate), function (accumulator, value, key) {
                accumulator.push({ key: key, value: value });
                return accumulator;
            }, []).sort(sortNameFn);
            return React.createElement(
                'div',
                { 'data-focus': 'notification-group' },
                groupedAndSortedNotifs.map(function (_ref2) {
                    var group = _ref2.value,
                        groupTitle = _ref2.key;

                    return React.createElement(
                        'div',
                        { key: groupTitle },
                        React.createElement(
                            'div',
                            { 'data-focus': 'notification-group--title' },
                            React.createElement(
                                'h2',
                                null,
                                translate(groupTitle) + ' (' + group.length + ')'
                            ),
                            React.createElement(
                                'button',
                                { className: 'mdl-button mdl-js-button mdl-button--icon', onClick: function onClick() {
                                        return onGroupRead(map(group, 'uuid'));
                                    } },
                                React.createElement(
                                    'i',
                                    { className: 'material-icons' },
                                    'done_all'
                                )
                            )
                        ),
                        React.createElement(NotificationList, { data: group.sort(sortDateFn), onRead: onSingleRead, onClick: onSingleClick })
                    );
                })
            );
        }
    }]);

    return NotificationGroup;
}(PureComponent);

NotificationGroup.propTypes = {
    data: PropTypes.array,
    onSingleRead: PropTypes.func.isRequired,
    onGroupRead: PropTypes.func.isRequired,
    onSingleClick: PropTypes.func.isRequired
};
NotificationGroup.displayName = 'NotificationGroup';
export default NotificationGroup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJQdXJlQ29tcG9uZW50IiwiTm90aWZpY2F0aW9uTGlzdCIsImNhcGl0YWxpemUiLCJncm91cEJ5IiwibWFwIiwicmVkdWNlIiwiZ2V0Q29uZmlnIiwibW9tZW50IiwiX2lzWW91bmdlclRoYW5BIiwicGVyaW9kTmFtZSIsImRhdGUiLCJkaWZmIiwic3VidHJhY3QiLCJncm91cERhdGUiLCJjcmVhdGlvbkRhdGUiLCJyb290IiwidHJhbnNsYXRlIiwia2V5IiwidHJhbnNsYXRlVGV4dCIsInNvcnREYXRlRm4iLCJhIiwiYiIsIkRhdGUiLCJzb3J0TmFtZUZuIiwiTm90aWZpY2F0aW9uR3JvdXAiLCJwcm9wcyIsImRhdGEiLCJvbkdyb3VwUmVhZCIsIm9uU2luZ2xlUmVhZCIsIm9uU2luZ2xlQ2xpY2siLCJncm91cGVkQW5kU29ydGVkTm90aWZzIiwiYWNjdW11bGF0b3IiLCJ2YWx1ZSIsInB1c2giLCJzb3J0IiwiZ3JvdXAiLCJncm91cFRpdGxlIiwibGVuZ3RoIiwicHJvcFR5cGVzIiwiYXJyYXkiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxJQUFlQyxTQUFmLEVBQTBCQyxhQUExQixRQUE4QyxPQUE5QztBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLHFCQUE3QjtBQUNBLFNBQVFDLFVBQVIsUUFBeUIsZUFBekI7QUFDQSxTQUFRQyxPQUFSLEVBQWlCQyxHQUFqQixFQUFzQkMsTUFBdEIsUUFBbUMsbUJBQW5DO0FBQ0EsU0FBUUMsU0FBUixRQUF3QixXQUF4QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsUUFBbkI7O0FBR0EsU0FBU0MsZUFBVCxDQUF5QkMsVUFBekIsRUFBcUNDLElBQXJDLEVBQTJDO0FBQ3ZDLFdBQU9ILE9BQU9HLElBQVAsRUFBYUMsSUFBYixDQUFrQkosU0FBU0ssUUFBVCxD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OztBQWdDaEN3QixrQkFBa0JjLFNBQWxCLEdBQThCO0FBQzFCWixVQUFNM0IsVUFBVXdDLEtBRFU7QUFFMUJYLGtCQUFjN0IsVUFBVXlDLElBQVYsQ0FBZUMsVUFGSDtBQUcxQmQsaUJBQWE1QixVQUFVeUMsSUFBVixDQUFlQyxVQUhGO0FBSTFCWixtQkFBZTlCLFVBQVV5QyxJQUFWLENBQWVDO0FBSkosQ0FBOUI7QUFNQWpCLGtCQUFrQmtCLFdBQWxCLEdBQWdDLG1CQUFoQztBQUNBLGVBQWVsQixpQkFBZiIsImZpbGUiOiJzaG9ydGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9EZXBlbmRlbmNpZXNcclxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzLCBQdXJlQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25MaXN0IGZyb20gJy4vbm90aWZpY2F0aW9uLWxpc3QnO1xyXG5pbXBvcnQge2NhcGl0YWxpemV9IGZyb20gJ2xvZGFzaC9zdHJpbmcnO1xyXG5pbXBvcnQge2dyb3VwQnksIG1hcCwgcmVkdWNlfSBmcm9tICdsb2Rhc2gvY29sbGVjdGlvbic7XHJcbmltcG9ydCB7Z2V0Q29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5cclxuZnVuY3Rpb24gX2lzWW91bmdlclRoYW5BKHBlcmlvZE5hbWUsIGRhdGUpIHtcclxuICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZGlmZihtb21lbnQoKS5zdWJ0cmFjdCgxLCBwZXJpb2ROYW1lKSkgPiAwO1xyXG59XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG8gZ3JvdXAgZGF0ZVxyXG5mdW5jdGlvbiBncm91cERhdGUoe2NyZWF0aW9uRGF0ZTogZGF0ZX0pIHtcclxuICAgIGNvbnN0IHJvb3QgPSAnZm9jdXMubm90aWZpY2F0aW9ucy5ncm91cHMnO1xyXG4gICAgaWYoX2lzWW91bmdlclRoYW5BKCdkYXknLCBkYXRlKSkge1xyXG4gICAgICAgIHJldHVybiBgJHtyb290fS4wX3RvZGF5YDtcclxuICAgIH1cclxuICAgIGlmKF9pc1lvdW5nZXJUaGFuQSgnd2VlaycsIGRhdGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3Jvb3R9LjFfbGFzdFdlZWtgO1xyXG4gICAgfVxyXG4gICAgaWYoX2lzWW91bmdlclRoYW5BKCdtb250aCcsIGRhdGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3Jvb3R9LjJfbGFzdE1vbnRoYDtcclxuICAgIH1cclxuICAgIHJldHVybiBgJHtyb290fS4zX2JlZm9yZWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZShrZXkpe1xyXG4gICAgY29uc3Qge3RyYW5zbGF0ZVRleHR9ID0gZ2V0Q29uZmlnKCk7XHJcbiAgICByZXR1cm4gdHJhbnNsYXRlVGV4dChrZXkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzb3J0RGF0ZUZuKGEsIGIpe1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGIuY3JlYXRpb25EYXRlKSAtIG5ldyBEYXRlKGEuY3JlYXRpb25EYXRlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc29ydE5hbWVGbihhLGIpe1xyXG4gICAgaWYgKGEua2V5IDwgYi5rZXkpXHJcbiAgICByZXR1cm4gLTE7XHJcbiAgICBlbHNlIGlmIChhLmtleSA+IGIua2V5KVxyXG4gICAgcmV0dXJuIDE7XHJcbiAgICBlbHNlXHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5cclxuLy9NYXliZSBpIHNob3VsZCBhZGQgYSBOb3RpZmljYXRpb24gR3JvdXAgY29tcG9uZW50IGJ5IGRhdGUgd2hpY2ggdXNlcyBhIG5vdGlmY2lhdGlvbiBsaXN0IGNvbXBvbmVudFxyXG5jbGFzcyBOb3RpZmljYXRpb25Hcm91cCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtkYXRhLCBvbkdyb3VwUmVhZCwgb25TaW5nbGVSZWFkLCBvblNpbmdsZUNsaWNrfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgZ3JvdXBlZEFuZFNvcnRlZE5vdGlmcyA9IHJlZHVjZShcclxuICAgICAgICAgICAgZ3JvdXBCeShkYXRhLCBncm91cERhdGUpLFxyXG4gICAgICAgICAgICAoYWNjdW11bGF0b3IsIHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIGFjY3VtdWxhdG9yLnB1c2goe2tleSwgdmFsdWV9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW11cclxuICAgICAgICApLnNvcnQoc29ydE5hbWVGbik7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdub3RpZmljYXRpb24tZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwZWRBbmRTb3J0ZWROb3RpZnMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoe3ZhbHVlOiBncm91cCwga2V5OiBncm91cFRpdGxlfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Z3JvdXBUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nbm90aWZpY2F0aW9uLWdyb3VwLS10aXRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2Ake3RyYW5zbGF0ZShncm91cFRpdGxlKX0gKCR7Z3JvdXAubGVuZ3RofSlgfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLWljb24nIG9uQ2xpY2s9eygpPT4gb25Hcm91cFJlYWQobWFwKGdyb3VwLCAndXVpZCcpKX0+PGkgY2xhc3NOYW1lPSdtYXRlcmlhbC1pY29ucyc+ZG9uZV9hbGw8L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uTGlzdCBkYXRhPXtncm91cC5zb3J0KHNvcnREYXRlRm4pfSBvblJlYWQ9e29uU2luZ2xlUmVhZH0gb25DbGljaz17b25TaW5nbGVDbGlja30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbn1cclxuTm90aWZpY2F0aW9uR3JvdXAucHJvcFR5cGVzID0ge1xyXG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgb25TaW5nbGVSZWFkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgb25Hcm91cFJlYWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBvblNpbmdsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcbk5vdGlmaWNhdGlvbkdyb3VwLmRpc3BsYXlOYW1lID0gJ05vdGlmaWNhdGlvbkdyb3VwJztcclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uR3JvdXA7XHJcbiJdfQ==