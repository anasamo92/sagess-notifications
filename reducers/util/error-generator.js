export default function generateError(_ref) {
    var name = _ref.name,
        action = _ref.action,
        expectedType = _ref.expectedType;
    var type = action.type,
        payload = action.payload;

    return name + " reducer : action " + type + " : the payload is not a(n) " + expectedType + " it is : " + JSON.stringify(payload);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiZ2VuZXJhdGVFcnJvciIsIm5hbWUiLCJhY3Rpb24iLCJleHBlY3RlZFR5cGUiLCJ0eXBlIiwicGF5bG9hZCIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUsU0FBU0EsYUFBVCxPQUFxRDtBQUFBLFFBQTdCQyxJQUE2QixRQUE3QkEsSUFBNkI7QUFBQSxRQUF2QkMsTUFBdUIsUUFBdkJBLE1BQXVCO0FBQUEsUUFBZkMsWUFBZSxRQUFmQSxZQUFlO0FBQUEsUUFDekRDLElBRHlELEdBQ3hDRixNQUR3QyxDQUN6REUsSUFEeUQ7QUFBQSxRQUNuREMsT0FEbUQsR0FDeENILE1BRHdDLENBQ25ERyxPQURtRDs7QUFFaEUsV0FBVUosSUFBViwwQkFBbUNHLElBQW5DLG1DQUFxRUQsWUFBckUsaUJBQTZGRyxLQUFLQyxTQUFMLENBQWVGLE9BQWYsQ0FBN0Y7QUFDSCIsImZpbGUiOiJzaG9ydGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVFcnJvcih7bmFtZSwgYWN0aW9uLCBleHBlY3RlZFR5cGV9KSB7XHJcbiAgICBjb25zdCB7dHlwZSwgcGF5bG9hZH0gPSBhY3Rpb247XHJcbiAgICByZXR1cm4gYCR7bmFtZX0gcmVkdWNlciA6IGFjdGlvbiAke3R5cGV9IDogdGhlIHBheWxvYWQgaXMgbm90IGEobikgJHtleHBlY3RlZFR5cGV9IGl0IGlzIDogJHtKU09OLnN0cmluZ2lmeShwYXlsb2FkKX1gO1xyXG59XHJcbiJdfQ==