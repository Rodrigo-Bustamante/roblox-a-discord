const express = require('express')
    , app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.json());
app.use(express.urlencoded());

const https = require('https');

app.post('/:id/:token', function(req, res){
    console.log(req.body);
});

const server = app.listen(process.env.PORT, () => {
    console.log(`server listening on ${server.address().port}`);
});