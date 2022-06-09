const https = require('https');

_EXTERNAL_URL2 = 'https://jsonplaceholder.typicode.com/posts';


const callExternalApiUsingHttp = (callback) => {
    https.get(_EXTERNAL_URL2, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            return callback(data);
            // console.log(JSON.stringify(data));
        });

    }).on("error", (err) => {

        console.log("Error: " + err.message);
    });
}

module.exports.callApi = callExternalApiUsingHttp;