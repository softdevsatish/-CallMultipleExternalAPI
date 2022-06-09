const apiCallFromRequest = require('./Request')
const apiCallFromHttp = require('./HttpCall')

const express = require("express");
const app = express();
const PORT = 2525;


app.use('/request', (req, res) => {
    apiCallFromRequest.callApi(function (response) {
        res.write(JSON.stringify(response));
        res.end();
    });
});

app.use('/http', (req, res) => {
    apiCallFromHttp.callApi(function (response) {
        res.write(response);
        res.end();
    });

})

app.listen(PORT, () => { console.log(`App is Listening on ${PORT}`) })






