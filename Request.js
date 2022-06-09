const request = require('request');

_EXTERNAL_URL = 'https://jsonplaceholder.typicode.com/posts/1/comments';

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
        if (err) {
            return callback(err);
        }
        return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;