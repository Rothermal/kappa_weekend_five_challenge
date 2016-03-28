var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var index = require('./routes/index');
var port = process.env.PORT || 3000;
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('server/public'));


///////////////////////////////////////
//var mongoURI = 'mongodb://localhost:27017/';
//var mongoDB = mongoose.connect(mongoURI).connection;
//
//mongoDB.on('error', function(err){
//    console.log('MongoDB error: ', err);
//});
//
//mongoDB.on('open', function(){
//    console.log('MongoDB connected!');
//});
///////////////////////////////////////



app.use('/',index);

var server = app.listen(port,function(){
   var port = server.address().port;
    console.log('now listening on port : ', port);
});


module.exports = app;