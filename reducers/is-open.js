import { OPEN_CENTER, CLOSE_CENTER } from '../actions';

// reducer in charge of dealing with the visibility of the notification center.
export default function isOpenReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = action.type;

    switch (type) {
        case OPEN_CENTER:
            return true;
        case CLOSE_CENTER:
            return false;
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiT1BFTl9DRU5URVIiLCJDTE9TRV9DRU5URVIiLCJpc09wZW5SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxXQUFULEVBQXNCQyxZQUF0QixRQUF5QyxZQUF6Qzs7QUFFQTtBQUNBLGVBQWUsU0FBU0MsYUFBVCxHQUFtRDtBQUFBLFFBQTVCQyxLQUE0Qix1RUFBcEIsS0FBb0I7QUFBQSxRQUFiQyxNQUFhLHVFQUFKLEVBQUk7QUFBQSxRQUN2REMsSUFEdUQsR0FDL0NELE1BRCtDLENBQ3ZEQyxJQUR1RDs7QUFFOUQsWUFBUUEsSUFBUjtBQUNJLGFBQUtMLFdBQUw7QUFDSSxtQkFBTyxJQUFQO0FBQ0osYUFBS0MsWUFBTDtBQUNJLG1CQUFPLEtBQVA7QUFDSjtBQUNJLG1CQUFPRSxLQUFQO0FBTlI7QUFRSCIsImZpbGUiOiJzaG9ydGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT1BFTl9DRU5URVIsIENMT1NFX0NFTlRFUn0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcblxyXG4vLyByZWR1Y2VyIGluIGNoYXJnZSBvZiBkZWFsaW5nIHdpdGggdGhlIHZpc2liaWxpdHkgb2YgdGhlIG5vdGlmaWNhdGlvbiBjZW50ZXIuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzT3BlblJlZHVjZXIoc3RhdGUgPSBmYWxzZSwgYWN0aW9uID0ge30pIHtcclxuICAgIGNvbnN0IHt0eXBlfSA9IGFjdGlvbjtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgT1BFTl9DRU5URVI6XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGNhc2UgQ0xPU0VfQ0VOVEVSOlxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==