var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var index = require('./routes/index');
var port = process.env.PORT || 3000;
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('server/public'));

app.use('/',index);

var server = app.listen(port,function(){
   var port = server.address().port;
    console.log('now listening on port : ', port);
});


module.exports = app;