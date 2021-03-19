import fetch from 'isomorphic-fetch';
import { getConfig } from '../config';
import { clearError, setError } from './error';
export var REQUEST_NOTIFICATIONS = 'REQUEST_NOTIFICATIONS';
export var RECEIVE_NOTIFICATIONS = 'RECEIVE_NOTIFICATIONS';

//
function requestNotifications(user) {
    return {
        type: REQUEST_NOTIFICATIONS,
        user: user
    };
}

//
function receiveNotifications(user, json) {
    return {
        type: RECEIVE_NOTIFICATIONS,
        user: user,
        payload: json
    };
}

//Example call
// store.dispatch(fetchNotifications('userId'));

export function fetchNotifications(user, fromDate) {

    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.
    //
    return function dispatchFetchNotifications(dispatch) {
        //read the conf after extension.
        var config = getConfig();
        //Create the URL
        var URL = config.rootURL + '/' + config.notificationURL;

        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        //Maybe see https://github.com/rackt/redux/issues/911#issuecomment-149361073 for a saner implementation instead of chaining two dispatch.
        dispatch(clearError());
        dispatch(requestNotifications(user));

        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.

        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.
        var datePartURL = fromDate ? '?date=' + fromDate : '';
        var credentialOptions = config.useCredentials ? { credentials: 'include' } : {};
        var contentType = config.noContentType ? {} : config.contentType ? { headers: { contentType: contentType } } : { headers: { 'Content-Type': 'application/json' } };
        return fetch('' + URL + datePartURL, Object.assign({}, contentType, credentialOptions)).then(function (response) {
            return response && response.status !== 204 ? response.json() : undefined;
        }).then(function (json) {
            return dispatch(receiveNotifications(user, json));
        }) // Here, we update the app state with the results of the API call.
        .catch(function (err) {
            return dispatch(setError({ content: err.message, type: 'network' }));
        });
    };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiZmV0Y2giLCJnZXRDb25maWciLCJjbGVhckVycm9yIiwic2V0RXJyb3IiLCJSRVFVRVNUX05PVElGSUNBVElPTlMiLCJSRUNFSVZFX05PVElGSUNBVElPTlMiLCJyZXF1ZXN0Tm90aWZpY2F0aW9ucyIsInVzZXIiLCJ0eXBlIiwicmVjZWl2ZU5vdGlmaWNhdGlvbnMiLCJqc29uIiwicGF5bG9hZCIsImZldGNoTm90aWZpY2F0aW9ucyIsImZyb21EYXRlIiwiZGlzcGF0Y2hGZXRjaE5vdGlmaWNhdGlvbnMiLCJkaXNwYXRjaCIsImNvbmZpZyIsIlVSTCIsInJvb3RVUkwiLCJub3RpZmljYXRpb25VUkwiLCJkYXRlUGFydFVSTCIsImNyZWRlbnRpYWxPcHRpb25zIiwidXNlQ3JlZGVudGlhbHMiLCJjcmVkZW50aWFscyIsImNvbnRlbnRUeXBlIiwibm9Db250ZW50VHlwZSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJ1bmRlZmluZWQiLCJjYXRjaCIsImNvbnRlbnQiLCJlcnIiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLE1BQWtCLGtCQUFsQjtBQUNBLFNBQVFDLFNBQVIsUUFBd0IsV0FBeEI7QUFDQSxTQUFRQyxVQUFSLEVBQW9CQyxRQUFwQixRQUFtQyxTQUFuQztBQUNBLE9BQU8sSUFBTUMsd0JBQXdCLHVCQUE5QjtBQUNQLE9BQU8sSUFBTUMsd0JBQXdCLHVCQUE5Qjs7QUFFUDtBQUNBLFNBQVNDLG9CQUFULENBQThCQyxJQUE5QixFQUFvQztBQUNoQyxXQUFPO0FBQ0hDLGNBQU1KLHFCQURIO0FBRUhHO0FBRkcsS0FBUDtBQUlIOztBQUVEO0FBQ0EsU0FBU0Usb0JBQVQsQ0FBOEJGLElBQTlCLEVBQW9DRyxJQUFwQyxFQUEwQztBQUN0QyxXQUFPO0FBQ0hGLGNBQU1ILHFCQURIO0FBRUhFLGtCQUZHO0FBR0hJLGlCQUFTRDtBQUhOLEtBQVA7QUFLSDs7QUFFRDtBQUNBOztBQUVBLE9BQU8sU0FBU0Usa0JBQVQsQ0FBNEJMLElBQTVCLEVBQWtDTSxRQUFsQyxFQUE0Qzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFPLFNBQVNDLDBCQUFULENBQW9DQyxRQUFwQyxFQUE4QztBQUNqRDtBQUNBLFlBQU1DLFNBQVNmLFdBQWY7QUFDQTtBQUNBLFlBQU1nQixNQUFTRCxPQUFPRSxPQUFoQixTQUEyQkYsT0FBT0csZUFBeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0FKLGlCQUFTYixZQUFUO0FBQ0FhLGlCQUFTVCxxQkFBcUJDLElBQXJCLENBQVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBTWEsY0FBY1Asc0JBQW9CQSxRQUFwQixHQUFpQyxFQUFyRDtBQUNBLFlBQU1RLG9CQUFvQkwsT0FBT00sY0FBUCxHQUF3QixFQUFFQyxhQUFhLFNBQWYsRUFBeEIsR0FBb0QsRUFBOUU7QUFDQSxZQUFNQyxjQUFjUixPQUFPUyxhQUFQLEdBQXVCLEVBQXZCLEdBQTRCVCxPQUFPUSxXQUFQLEdBQXFCLEVBQUNFLFNBQVMsRUFBQ0Ysd0JBQUQsRUFBVixFQUFyQixHQUFnRCxFQUFFRSxTQUFTLEVBQUMsZ0JBQWdCLGtCQUFqQixFQUFYLEVBQWhHO0FBQ0EsZUFBTzFCLFdBQVNpQixHQUFULEdBQWVHLFdBQWYsb0JBQWtDSSxXQUFsQyxFQUFrREgsaUJBQWxELEdBQ05NLElBRE0sQ0FDRDtBQUFBLG1CQUFZQyxZQUFZQSxTQUFTQyxNQUFULEtBQW9CLEdBQWhDLEdBQXNDRCxTQUFTbEIsSUFBVCxFQUF0QyxHQUF3RG9CLFNBQXBFO0FBQUEsU0FEQyxFQUVGSCxJQUZFLENBRUc7QUFBQSxtQkFBUVosU0FBU04scUJBQXFCRixJQUFyQixFQUEyQkcsSUFBM0IsQ0FBVCxDQUFSO0FBQUEsU0FGSCxFQUV1RDtBQUZ2RCxTQUdGcUIsS0FIRSxDQUdJO0FBQUEsbUJBQU9oQixTQUFTWixTQUFTLEVBQUM2QixTQUFTQyxJQUFJQyxPQUFkLEVBQXVCMUIsTUFBTSxTQUE3QixFQUFULENBQVQsQ0FBUDtBQUFBLFNBSEosQ0FBUDtBQUlILEtBeEJEO0FBeUJIIiwiZmlsZSI6InNob3J0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7Z2V0Q29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQge2NsZWFyRXJyb3IsIHNldEVycm9yfSBmcm9tICcuL2Vycm9yJztcclxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfTk9USUZJQ0FUSU9OUyA9ICdSRVFVRVNUX05PVElGSUNBVElPTlMnO1xyXG5leHBvcnQgY29uc3QgUkVDRUlWRV9OT1RJRklDQVRJT05TID0gJ1JFQ0VJVkVfTk9USUZJQ0FUSU9OUydcclxuXHJcbi8vXHJcbmZ1bmN0aW9uIHJlcXVlc3ROb3RpZmljYXRpb25zKHVzZXIpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogUkVRVUVTVF9OT1RJRklDQVRJT05TLFxyXG4gICAgICAgIHVzZXJcclxuICAgIH07XHJcbn1cclxuXHJcbi8vXHJcbmZ1bmN0aW9uIHJlY2VpdmVOb3RpZmljYXRpb25zKHVzZXIsIGpzb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogUkVDRUlWRV9OT1RJRklDQVRJT05TLFxyXG4gICAgICAgIHVzZXIsXHJcbiAgICAgICAgcGF5bG9hZDoganNvblxyXG4gICAgfTtcclxufVxyXG5cclxuLy9FeGFtcGxlIGNhbGxcclxuLy8gc3RvcmUuZGlzcGF0Y2goZmV0Y2hOb3RpZmljYXRpb25zKCd1c2VySWQnKSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hOb3RpZmljYXRpb25zKHVzZXIsIGZyb21EYXRlKSB7XHJcblxyXG4gICAgLy8gVGh1bmsgbWlkZGxld2FyZSBrbm93cyBob3cgdG8gaGFuZGxlIGZ1bmN0aW9ucy5cclxuICAgIC8vIEl0IHBhc3NlcyB0aGUgZGlzcGF0Y2ggbWV0aG9kIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSBmdW5jdGlvbixcclxuICAgIC8vIHRodXMgbWFraW5nIGl0IGFibGUgdG8gZGlzcGF0Y2ggYWN0aW9ucyBpdHNlbGYuXHJcbiAgICAvL1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGRpc3BhdGNoRmV0Y2hOb3RpZmljYXRpb25zKGRpc3BhdGNoKSB7XHJcbiAgICAgICAgLy9yZWFkIHRoZSBjb25mIGFmdGVyIGV4dGVuc2lvbi5cclxuICAgICAgICBjb25zdCBjb25maWcgPSBnZXRDb25maWcoKTtcclxuICAgICAgICAvL0NyZWF0ZSB0aGUgVVJMXHJcbiAgICAgICAgY29uc3QgVVJMID0gYCR7Y29uZmlnLnJvb3RVUkx9LyR7Y29uZmlnLm5vdGlmaWNhdGlvblVSTH1gXHJcblxyXG4gICAgICAgIC8vIEZpcnN0IGRpc3BhdGNoOiB0aGUgYXBwIHN0YXRlIGlzIHVwZGF0ZWQgdG8gaW5mb3JtXHJcbiAgICAgICAgLy8gdGhhdCB0aGUgQVBJIGNhbGwgaXMgc3RhcnRpbmcuXHJcbiAgICAgICAgLy9NYXliZSBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3JhY2t0L3JlZHV4L2lzc3Vlcy85MTEjaXNzdWVjb21tZW50LTE0OTM2MTA3MyBmb3IgYSBzYW5lciBpbXBsZW1lbnRhdGlvbiBpbnN0ZWFkIG9mIGNoYWluaW5nIHR3byBkaXNwYXRjaC5cclxuICAgICAgICBkaXNwYXRjaChjbGVhckVycm9yKCkpO1xyXG4gICAgICAgIGRpc3BhdGNoKHJlcXVlc3ROb3RpZmljYXRpb25zKHVzZXIpKTtcclxuXHJcbiAgICAgICAgLy8gVGhlIGZ1bmN0aW9uIGNhbGxlZCBieSB0aGUgdGh1bmsgbWlkZGxld2FyZSBjYW4gcmV0dXJuIGEgdmFsdWUsXHJcbiAgICAgICAgLy8gdGhhdCBpcyBwYXNzZWQgb24gYXMgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZGlzcGF0Y2ggbWV0aG9kLlxyXG5cclxuICAgICAgICAvLyBJbiB0aGlzIGNhc2UsIHdlIHJldHVybiBhIHByb21pc2UgdG8gd2FpdCBmb3IuXHJcbiAgICAgICAgLy8gVGhpcyBpcyBub3QgcmVxdWlyZWQgYnkgdGh1bmsgbWlkZGxld2FyZSwgYnV0IGl0IGlzIGNvbnZlbmllbnQgZm9yIHVzLlxyXG4gICAgICAgIGNvbnN0IGRhdGVQYXJ0VVJMID0gZnJvbURhdGUgPyBgP2RhdGU9JHtmcm9tRGF0ZX1gIDogJyc7XHJcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbE9wdGlvbnMgPSBjb25maWcudXNlQ3JlZGVudGlhbHMgPyB7IGNyZWRlbnRpYWxzOiAnaW5jbHVkZSd9IDoge307XHJcbiAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSBjb25maWcubm9Db250ZW50VHlwZSA/IHt9IDogY29uZmlnLmNvbnRlbnRUeXBlID8ge2hlYWRlcnM6IHtjb250ZW50VHlwZX19IDogeyBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9fTtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7VVJMfSR7ZGF0ZVBhcnRVUkx9YCwgey4uLmNvbnRlbnRUeXBlLCAuLi5jcmVkZW50aWFsT3B0aW9uc30pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3RhdHVzICE9PSAyMDQgPyByZXNwb25zZS5qc29uKCkgOiB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4gZGlzcGF0Y2gocmVjZWl2ZU5vdGlmaWNhdGlvbnModXNlciwganNvbikpKSAvLyBIZXJlLCB3ZSB1cGRhdGUgdGhlIGFwcCBzdGF0ZSB3aXRoIHRoZSByZXN1bHRzIG9mIHRoZSBBUEkgY2FsbC5cclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBkaXNwYXRjaChzZXRFcnJvcih7Y29udGVudDogZXJyLm1lc3NhZ2UsIHR5cGU6ICduZXR3b3JrJ30pKSk7XHJcbiAgICB9O1xyXG59XHJcbiJdfQ==