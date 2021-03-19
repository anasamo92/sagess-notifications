import { SET_ERROR, CLEAR_ERROR } from '../actions/error';

// reducer in charge of dealing with the visibility filter.
export default function errorReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = action.type,
        payload = action.payload;

    switch (type) {
        case SET_ERROR:
            return Object.assign({}, payload);
        case CLEAR_ERROR:
            return false;
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiU0VUX0VSUk9SIiwiQ0xFQVJfRVJST1IiLCJlcnJvclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFRQSxTQUFSLEVBQW1CQyxXQUFuQixRQUFxQyxrQkFBckM7O0FBRUE7QUFDQSxlQUFlLFNBQVNDLFlBQVQsR0FBa0Q7QUFBQSxRQUE1QkMsS0FBNEIsdUVBQXBCLEtBQW9CO0FBQUEsUUFBYkMsTUFBYSx1RUFBSixFQUFJO0FBQUEsUUFDdERDLElBRHNELEdBQ3JDRCxNQURxQyxDQUN0REMsSUFEc0Q7QUFBQSxRQUNoREMsT0FEZ0QsR0FDckNGLE1BRHFDLENBQ2hERSxPQURnRDs7QUFFN0QsWUFBUUQsSUFBUjtBQUNJLGFBQUtMLFNBQUw7QUFDSSxxQ0FBV00sT0FBWDtBQUNKLGFBQUtMLFdBQUw7QUFDSSxtQkFBTyxLQUFQO0FBQ0o7QUFDSSxtQkFBT0UsS0FBUDtBQU5SO0FBUUgiLCJmaWxlIjoic2hvcnRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U0VUX0VSUk9SLCBDTEVBUl9FUlJPUn0gZnJvbSAnLi4vYWN0aW9ucy9lcnJvcic7XHJcblxyXG4vLyByZWR1Y2VyIGluIGNoYXJnZSBvZiBkZWFsaW5nIHdpdGggdGhlIHZpc2liaWxpdHkgZmlsdGVyLlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlcnJvclJlZHVjZXIoc3RhdGUgPSBmYWxzZSwgYWN0aW9uID0ge30pIHtcclxuICAgIGNvbnN0IHt0eXBlLCBwYXlsb2FkfSA9IGFjdGlvbjtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgU0VUX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnBheWxvYWR9O1xyXG4gICAgICAgIGNhc2UgQ0xFQVJfRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuIl19