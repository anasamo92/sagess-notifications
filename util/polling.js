//inspired by http://davidwalsh.name/javascript-polling
// just a promise instead of defer version.
// The polling function
export default function poll(fn) {
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.MAX_SAFE_INTEGER;

    var endTime = +new Date() + timeout;
    return new Promise(function p(resolve, reject) {
        if (fn()) {
            resolve();
        }
        // If the condition isn't met but the timeout hasn't elapsed, go again
        else if (+new Date() < endTime) {
                setTimeout(p, interval);
            }
            // Didn't match and too much time, reject!
            else {
                    reject(new Error('timed out for ' + fn + ': ' + arguments));
                }
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsicG9sbCIsImZuIiwiaW50ZXJ2YWwiLCJ0aW1lb3V0IiwiTnVtYmVyIiwiTUFYX1NBRkVfSU5URUdFUiIsImVuZFRpbWUiLCJEYXRlIiwiUHJvbWlzZSIsInAiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsIkVycm9yIiwiYXJndW1lbnRzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVNBLElBQVQsQ0FBY0MsRUFBZCxFQUFzRTtBQUFBLFFBQXBEQyxRQUFvRCx1RUFBekMsSUFBeUM7QUFBQSxRQUFuQ0MsT0FBbUMsdUVBQXpCQyxPQUFPQyxnQkFBa0I7O0FBQ2pGLFFBQU1DLFVBQVUsQ0FBQyxJQUFJQyxJQUFKLEVBQUQsR0FBY0osT0FBOUI7QUFDQSxXQUFPLElBQUlLLE9BQUosQ0FBWSxTQUFTQyxDQUFULENBQVdDLE9BQVgsRUFBb0JDLE1BQXBCLEVBQTRCO0FBQzNDLFlBQUdWLElBQUgsRUFBUztBQUNMUztBQUNIO0FBQ0Q7QUFIQSxhQUlLLElBQUssQ0FBQyxJQUFJSCxJQUFKLEVBQUQsR0FBY0QsT0FBbkIsRUFBNEI7QUFDN0JNLDJCQUFXSCxDQUFYLEVBQWNQLFFBQWQ7QUFDSDtBQUNEO0FBSEssaUJBSUE7QUFDRFMsMkJBQU8sSUFBSUUsS0FBSixDQUFVLG1CQUFtQlosRUFBbkIsR0FBd0IsSUFBeEIsR0FBK0JhLFNBQXpDLENBQVA7QUFDSDtBQUNKLEtBWk0sQ0FBUDtBQWFIIiwiZmlsZSI6InNob3J0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luc3BpcmVkIGJ5IGh0dHA6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1wb2xsaW5nXHJcbi8vIGp1c3QgYSBwcm9taXNlIGluc3RlYWQgb2YgZGVmZXIgdmVyc2lvbi5cclxuLy8gVGhlIHBvbGxpbmcgZnVuY3Rpb25cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9sbChmbiwgaW50ZXJ2YWwgPSAxMDAwLCB0aW1lb3V0ID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpIHtcclxuICAgIGNvbnN0IGVuZFRpbWUgPSArbmV3IERhdGUoKSArIHRpbWVvdXQ7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gcChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBpZihmbigpKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgdGhlIGNvbmRpdGlvbiBpc24ndCBtZXQgYnV0IHRoZSB0aW1lb3V0IGhhc24ndCBlbGFwc2VkLCBnbyBhZ2FpblxyXG4gICAgICAgIGVsc2UgaWYgKCArbmV3IERhdGUoKSA8IGVuZFRpbWUpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChwLCBpbnRlcnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERpZG4ndCBtYXRjaCBhbmQgdG9vIG11Y2ggdGltZSwgcmVqZWN0IVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCd0aW1lZCBvdXQgZm9yICcgKyBmbiArICc6ICcgKyBhcmd1bWVudHMpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iXX0=