/**
 * Created by JFCS on 3/27/16.
 */
myApp.controller('FormController',['$scope','PetService',function($scope,PetService){
    $scope.pet = {};
    $scope.title = "This is the Form Controller";
    $scope.test = PetService.test;
    $scope.postPets = function(pet){
        PetService.postData(pet);
        $scope.pet = {};
    };



}]);