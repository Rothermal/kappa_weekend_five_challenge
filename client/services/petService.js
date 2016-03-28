
myApp.factory('PetService',['$http',function($http){
    var somePets = "Factory testing in progress.";
    var pets = {};

    var postPets = function(object) {
        console.log('only want to post if animal has name.',object);
        if(object.name) {
            $http.post('/pets', object).then(function (response) {
                console.log('response in factory post', response);
                getPets();
            });

        }

    };

    var getPets = function() {

        $http.get('/pets').then(function (response) {
            console.log('response in factory get',response);
            pets.object = response.data;

        });

    };

    var removePets = function(id){
        $http.delete('/pets/'+ id).then(function (response) {
            console.log('response in factory delete',response);
        });
        getPets();
    };

    return {
        test : somePets,
        getData : getPets,
        postData : postPets,
        pets: pets,
        removeData : removePets
    };
}]);
