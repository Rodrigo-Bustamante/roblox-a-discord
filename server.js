const express = require('express')
    , app = express();

const https = require('https');

app.post('/:id/:token/:data', function(req, res){
    console.log(req.headers);
});

const server = app.listen(process.env.PORT, () => {
    console.log(`server listening on ${server.address().port}`);
});