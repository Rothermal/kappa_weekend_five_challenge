/**
 * Created by JFCS on 3/26/16.
 */
var express= require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/kappa_pet_weekend5');

mongoose.model('pets', new Schema({"name": String, "animal": String, "age": Number,"image":String},{collection:"pets"}));
var Pet = mongoose.model('pets');


router.get('/pets',function(req,res){
    Pet.find(function(err,data){
        if (err){
            console.log('err getting stuff back',err);
        }
        res.send(data);
    });

});

router.post('/pets',function(req,res){
    console.log('animal to post',req.body);
    var pet = req.body;
    var addedPet = new Pet({"name": pet.name, "animal": pet.type, "age": pet.age,"image":pet.image});
    addedPet.save(function(err,response){
        if (err){
            console.log('had an error saving to db',err)
        }
        res.send(response);

    });
});


router.delete('/pets/:id',function(req,res){
    console.log('hit delete',req.params.id);
    Pet.remove({ _id :req.params.id},function(err,data){
        if (err){
            console.log('err getting stuff back',err);
        }
        res.send(data);
    });

});

module.exports = router;