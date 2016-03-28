/**
 * Created by JFCS on 3/27/16.
 */
myApp.controller('PetListController',['$scope','PetService',function($scope,PetService){
    PetService.getData();
    $scope.pets = [];
    $scope.title = "These are the pets currently in the database.";

    $scope.reverse = false;

    $scope.sort = function(){
        if( $scope.reverse === true){
            $scope.reverse = false;
        }  else{
            $scope.reverse = true;
        }
        console.log('reversed??',$scope.reverse);
    };


    $scope.test = PetService.test;
    $scope.pets = PetService.pets.object;

    $scope.removePet = function (id){
        PetService.removeData(id);
        for(var i = 0; i < $scope.pets.length;i++) {
            if($scope.pets[i]._id === id ) {
                $scope.pets.splice(i, 1);
            }
        }

    };

}]);
