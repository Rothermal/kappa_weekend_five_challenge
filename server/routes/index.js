/**
 * Created by JFCS on 3/25/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var pets = require('./pets');


router.get('/pets',pets);
router.post('/pets',pets);
router.delete('/pets/:id',pets);


router.get('/',function(request,response){
    response.sendFile(path.join(__dirname,"../public/views/index.html"));
});


router.get('/*', function(request, response){
    response.redirect('/');
});



module.exports = router;