const express = require('express')
    , app = express();
const axios = require('axios')

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.json());
app.use(express.urlencoded());

const https = require('https');

app.post('/:id/:token', function(req, res){
    axios
    .post(`https://discord.com/api/webhooks/${req.params.id}/${req.params.token}`, req.body)
    .then(ress =>{
        res.send('Success')
    })
    .catch(error => {
        console.error(error)
    })
});

app.patch('/:id/:token', function(req, res){
    axios
    .patch(`https://discord.com/api/webhooks/${req.params.id}/${req.params.token}`, req.body)
    .then(()=>{
        res.send('Success');
    })
    .catch(error => {
        console.error(error)
    })
})

app.delete('/:id/:token', function(req, res){
    axios
    .patch(`https://discord.com/api/webhooks/${req.params.id}/${req.params.token}`)
    .then(()=>{
        res.send('Success');
    })
    .catch(error => {
        console.error(error)
    })
})

const server = app.listen(process.env.PORT, () => {
    console.log(`server listening on ${server.address().port}`);
});