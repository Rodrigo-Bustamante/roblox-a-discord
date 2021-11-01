const express = require('express')
    , app = express();

const https = require('https');

app.use(express.static('public'));

app.get('/postdiscord', function(req, res){
    console.log("\n\nNuevo req");
    console.log(req.body);

    res.send(":'v")
});

const server = app.listen(process.env.PORT, () => {
    console.log(`server listening on ${server.address().port}`);
});