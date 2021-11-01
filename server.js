const express = require('express')
    , app = express();

const https = require('https');

app.post('/:id/:token', function(req, res){
    console.log(req.body);
});

const server = app.listen(process.env.PORT, () => {
    console.log(`server listening on ${server.address().port}`);
});