// const URL = 'http://jsonplaceholder.typicode.com/posts'
//
// // синхронный код
// function syncXHR(method, url, data) {
//     var xhr = new XMLHttpRequest();
//
//     xhr.open(method, url, false);
//     xhr.send(data);
//
//     return xhr.responseText;
// }
//
// var data = syncXHR('GET', URL);
// // data = processData(data);
//
// syncXHR('POST', URL, data);
// syncXHR('POST', URL, data);
// console.log('Done')

// ассинхронный код
// @ts-ignore
const URL = 'http://jsonplaceholder.typicode.com/posts'
function asyncXHR(method, url, data, callback) {
    var xhr = new XMLHttpRequest();

    xhr.open(method, url, true);

    // этот метдо делает запросы асинхронными
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback(null, xhr.responseText);
        } else {
            callback('error');
        }
    }

    xhr.send(data);
}

asyncXHR('GET', URL, null,
    function (err, data) {
        // data = processData(data)
        var counter = 7;

        function done(err, data) {
            counter--;
            if (!counter) console.log('Done!');
        }

        asyncXHR('POST', URL, data, done);
        asyncXHR('POST', URL, data, done);
        asyncXHR('POST', URL, data, done);
        asyncXHR('POST', URL, data, done);
        asyncXHR('POST', URL, data, done);
        asyncXHR('POST', URL, data, done);
        asyncXHR('POST', URL, data, done);
    }
)

console.log('Done! 2')
